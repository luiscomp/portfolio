<template>
    <div class="content">
        <Icon :icon="work.icon"/>
        <span class="name">{{ work.name }}</span>
        <p class="description">{{ work.description }}</p>
        <span class="category">{{ work.category }}</span>
    </div>
</template>

<script>
export default {
    props: {
        work: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    flex: 1;
    min-height: 300px;
    background-color: var(--color-card);
    border-radius: 8px;
    padding: var(--padding-default);
    min-width: 200px;
    display: flex;
    flex-direction: column;

    .name {
        font-size: 28px;
        font-weight: bold;
    }

    .description {
        font-weight: lighter;
        font-size: 14px;
        text-align: justify;
        padding: 10px 0;
    }
    .category {
        flex: 1;
        font-weight: lighter;
        display: flex;
        align-items: flex-end;
    }

}
</style>