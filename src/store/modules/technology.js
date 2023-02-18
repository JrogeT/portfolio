import { defineStore } from "pinia";

export const useTechnologyStore = defineStore("technology",{
    state: () => ({
        technologies: [
            {
                name: 'Bootstrap',
                image: require('@/assets/icons/bootstrap.png'),
                knowledgeLevel: 4,
                type: 'front-end',
            },
            {
                name: 'Angular',
                image: require('@/assets/icons/angular.png'),
                knowledgeLevel: 4,
                type: 'front-end',
            },
            {
                name: 'Vue.js',
                image: require('@/assets/icons/vue-js.png'),
                knowledgeLevel: 3.5,
                type: 'front-end',
            },
            {
                name: 'Html',
                image: require('@/assets/icons/html.png'),
                knowledgeLevel: 4,
                type: 'front-end',
            },
            {
                name: '.Net',
                image: require('@/assets/icons/dotnet-core.png'),
                knowledgeLevel: 4,
                type: 'back-end',
            },
            {
                name: 'Node.js',
                image: require('@/assets/icons/node-js.png'),
                knowledgeLevel: 3,
                type: 'back-end',
            },
            {
                name: 'Laravel',
                image: require('@/assets/icons/laravel.png'),
                knowledgeLevel: 4,
                type: 'back-end',
            },
            {
                name: 'Spring',
                image: require('@/assets/icons/spring.png'),
                knowledgeLevel: 2,
                type: 'back-end',
            },
            {
                name: 'REST',
                image: require('@/assets/icons/rest.png'),
                knowledgeLevel: 3.5,
                type: 'web-api',
            },
            {
                name: 'Postman',
                image: require('@/assets/icons/postman.png'),
                knowledgeLevel: 4,
                type: 'web-api',
            },
            {
                name: 'Swagger',
                image: require('@/assets/icons/swagger.png'),
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
