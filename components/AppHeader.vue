<template>
    <header :style="style">
        <Content>
            <img src="@/assets/icons/simbol.svg" alt="logic" width="50">
            <AppMenu>
                <ItemMenu v-for="(menu, index) in menus" :key="index" @click="scrollTo(menu.reference)" :selected="menuSelected(menu.reference)">
                    {{ menu.name }}
                </ItemMenu>
            </AppMenu>
        </Content>
    </header>
</template>

<script>
export default {
    props: {
        setShadow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            menus: [
                {
                    name: 'Olá',
                    reference: ''
                },
                {
                    name: 'O que eu faço?',
                    reference: 'whatido'
                },
                {
                    name: 'Skills',
                    reference: 'skills'
                },
                {
                    name: 'Experiência',
                    reference: 'experience'
                },
                {
                    name: 'Projetos',
                    reference: 'projects'
                },
                {
                    name: 'Contato',
                    reference: 'contact'
                }
            ]
        };
    },
    computed: {
        style() {
            return {
                'box-shadow': this.setShadow ? '2px 2px 99px 3px var(--color-shadow-black)' : 'none'
            };
        }
    },
    methods: {
        scrollTo(reference) {
            this.$emit('scrollTo', reference);
        },
        menuSelected(reference) {
            return this.$route.hash === `#${reference}`
        }
    },
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: center;
    height: var(--header-h);
    padding: 10px 16px;
    z-index: 999;
    transition: all 200ms ease-out;

    img {
        height: 100%;
    }
}
</style>