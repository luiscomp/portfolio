<template>
    <div class="content">
        <div class="presentation">
            <div class="text">
                <span>Olá, meu nome é</span>
                <span>Luis Eduardo</span>
                <span>Empreendedor, desenvolvedor fullstack, amante de tecnologia.</span>
            </div>

            <div class="avatar-wrapper">
                <img src="@/assets/images/avatar.jpeg" alt="Luis Eduardo">
                <!-- <img src="https://avatars.dicebear.com/api/initials/:luis.svg?chars=2&backgroundColors=grey" alt="Luis Eduardo"> -->
            </div>
        </div>
        <div class="social">
            <div class="sites">
                <Icon icon="github" :size="iconsSize" :url="githubUrl"/>
                <Icon icon="linkedin" :size="iconsSize" :url="linkedinUrl"/>
                <Icon icon="instagram" :size="iconsSize" :url="instagramUrl"/>
            </div>
            <div class="email">
                <span>luizeduardo354@gmail.com</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconsSize: '38px',
            githubUrl: 'https://github.com/luiscomp',
            linkedinUrl: 'https://www.linkedin.com/in/luis-eduardo-17640865/',
            instagramUrl: 'https://www.instagram.com/ze_lemf/'
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    --size-font-fator: 1.3;
    --presentation-avatar-size: 340px;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    height: 100vh;
    margin-bottom: 60px;

    @media only screen and (max-width: 1024px) {
        .presentation {
            margin-top: var(--header-h);
        }
    }

    .presentation {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;
        max-width: var(--max-content-width);
        padding: var(--padding-default) 0;

        .text {
            padding: var(--padding-default);
            display: flex;
            flex-direction: column;

            span:first-of-type, span:last-of-type {
                font-size: calc(20px * var(--size-font-fator));
            }

            span:last-of-type {
                font-family: 'Rubik-Light';
            }

            span:nth-of-type(2) {
                font-size: calc(50px * var(--size-font-fator));
                font-weight: bold;
            }
        }
        .avatar-wrapper {
            position: relative;
            max-width: var(--presentation-avatar-size);
            max-height: var(--presentation-avatar-size);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 8px;
                box-shadow: 2px 2px 4px 2px var(--color-shadow-black);
            }
        }
    }
    .social {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        max-width: var(--max-content-width);
        padding: var(--padding-default) 0;

        .sites, .email {
            flex: 1;
            display: flex;
        }
    }
}
</style>