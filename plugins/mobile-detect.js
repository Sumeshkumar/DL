/* eslint-disable */
export default ({ app, store }) => {
    if (process.browser) {
        let userAgent = navigator.userAgent
        const mobileDetect = require('mobile-detect')
        const md = new mobileDetect(userAgent)
        const deviceType = (md.mobile() || md.phone()) ? (md.tablet() ? 'tablet' : 'phone') : 'computer'
        const isMobile = (deviceType === 'phone')
        app.context.isMobile = isMobile
        store.commit('setIsMobile', isMobile)
    }
}