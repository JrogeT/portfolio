import { defineStore } from "pinia";

const createProduct = (name, usageTime, price, links, image) => {
    return {
        name,
        usageTime,
        price,
        links,
        image,
    }
}

const createDismacLink = (url) => {
    return {
        name: 'Dismac',
        class: 'bg-warning text-dark',
        url,
    }
}

const createGenioLink = (url) => {
    return {
        name: 'El Genio X',
        class: 'bg-primary text-dark',
        url,
    }
}

const createFulltecLink = (url) => {
    return {
        name: 'Fulltec',
        class: 'bg-success text-white',
        url,
    }
}

export const useGarageSaleStore = defineStore("products",{
    state: () => ({
        products: [
            createProduct(
                'Hisense TV 55\'\'',
                '10 Meses',
                6000,
                [
                    createDismacLink(
                        'https://www.dismac.com.bo/televisor-hisense-55-4k-qled-smart-tv-google55a7k.html?srsltid=AfmBOopHoGGtbISd9dLrea-mHaXYxE8DKETUTI9fqM0v0rB-cdADCAjP'
                    ),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'JBL Flip 6',
                '8 Meses',
                1500,
                [
                    createDismacLink(
                        'https://www.dismac.com.bo/altavoz-portatil-jbl-flip-6-verdejbl-flip6-teal.html'
                    ),
                    createGenioLink(
                        'https://elgeniox.com/products/parlante-jbl-flip-6-en-negro-510721-26'
                    ),
                    createFulltecLink(
                        'https://fulltec.com.bo/producto/parlante-jbl-modelo-flip-6/'
                    )
                ],
                require('@/assets/images/products/jbl-flip-6.jpeg')
            ),
        ]
    }),
});
