export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-docker',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/dotenv'
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module'
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: process.env.FIREBASE_API_KEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    databaseURL: process.env.FIREBASE_DB_URL,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: process.env.FIREBASE_MS_SENDER_ID,
                    appId: process.env.FIREBASE_APP_ID,
                    measurementId: process.env.FIREBASE_MEASURMENT_ID
                },
                services: {
                    auth: true // Just as example. Can be any other service.
                }
            }
        ],
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    server: {
        port: 8082 // default: 3000
    }
}