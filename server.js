import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT || 3000)

const start = async () => {
    const vite = await createViteServer({
        root: __dirname,
        appType: 'custom',
        server: {
            middlewareMode: true,
        },
    })

    const server = http.createServer((req, res) => {
        vite.middlewares(req, res, () => {
            handleSsr(req, res, vite).catch((error) => {
                vite.ssrFixStacktrace(error)
                console.error(error)

                if (!res.headersSent) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    res.end(error.stack || String(error))
                }
            })
        })
    })

    server.listen(PORT, () => {
        console.log('')
        console.log('  Live SSR')
        console.log(`  ➜  Local:   http://localhost:${PORT}/`)
        console.log(`  ➜  Project: http://localhost:${PORT}/projects/limon`)
        console.log('')
        console.log('  Press Ctrl+C to stop')
        console.log('')
    })
}

const handleSsr = async (req, res, vite) => {
    const url = req.url || '/'
    const templatePath = path.resolve(__dirname, 'index.html')
    let template = fs.readFileSync(templatePath, 'utf-8')
    template = await vite.transformIndexHtml(url, template)

    const { render } = await vite.ssrLoadModule('/src/entry-server.js')
    const rendered = await render(url)

    if (rendered.redirect) {
        res.statusCode = rendered.status || 302
        res.setHeader('Location', rendered.redirect)
        res.end()
        return
    }

    const renderedTitle = rendered.headTags?.match(/<title>[\s\S]*?<\/title>/)?.[0]
    const headTags = (rendered.headTags || '').replace(/<title>[\s\S]*?<\/title>/g, '')
    let html = template
        .replace('<html lang="en">', `<html lang="en"${rendered.htmlAttrs ? ` ${rendered.htmlAttrs}` : ''}>`)
        .replace('</head>', `${headTags}</head>`)
        .replace('<div id="app"></div>', `<div id="app">${rendered.html}</div>`)

    if (renderedTitle) {
        html = html.replace(/<title>[\s\S]*?<\/title>/, renderedTitle)
    }

    res.statusCode = rendered.status || 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(html)
}

start()
