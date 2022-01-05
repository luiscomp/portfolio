<template>
    <div class="content">
        <h3>{{ experience.title }}</h3>
        <span class="company">{{ experience.company }}</span>
        <div class="time">
            <span>{{ experience.startDate }}</span>
            &nbsp;-&nbsp;
            <span v-if="!experience.current">{{ experience.endDate }}</span>
            <span v-else>o momento</span>
        </div>
        <span>{{ experience.location }}</span>
        <p>{{ experience.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        experience: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-card);
    gap: 5px;
    padding: var(--padding-default);
    border-radius: 0px 10px 10px 0px;
    box-shadow: inset 4px 0px 0px 0px var(--color-p);
    .company {
        color: var(--color-p2);
    }
    .time {
        display: flex;
        color: var(--color-black-87);
        font-size: 14px;
    }

    p {
        color: var(--color-black-87);
        font-size: 14px;
        text-align: start;
    }
}
</style>