<template>
    <div class="content">
        <div class="wrapper">
            <AppTitle @click="setUrlState()">
                {{ title }}
            </AppTitle>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        setUrlState() {
            window.history.pushState('state', 'hash', `#${this.$parent.$el.id}`);
            this.$parent.$el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    },
}
</script>

<style lang="scss" scoped>   
.content {
    display: flex;
    justify-content: center;
    padding: 32px;
    .wrapper {
        flex: 1;
        max-width: var(--max-content-width);
    }
}
</style>