<template>
    <div>
        <Mobile v-if="isMobile"/>
        <Desktop v-else />
    </div>
</template>

<script>
import Mobile from '~/components/mobile/index.vue'
import Desktop from '~/components/desktop/index.vue'

export default {
    components: {
        Desktop, Mobile
    },
    computed: {
        isMobile: function () {
            return (this.$store.state.isMobile == true) ? true : false
        }
    },
    layout: ({ isMobile }) => isMobile ? 'mobile' : 'desktop',
    data () {
        return {}
    }
}
</script>