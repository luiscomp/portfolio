<template>
    <main>
        <AppHeader @scrollTo="scrollTo" :set-shadow="!scrollOnTop"/>
        <AppMain ref="main"/>
        <AppFooter/>
    </main>
</template>
<script>
export default {
    data() {
        return {
            scrollPosition: "presentation",
            windowTop: 0
        };
    },
    computed: {
        scrollOnTop() {
            return this.windowTop === 0
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    methods: {
        onScroll(e) {
            this.windowTop = window.top.scrollY
        },
        scrollTo(reference) {
            this.$refs.main.scrollTo(reference)
        }
    },
}
</script>
<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
}
</style>