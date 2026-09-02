import { ofetch } from 'ofetch';

const localReadmes = import.meta.glob('../content/projects/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

const parseGithubRepo = (githubUrl) => {
    const match = githubUrl?.match(/github\.com\/([^/]+)\/([^/#?]+)/);
    if (!match) {
        return null;
    }

    return {
        owner: match[1],
        repo: match[2].replace(/\.git$/, ''),
    };
};

export const getLocalReadme = (projectId) => {
    return localReadmes[`../content/projects/${projectId}.md`] ?? null;
};

export const rewriteRelativeMarkdownUrls = (markdown, githubUrl) => {
    const repo = parseGithubRepo(githubUrl);
    if (!repo) {
        return markdown;
    }

    const rawBase = `https://cdn.jsdelivr.net/gh/${repo.owner}/${repo.repo}@HEAD/`;

    return markdown.replace(
        /!\[([^\]]*)]\((?!https?:|\/\/|data:|#)([^)]+)\)/g,
        (_match, alt, src) => {
            const clean = src.trim().replace(/^<|>$/g, '').replace(/^\.\//, '').replace(/^\//, '');
            return `![${alt}](${rawBase}${clean})`;
        },
    );
};

const remoteReadmeCandidates = (githubUrl) => {
    const repo = parseGithubRepo(githubUrl);
    if (!repo) {
        return [];
    }

    const slug = `${repo.owner}/${repo.repo}`;
    return [
        `https://cdn.jsdelivr.net/gh/${slug}@main/README.md`,
        `https://cdn.jsdelivr.net/gh/${slug}@master/README.md`,
    ];
};

export const fetchGithubReadme = async (githubUrl) => {
    for (const url of remoteReadmeCandidates(githubUrl)) {
        try {
            const markdown = await ofetch(url, {
                responseType: 'text',
                retry: 0,
                timeout: 4000,
            });

            if (markdown && !markdown.startsWith('Failed to fetch')) {
                return rewriteRelativeMarkdownUrls(markdown, githubUrl);
            }
        } catch {
            // Try the next source. Network failures must not break SSG.
        }
    }

    return null;
};

export const loadProjectReadme = async (projectId, githubUrl) => {
    const local = getLocalReadme(projectId);
    if (local) {
        return rewriteRelativeMarkdownUrls(local, githubUrl);
    }

    return fetchGithubReadme(githubUrl);
};
