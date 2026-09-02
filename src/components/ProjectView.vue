<template>
  <NotFound v-if="notFound" />
  <main v-else class="cyber-page">
    <section class="cyber-section cyber-project-page">
      <div class="cyber-container">
        <router-link class="cyber-back-link" :to="{ path: '/', hash: '#projects' }">
          &lt;- BACK TO PROJECTS
        </router-link>

        <template v-if="project">
          <div class="cyber-section-heading">
            <p>PROJECT // {{ project.id }}</p>
            <h2>{{ project.name }}</h2>
          </div>

          <p class="cyber-project-lead">{{ project.description }}</p>

          <div v-if="project.tags?.length" class="cyber-project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>

          <div class="cyber-project-page-actions">
            <a
              class="cyber-btn cyber-btn-primary"
              :href="project.githubUrl"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ON GITHUB
            </a>
          </div>

          <article v-if="readmeHtml" class="cyber-readme" v-html="readmeHtml"></article>
          <p v-else-if="readmeError" class="cyber-readme-fallback">
            README could not be loaded right now. Open the repository on GitHub to read the full write-up.
          </p>
        </template>

        <p v-else class="cyber-readme-fallback">Loading project...</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { useHead } from "@unhead/vue";
import projects from "../projects.json";
import { loadProjectReadme } from "../lib/github-readme";
import { HOME_SEO, NOT_FOUND_SEO, SITE_URL } from "../router";
import NotFound from "./NotFound.vue";

const route = useRoute();
const project = ref(null);
const notFound = ref(false);
const readmeContent = ref("");
const readmeError = ref(false);
let requestId = 0;

const readmeHtml = computed(() => {
  if (!readmeContent.value) {
    return "";
  }

  return marked.parse(readmeContent.value);
});

const pageTitle = computed(() => {
  if (notFound.value) {
    return NOT_FOUND_SEO.title;
  }

  return project.value ? `${project.value.name} | Farid Rashidov` : "Loading Project...";
});

const pageDescription = computed(() => {
  if (notFound.value) {
    return NOT_FOUND_SEO.description;
  }

  return project.value?.description || HOME_SEO.description;
});

const pageCanonical = computed(() => {
  if (notFound.value || !project.value) {
    return null;
  }

  return `${SITE_URL}/projects/${project.value.id}`;
});

useHead({
  title: pageTitle,
  meta: [
    { name: "description", content: pageDescription },
    { name: "robots", content: computed(() => (notFound.value ? NOT_FOUND_SEO.robots : HOME_SEO.robots)) },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: computed(() => pageCanonical.value || HOME_SEO.canonical) },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
  ],
  link: computed(() => (
    pageCanonical.value ? [{ rel: "canonical", href: pageCanonical.value }] : []
  )),
});

const fetchProjectData = async (projectId) => {
  const currentRequest = ++requestId;
  const found = projects.find((item) => item.id === projectId);

  if (!found) {
    project.value = null;
    notFound.value = true;
    readmeContent.value = "";
    readmeError.value = false;
    return;
  }

  notFound.value = false;
  project.value = found;
  readmeContent.value = "";
  readmeError.value = false;

  try {
    const markdown = await loadProjectReadme(found.id, found.githubUrl);
    if (currentRequest !== requestId) {
      return;
    }

    if (!markdown) {
      readmeError.value = true;
      return;
    }

    readmeContent.value = markdown;
  } catch {
    if (currentRequest !== requestId) {
      return;
    }

    readmeError.value = true;
  }
};

await fetchProjectData(route.params.id);

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchProjectData(newId);
  }
});
</script>
