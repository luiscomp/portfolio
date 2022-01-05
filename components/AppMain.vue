<template>
    <section>
        <Presentation id="presentation" ref=""/>
        <WhatIDo id="whatido" ref="whatido"/>
        <Skills id="skills" ref="skills"/>
        <Experiences id="experience" ref="experience"/>
        <Projects id="projects" ref="projects"/>
    </section>
</template>



<script>
// function isScrolledIntoView(elem) {
//     const docViewTop = window.top.scrollY
//     const docViewBottom = docViewTop + window.innerHeight

//     const elemTop = elem.offsetTop
//     const elemBottom = elemTop + elem.clientHeight

//     return (elemTop - docViewTop) < 300
// }

export default {
    // mounted() {
    //     window.addEventListener("scroll", this.onScroll)
    // },
    // beforeDestroy() {
    //     window.removeEventListener("scroll", this.onScroll)
    // },
    methods: {
        // onScroll(e) {
        //     Object.getOwnPropertyNames(this.$refs).forEach(reference => {
        //         if(isScrolledIntoView(this.$refs[reference].$el)) {
        //             if(window.location.hash !== `#${reference}`) {
        //                 window.history.pushState(null, 'hash', `#${reference}`);
        //             }
        //         }
        //     })
        // },
        scrollTo(reference) {
            window.history.pushState('state', 'title', `#${reference}`);
            this.$refs[reference].$el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
}
</style>