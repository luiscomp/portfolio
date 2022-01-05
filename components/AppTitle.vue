<template>
    <h1 @click="$emit('click')">
        # <slot/>
    </h1>
</template>

<style lang="scss" scoped>
h1 {
    flex: 1;
    font-size: var(--title-size);
    font-weight: bold;
    color: var(--color-p);
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        color: var(--color-p2);
    }
}
</style>