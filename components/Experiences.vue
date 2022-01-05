<template>
    <SectionContent title="Experiência">
        <div class="experiences">
            <Experience v-for="(experience, index) in experiences" :key="index" :experience="experience"/>
        </div>
    </SectionContent>
</template>

<script>
export default {
    data() {
        return {
            experiences: [{
                title: 'Analista de Desenvolvimento de Sistemas',
                description: 'Responsável pela equipe de desenvolvimento. Trabalhando para criação e integração de aplicações e ferramentas que atendam a logística de negócio da empresa que hoje é a maior distribuidora de motopeças da america latina.',
                company: 'R. Damásio',
                location: 'Teresina, Piauí, Brasil',
                startDate: '05/2021',
                endDate: '',
                current: true
            },{
                title: 'Desenvolvedor Java/Vue.js Sênior',
                description: 'Contratado para planejar toda a arquitetura em microserviços da aplicação de tributos do estado para a SEFAZ-PI. Além de idealizar e implementar a arquitetura, treinar toda a equipe de desenvolvimento.',
                company: 'D2ti Solucoes Integradas LTDA',
                location: 'São Luís, Maranhão, Brasil',
                startDate: '05/2021',
                endDate: '11/2021',
                current: false
            },{
                title: 'Analista de Desenvolvimento de Sistemas',
                description: 'Atuando como analista, desenvolvedor e sustentador de aplicações da Secretaria da Fazenda do Piauí (SEFAZ-PI). Fui responsável pela implementação de integrações e melhorias, além de integrar o sistema de tributos a ser o primeiro do país a receber pagamento por PIX.',
                company: 'SEFAZ-PI (UNITEC)',
                location: 'Teresina, Piauí, Brasil',
                startDate: '07/2020',
                endDate: '05/2021',
                current: false
            },{
                title: 'Desenvolvedor Java',
                description: 'Trabalhando exclusivamente no desenvolvimento e sustentação de aplicações do TRE-PI. Em um dos meus trabalhos neste, tive a oportunidade de desenvolver a integração ao serviço de contagem de votos do TSE e exibir os dados em uma aplicação web para análise interna a matriz do estado.',
                company: 'TRE-PI',
                location: 'Teresina, Piauí, Brasil',
                startDate: '08/2019',
                endDate: '07/2020',
                current: false
            },{
                title: 'Desenvolvedor de Sistemas Web/Mobile',
                description: 'No regime de fábrica de software tive a oportunidade de desenvolver aplicações sob demanda, sendo estas muitas vezes completas, envolvendo todo o processso de desenvolvimento: levantamento de requisitos, modelagem de dados, implementação de backend, frontend web, aplicação mobile.',
                company: 'Concept Tecnologia e Engenharia de Software',
                location: 'Teresina, Piauí, Brasil',
                startDate: '08/2019',
                endDate: '07/2020',
                current: false
            },{
                title: 'Gerente de Projeto de Sistemas',
                description: 'Gerenciando uma equipe no desenvolvimento de sistemas para o ramo imobiliário na maior administradora de condomínio da região, tive a oportunidade de conhecer o ramo e inovar com ferramentas para gerenciamento financeiro da administradora e logísticas de condomínios.',
                company: 'Predial - Administradora de Condomínios',
                location: 'Teresina, Piauí, Brasil',
                startDate: '08/2018',
                endDate: '02/2019',
                current: false
            },{
                title: 'Desenvolvedor de Sistemas Web/Mobile',
                description: 'No regime de fábrica de software tive a oportunidade de desenvolver aplicações sob demanda, sendo estas muitas vezes completas, envolvendo todo o processso de desenvolvimento: levantamento de requisitos, modelagem de dados, implementação de backend, frontend web, aplicação mobile.',
                company: 'TRE-PI',
                location: 'Teresina, Piauí, Brasil',
                startDate: '03/2014',
                endDate: '07/2018',
                current: false
            }]
        }
    },
}
</script>
<style lang="scss" scoped>
.experiences {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>