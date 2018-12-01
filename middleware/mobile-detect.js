export default function (ctx) {
    if (process.browser) {
        let userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
        const mobileDetect = require('mobile-detect')
        const md = new mobileDetect(userAgent)
        const deviceType = (md.mobile() || md.phone()) ? (md.tablet() ? 'tablet' : 'phone') : 'computer'
        const isMobile = (deviceType === 'phone')
        ctx.isMobile = isMobile
        ctx.store.commit('setIsMobile', isMobile)
    }
}