<template>
    <SectionContent title="Skills">
        <div class="skills">
            <Skill v-for="(skill, index) in devSkills" :key="index" :skill="skill"/>
        </div>
        <Divider/>
        <div class="skills">
            <Skill v-for="(skill, index) in frontSkills" :key="index" :skill="skill"/>
        </div>
    </SectionContent>
</template>

<script>
export default {
    data() {
        return {
            devSkills: [{
                icon: '../assets/icons/java.svg',
                name: 'Java'
            }, {
                icon: '../assets/icons/spring.svg',
                name: 'Spring'
            }, {
                icon: '../assets/icons/vue.svg',
                name: 'Vue.js'
            }, {
                icon: '../assets/icons/nuxt.svg',
                name: 'Nuxt.js'
            }, {
                icon: '../assets/icons/javascript.svg',
                name: 'Javascript'
            }, {
                icon: '../assets/icons/html5.svg',
                name: 'Html 5'
            }, {
                icon: '../assets/icons/css3.svg',
                name: 'CSS 3'
            }, {
                icon: '../assets/icons/sass.svg',
                name: 'Sass'
            }, {
                icon: '../assets/icons/docker.svg',
                name: 'Docker'
            }, {
                icon: '../assets/icons/portainer.svg',
                name: 'Portainer'
            }, {
                icon: '../assets/icons/flutter.svg',
                name: 'Flutter'
            }, {
                icon: '../assets/icons/git.svg',
                name: 'Git'
            }],
            frontSkills: [{
                icon: '../assets/icons/figma.svg',
                name: 'Figma'
            }, {
                icon: '../assets/icons/adobexd.svg',
                name: 'AdobeXD'
            }, {
                icon: '../assets/icons/photoshop.svg',
                name: 'Photoshop'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.skills {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>