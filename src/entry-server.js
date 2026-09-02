import { renderToString } from 'vue/server-renderer'
import { renderSSRHead } from '@unhead/ssr'
import { createApp } from './main'
import projects from './projects.json'

export async function render(url) {
    const { app, router, head } = await createApp(false, url)
    const route = router.currentRoute.value

    if (route.redirectedFrom) {
        return {
            redirect: route.fullPath,
            status: 301,
        }
    }

    const html = await renderToString(app)
    const payload = await renderSSRHead(head)

    let status = 200
    if (route.name === 'NotFound') {
        status = 404
    }
    if (route.name === 'ProjectView' && !projects.some((project) => project.id === route.params.id)) {
        status = 404
    }

    return {
        html,
        status,
        ...payload,
    }
}
