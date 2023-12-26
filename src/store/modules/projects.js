import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects",{
    state: () => ({
        projects: [
            {
                name: 'Cacheando',
                description: '',
                link: 'https://github.com/jroget/cacheando',
                image: require('@/assets/images/projects/cacheando/main.png'),
                date: 'In progress',
            },
            {
                name: 'Enroll Manager',
                link: 'https://github.com/JrogeT-Ncoding/frontend',
                image: require('@/assets/images/projects/enroll-manager/repo.png'),
                date: '06-26-2022',
            },
            {
                name: 'Hospital Manager',
                link: 'https://github.com/JrogeT-DigitalHarbor/front',
                image: require('@/assets/images/projects/hospital-manager/doctors.png'),
                date: '04-05-2021',
            },
            {
                name: 'Consultation Forum',
                link: 'https://github.com/jroge-uagrm/consultation-forum-3layers',
                image: require('@/assets/images/projects/consultation-forum/login.png'),
                date: '01-23-2021',
            },
            {
                name: 'Salvador Bahia Landing Page',
                link: 'https://github.com/JrogeT-Essence/JrogeT-Essence.github.io',
                image: require('@/assets/images/projects/salvador-bahia/main.png'),
                date: '11-23-2020',
            },
            {
                name: 'MiniFacebook',
                link: 'https://github.com/jroge-uagrm/MiniFacebook-web',
                image: require('@/assets/images/projects/minifacebook/main.png'),
                date: '09-01-2020',
            },
            {
                name: 'Parser',
                link: 'https://github.com/jroge-uagrm/Parser',
                image: require('@/assets/images/projects/parser/main.png'),
                date: '12-18-2019',
            },
            {
                name: 'DrawIt',
                link: 'https://github.com/jroge-uagrm/DrawIt',
                image: require('@/assets/images/projects/draw-it/repo.png'),
                date: '11-12-2019'
            },
            {
                name: 'INEGAS Information System',
                link: 'https://github.com/jroge-uagrm/InformationSystems1',
                image: require('@/assets/images/projects/inegas/login.png'),
                date: '07-04-2019'
            },
            {
                name: 'MyTetris',
                link: 'https://github.com/jroge-uagrm/MyTetris',
                image: require('@/assets/images/projects/my-tetris/repo.png'),
                date: '07-03-2019',
            },
            {
                name: 'MyCacho',
                link: 'https://github.com/jroge-uagrm/MyCacho',
                image: require('@/assets/images/projects/my-cacho/main.jpeg'),
                date: '06-01-2019',
            },
            {
                name: 'PaintJ',
                link: 'https://github.com/jroge-uagrm/PaintJ',
                image: require('@/assets/images/projects/paint-j/repo.png'),
                date: '05-07-2019',
            },
            {
                name: 'Continuous Memory',
                link: 'https://github.com/jroge-uagrm/continuous-memory',
                image: require('@/assets/images/projects/contiguous-memory/main.png'),
                date: '02-01-2018',
            },
        ],
    }),
});
