import { defineStore } from "pinia";

export const useGarageSaleStore = defineStore("products",{
    state: () => ({
        products: [
            {
                name: 'TV',
                description: 'Hisense TV 55 less than a year of usage.',
                price: 5000,
                link: 'https://google.com',
                image: require('@/assets/images/projects/cacheando/main.png'),
            },
        ],
    }),
});
