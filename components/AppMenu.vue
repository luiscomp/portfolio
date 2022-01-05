<template>
    <ul>
        <slot/>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    font-weight: bold;
    flex-wrap: wrap;
}
</style>