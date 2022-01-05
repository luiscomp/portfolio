<template>
    <div class="content">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>   
.content {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 1200px;
    justify-content: space-between;
}
</style>