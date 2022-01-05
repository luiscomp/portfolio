import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Portfólio de Luis Eduardo M. Ferreira.' },
        ]
    },
    dev: true,
    css: [
        '@/assets/styles/main.scss'
    ],
    components: true
})
