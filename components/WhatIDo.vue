<template>
    <SectionContent title="O que eu Faço?">
        <div class="works">
            <WorkCard v-for="(work, index) in works" :key="index" :work="work" />
        </div>
    </SectionContent>
</template>

<script>
export default {
    data() {
        return {
            works: [{
                icon: 'server',
                name: 'Back-end',
                description: 'Se você precisa de uma aplicação completa, que seja capaz de conectar vários serviços de terceiros, este é o serviço ideal. Farei uma modelagem completa para sua aplicação capaz de ser escalável, rápida e segura.',
                category: 'Desenvolvimento'
            }, {
                icon: 'monitor-edit',
                name: 'Front-end',
                description: 'No mercado atual, você precisa se destacar. Para isso sua aplicação deve ser criativa e intuitiva. Aqui farei com que sua aplicação seja simples de usar, tornando-a única no mercado.',
                category: 'Desenvolvimento'
            }, {
                icon: 'api',
                name: 'API`s',
                description: 'Hoje a forma de comunicação entre os serviços modou radicalmente, abrindo modelo de negócios e oportunidades estratégicas totalmente novas. Aqui irei possibilitar a comunicação de sua aplicação com outros serviços, viabilizando novas oportunidades de mercado e integrações conforme a necessidade do seu negócio.',
                category: 'Desenvolvimento'
            }, {
                icon: 'tablet-cellphone',
                name: 'Aplicativos Móveis',
                description: 'É sem duvídas que podemos dizer que o mercado hoje domina o ambiente dos aparelhos móveis. Se seu negócio deseja alcançar o maior número de pessoas aqui é um dos principais meios, através de uma experiência de ponta, intuitiva e com recursos poderosos.',
                category: 'Desenvolvimento'
            }]
        }
    }, 
}
</script>

<style lang="scss" scoped>
.works {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>