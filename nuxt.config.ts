// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
    runtimeConfig: {
        public: {
            testLength: 5
        }
    }
})
