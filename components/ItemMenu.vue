<template>
    <dl @click="$emit('click')" :style="style">
        <slot/>
    </dl>
</template>

<script>
export default {
    props: {
        selected: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        style() {
            return {
                'background-color': this.selected ? 'var(--color-card)' : 'none'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
dl {
    cursor: pointer;
    padding: var(--padding-default);
    &:hover {
        box-shadow: inset 0 -3px 0 black;
    }
}
</style>