module.exports = {
    plugins: [
        { src: '~plugins/mobile-detect', ssr:false }
    ],
    router: {
        middleware: ['mobile-detect']
    },
    head: {
        title: 'title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'description' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    build: {
        extend(config, {isDev}) {
            if (isDev && process.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}