import { defineStore } from "pinia";

export const useTechnologyStore = defineStore("technology",{
    state: () => ({
        technologies: [
            {
                name: 'Bootstrap',
                image: require('@/assets/images/technologies/bootstrap.png'),
                knowledgeLevel: 4,
                type: 'front-end',
            },
            {
                name: 'Angular',
                image: require('@/assets/images/technologies/angular.png'),
                knowledgeLevel: 4,
                type: 'front-end',
            },
            {
                name: 'Vue.js',
                image: require('@/assets/images/technologies/vue-js.png'),
                knowledgeLevel: 3.5,
                type: 'front-end',
            },
            {
                name: 'Html',
                image: require('@/assets/images/technologies/html.png'),
                knowledgeLevel: 4,
                type: 'front-end',
            },
            {
                name: '.Net',
                image: require('@/assets/images/technologies/dotnet-core.png'),
                knowledgeLevel: 4,
                type: 'back-end',
            },
            {
                name: 'Node.js',
                image: require('@/assets/images/technologies/node-js.png'),
                knowledgeLevel: 3.5,
                type: 'back-end',
            },
            {
                name: 'Laravel',
                image: require('@/assets/images/technologies/laravel.png'),
                knowledgeLevel: 4,
                type: 'back-end',
            },
            {
                name: 'Spring',
                image: require('@/assets/images/technologies/spring.png'),
                knowledgeLevel: 3,
                type: 'back-end',
            },
            {
                name: 'REST',
                image: require('@/assets/images/technologies/rest.png'),
                knowledgeLevel: 4,
                type: 'web-api',
            },
            {
                name: 'Postman',
                image: require('@/assets/images/technologies/postman.png'),
                knowledgeLevel: 4,
                type: 'web-api',
            },
            {
                name: 'Swagger',
                image: require('@/assets/images/technologies/swagger.png'),
                knowledgeLevel: 3,
                type: 'web-api',
            },
        ],
    }),
    getters: {
        frontendTechnologies(){
            return this.getTechnologiesByType('front-end');
        },
        backendTechnologies(){
            return this.getTechnologiesByType('back-end');
        },
        webApiTechnologies(){
            return this.getTechnologiesByType('web-api');
        },
    },
    actions: {
        getTechnologiesByType(type){
            return this.technologies.filter(technology => technology.type === type);
        },
    },
});
