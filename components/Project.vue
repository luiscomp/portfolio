<template>
    <div class="project">
        <img :src="project.icon" :alt="project.name"/>
        <span>{{ project.name }}</span>
        <p>{{ project.description }}</p>
    </div>
</template>


<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.project {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: 150px;
        height: 150px;
        border-radius: 8px;
    }

    span {
        font-weight: bold;
        font-size: 22px;
    }

    p {
        font-family: 'Rubik-Light'
    }
}
</style>