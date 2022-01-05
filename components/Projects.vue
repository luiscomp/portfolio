<template>
    <SectionContent title="Projetos">
        <div class="projects">
            <Project v-for="(project, index) in projects" :key="index" :project="project"/>
        </div>
    </SectionContent>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                name: 'uDelivery',
                description: 'Gestor de delivery completo',
                icon: '../assets/icons/udelivery.png'
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}
</style>