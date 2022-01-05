<template>
    <div class="skill">
        <img :src="skill.icon" :alt="skill.name"/>
        <span>{{ skill.name }}</span>
    </div>
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            default: () => {}
        },
    }
}
</script>

<style lang="scss" scoped>
.skill {
    width: var(--skill-size);
    height: var(--skill-size);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
    }
}
</style>