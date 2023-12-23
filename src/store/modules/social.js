import { defineStore } from "pinia";

export const useSocialStore = defineStore("social",{
    state: () => ({
        social: [
            {
                name: 'LinkedIn',
                image: require('@/assets/images/social/linkedin.png'),
                title: 'Professional life',
                description: 'Posts about web development, life styles and some self thoughts.',
                link: 'https://www.linkedin.com/in/jorge-rodrigo-torrez-aramayo-200867177/'
            },
            {
                name: 'Github',
                image: require('@/assets/images/social/github.png'),
                title: 'Coding life',
                description: 'Repositories, Organizations and Coding time.',
                link: 'https://www.github.com/JrogeT'
            },
            {
                name: 'Gmail',
                image: require('@/assets/images/social/gmail.png'),
                title: 'Global inbox',
                description: 'Mails for any topics or events (Google Calendar).',
                link: 'mailto:jorgerodrigotorrez@gmail.com'
            },
            {
                name: 'Whatsapp',
                image: require('@/assets/images/social/whatsapp.png'),
                title: 'Personal inbox',
                description: 'Messages to get specific information about me and also receiving important calls.',
                link: 'https://wa.me/59175364642'
            },
            {
                name: 'Facebook',
                image: require('@/assets/images/social/facebook.png'),
                title: 'Virtual life',
                description: 'Here you can find some interesting phrases I find in my everyday and my general information.',
                link: 'https://www.facebook.com/JorgeRodrigoTorrezAramayo'
            },
            {
                name: 'Instagram',
                image: require('@/assets/images/social/instagram.png'),
                title: 'Hobby life',
                description: 'Main hobbies, Cats and off-topic pictures, here I share my on-live activity.',
                link: 'https://www.instagram.com/jroge_t'
            },
            {
                name: 'YouTube',
                image: require('@/assets/images/social/youtube.png'),
                title: 'Teacher life',
                description: 'Videos from old classes at university with me as teacher.',
                link: 'https://www.youtube.com/channel/UCSLi91PW9oH9LETcTsDs-5Q'
            },
        ],
    }),
});
