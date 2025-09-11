import { defineStore } from "pinia";

export const useGarageSaleStore = defineStore("products",{
    state: () => ({
        products: [
            {
                name: 'TV',
                description: 'Hisense TV 55 less than a year of usage.',
                price: 5000,
                links: [
                    {
                        name: 'Amazon',
                        url: 'https://www.amazon.com.ar/Hisense-55-A-2020-Cinema-Smart/dp/B081111111',
                    },
                    {
                        name: 'Dismac',
                        url: 'https://www.dismac.com.bo/televisor-hisense-55-4k-qled-smart-tv-google55a7k.html?srsltid=AfmBOopHoGGtbISd9dLrea-mHaXYxE8DKETUTI9fqM0v0rB-cdADCAjP',
                    }
                ],
                image: require('@/assets/images/projects/cacheando/main.png'),
            },
        ],
    }),
});
