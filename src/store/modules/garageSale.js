import { defineStore } from "pinia";

const living = 'living'
const limpieza = 'limpieza'
const entretenimiento = 'entretenimiento'
const tecnologia = 'tecnologia'
const mascotas = 'mascotas'
const deporte = 'deporte'
const educacion = 'educacion'
const cocina = 'cocina'
const otros = 'otros'
const herramientas = 'herramientas'

const createProduct = (name, category, price, links, image) => {
    return {
        name,
        category,
        price,
        links,
        image,
    }
}

const createDismacLink = (url, price) => {
    return {
        name: 'Dismac',
        class: 'bg-danger text-white',
        price,
        url,
    }
}

const createMulticenterLink = (url, price) => {
    return {
        name: 'Multicenter',
        class: 'bg-warning text-dark',
        price,
        url,
    }
}

const createUbuyLink = (url, price) => {
    return {
        name: 'Ubuy',
        class: 'bg-white text-dark border border-warning',
        price,
        url,
    }
}

const createGenericLink = (url, price) => {
    return {
        name: 'Other',
        class: 'bg-white text-dark border border-dark',
        price,
        url,
    }
}

export const useGarageSaleStore = defineStore("products",{
    state: () => ({
        products: [
            // ——— Living ———
            createProduct(
                'Hisense TV 55\'\'',
                living,
                6000,
                [
                    createDismacLink(
                        'https://www.dismac.com.bo/televisor-hisense-55-4k-qled-smart-tv-google55a7k.html?srsltid=AfmBOopHoGGtbISd9dLrea-mHaXYxE8DKETUTI9fqM0v0rB-cdADCAjP',
                        7299,
                    ),
                ],
                require('@/assets/images/products/living/TV.jpg')
            ),
            createProduct(
                'Estanteria',
                living,
                750,
                [],
                require('@/assets/images/products/living/estanteria.jpg')
            ),
            createProduct(
                'Mueble para TV',
                living,
                2000,
                [
                    createMulticenterLink(
                        ' https://www.multicenter.com/centro-de-entretenimiento-atlanta-color-nature-beige/p',
                        2999
                    )
                ],
                require('@/assets/images/products/living/mueble-para-TV.jpg')
            ),
            createProduct(
                'Escritorio',
                living,
                1200,
                [],
                require('@/assets/images/products/living/escritorio.jpg')
            ),
            // createProduct(
            //     'Silla Giratoria de oficina',
            //     living,
            //     800,
            //     [
            //         createDismacLink(
            //             'https://www.dismac.com.bo/silla-ejecutiva-kenzoaj-004.html',
            //             2099
            //         )
            //     ],
            //     require('@/assets/images/products/TV.jpeg')
            // ),
            createProduct(
                'Mesa comedor con 4 sillas',
                living,
                2500,
                [],
                require('@/assets/images/products/TV.jpeg')
            ),
            // createProduct(
            //     'Sofa Cama',
            //     living,
            //     2000,
            //     [],
            //     require('@/assets/images/products/TV.jpeg')
            // ),
            createProduct(
                'Radiador Magefesa 11 elementos',
                living,
                1000,
                [
                    createGenericLink(
                        'https://hauscenter.com.bo/producto/radiador-11-elementos-magefesa-lbramg000000007-lbramg000000007',
                        1129
                    )
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            // ——— Limpieza ———
            createProduct(
                'Xiaomi Aspiradora X20+',
                limpieza,
                8500,
                [
                    createUbuyLink(
                        'https://www.ubuy.com.bo/es/product/QJBWVVADK-6941812777206-xiaomi-robot-vacuum-x20-max-eu-xiaomi',
                        9754
                    ),
                    createGenericLink(
                        'https://www.instagram.com/p/DOntoprjZD2',
                        10500
                    ),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            // append these to your `products` array:
            createProduct(
                'Xiaomi Aspiradora E10C',
                limpieza,
                2500,
                [createGenericLink('https://www.instagram.com/p/DNHCvvxsoW2/', 2899)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Aspiradora Bosch Fexxo Serie 4 25.2V',
                limpieza,
                null,
                [
                    createGenericLink('https://www.bosch-home.es/es/product/aspiradoras/sin-cable/flexxo/BBH3ZOO25', null),
                    createGenericLink('https://degentek.com/producto/aspirador-escoba-sin-cable/', null),
                    createGenericLink('https://www.kyeroo.com/aspiradora-sin-cable-bosch-flexxo-serie-4-25-2v-proanimal-bbh3zoo25', null),
                    createGenericLink('https://tecnoduero.com/tienda/aspiracion/aspiradora-escoba/aspirador-vertical-flexooo-zoo-de-25-2v-55min-bbh3zoo25/', null),
                    createGenericLink('https://www.multicenter.com/aspirador-escoba-sin-cables-bbh3zoo28-bosch/p', null),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),

            // ——— Entretenimiento ———
            createProduct('Ajedrez con reloj', entretenimiento, 250, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Ajedrez para viajes', entretenimiento, 50, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Juegos de mesa', entretenimiento, null, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Cubo de Rubik GAN356 Maglev', entretenimiento, null, [], require('@/assets/images/products/TV.jpeg')),

            // ——— Tecnología ———
            createProduct(
                'JBL Flip 6',
                tecnologia,
                1500,
                [
                    createDismacLink('https://www.dismac.com.bo/altavoz-portatil-jbl-flip-6-verdejbl-flip6-teal.html', 1699),
                    createGenericLink('https://hauscenter.com.bo/producto/parlante-jbl-flip-6-color-negro', 1699),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Google Nest Mini 2da Gen',
                tecnologia,
                400,
                [
                    createGenericLink('https://www.novex.com.bo/product/google-nest-mini-2da-generacion/', 309),
                    createGenericLink('https://tecnocomprasbolivia.com/products/google-nest-mini', 339),
                    createGenericLink('https://www.boliviamart.com/google-home-mini-asistente-personal/', 613),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Nintendo Switch',
                tecnologia,
                5000,
                [createDismacLink('https://www.dismac.com.bo/consola-nintendo-switch-oled-white-juego-mario-kart-8hrg-s-kaa1b.html', 6999)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Nintendo Pro Controller',
                tecnologia,
                800,
                [
                    createDismacLink('https://www.dismac.com.bo/mando-nintendo-switch-pro-controller-de-32gbhacafsska.html', 999),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/G7XG1A0D8-nintendo-switch-pro-controller-elevate-your-gaming-experience-with-precision', 918),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Xiaomi Smart Plug 2',
                tecnologia,
                150,
                [createGenericLink('https://tecnocomprasbolivia.com/products/enchufe-inteligente-xiaomi?_pos=1&_sid=b307fdabf&_ss=r', 179)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Redragon Panda Crystal Switch (A113 HP2)',
                tecnologia,
                150,
                [createGenericLink('https://overcitybolivia.com/shop-single.php?dato1=352', 180)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Samsung Galaxy Watch 6 classic 43mm',
                tecnologia,
                4500,
                [
                    createGenericLink('https://shop.samsung.com.bo/watches/galaxy-watch/galaxy-watch6-classic-43mm-silver-bluetooth-sm-r950nzsalta/', 6063),
                    createGenericLink('https://shoptic.com.bo/product/samsung-galaxy-watch-6/', 5490),
                    createGenericLink('https://nextlevel.com.bo/collections/wearables/products/watch6-classic-43mm-sku-sm-r950nzkalta', 6714),
                    createGenericLink('https://onstorebo.com/product/samsung-watch6-classic-43mm-bt/', 5371),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Headset Klip KNH-050',
                tecnologia,
                null,
                [
                    createGenericLink('https://tiendas.camsa.com.bo/product/audifonos-inalambricos-anc-2', null),
                    createGenericLink('https://digitallifecr.com/products/auriculares-knh-050bk-marca-klipxtreme', null),
                    createGenericLink('https://www.tecnogamer.com.bo/producto/audifono-klipxtreme-oasis-knh-050wh/', null),
                    createGenericLink('https://comcellstore.com/?product=klip-xtreme-knh-050-oasis', null),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Chromecast 3ra Gen',
                tecnologia,
                300,
                [
                    createGenericLink('https://bitstorebolivia.com/producto/google-chromecast-3-gen/', 260),
                    createGenericLink('https://bestone.com.bo/google-chromecast-3ra-generacion/?v=ad7532d5b386', 494),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/QJ078LQYA-google-chromecast-3rd-gen', 385),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/860N5YF0W-google-chromecast-streaming-device-with-hdmi-cable-cast-shows-music-photos-netflix-youtube-prime-video-disney-and-more-model-ga00439-us', 909),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Chromecast 4ta Gen',
                tecnologia,
                550,
                [
                    createGenericLink('https://tecnocomprasbolivia.com/products/google-chromecast-4?_pos=3&_sid=3a271b481&_ss=r', 640),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/I821E2EPI-google-chromecast-hd-with-google-tv-hd-snow-new-sealed', 647),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),

            // ——— Mascotas ———
            createProduct('Dispensador de comida para mascotas', mascotas, 300, [], require('@/assets/images/products/TV.jpeg')),

            // ——— Deporte ———
            createProduct(
                'Pelota de volleyball V200W',
                deporte,
                400,
                [
                    createGenericLink('https://www.facebook.com/marketplace/item/838352767610636/', 560),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/JAUKEN6VY-mikasa-v200w-volleyball', 807),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Bicicleta Monarette 27.5\'\'',
                deporte,
                2100,
                [
                    createGenericLink('https://www.tiendaamiga.com.bo/bicicleta-monark-scorpion-aro-27-5-color-negro-cod-571191931', 2429),
                    createDismacLink('https://www.dismac.com.bo/bicicleta-monarette-scorpion-aro-27-5-rojo.html', 1739),
                    createGenericLink('https://www.camsa.com.bo/product/bicicleta-monarette-monark-scorpion-aro-275-gris', 1739),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct('Parches + Inflador para bicicleta', deporte, 150, [], require('@/assets/images/products/TV.jpeg')),
            createProduct(
                'Set de mancuernas metálicas',
                deporte,
                1500,
                [
                    createGenericLink('https://www.construex.com.bo/exhibidores/gym_en_casa/producto/mancuernas_ajustables', 1700),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/JF59W2V5C-adjustable-dumbbell-set-with-3-in-1-dumbbell-barbell-metal-connecting-rod-chromed-weights-hardcover-gift-box-adjustable-weight-sets-up-to', 2635),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Bolso Puma',
                deporte,
                500,
                [createGenericLink('https://www.fairplay.com.bo/puma-bolso-training-sportsbag-s-078852-01/p', 549)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct('Tienda de Acampar Lombardi', deporte, 300, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Sleeping bag Nautika Viper', deporte, null, [], require('@/assets/images/products/TV.jpeg')),
            createProduct(
                'Maleta de viaje Caterpillar',
                deporte,
                2000,
                [createGenericLink('https://www.impulse.bo/maleta-hombre-industrial-plate-28-black.html', 2299)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Mochila camping Summit 67 Totto',
                deporte,
                1300,
                [
                    createGenericLink('https://bo.totto.com/viaje/maletas/outdoor', 1439),
                    createDismacLink('https://www.dismac.com.bo/morral-summit-67-a03-t-l.html', 1439),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct('Pelotas de padel (3)', deporte, 50, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Red portátil de badminton', deporte, 100, [], require('@/assets/images/products/TV.jpeg')),
            createProduct(
                'Xiaomi body composition S400',
                deporte,
                400,
                [
                    createGenericLink('https://sofmat.com.bo/productos/mi-body-composition-scale-2/', 457),
                    createGenericLink('https://www.tecnoshoppingbolivia.com/producto/bascula-xiaomi-body-composition-scale-s400/', 415),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),

            // ——— Educación ———
            createProduct(
                'Marcadores de pizarra',
                educacion,
                150,
                [createGenericLink('https://materiales.com.bo/products/sabonis-repuesto-para-marcador-de-pizarra-sabonis-marcadores-para-pizarra', null)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct('Colección cubos de rubik', educacion, 200, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Libros Julio Verne', educacion, 200, [], require('@/assets/images/products/TV.jpeg')),
            createProduct(
                'Batería Acústica',
                educacion,
                null,
                [createDismacLink('https://www.dismac.com.bo/bateria-acustica-mapex-serie-prodigi-color-royal-blue-set-completopdg5294ftcyb.html', null)],
                require('@/assets/images/products/TV.jpeg')
            ),

            // ——— Cocina ———
            createProduct(
                'Heladera Consul 275 Litros',
                cocina,
                4500,
                [createDismacLink('https://www.dismac.com.bo/refrigerador-consul-single-door-275-litroscrc30gbdwx.html', 4799)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Black+Decker Licuadora BL1300DG-CL',
                cocina,
                600,
                [
                    createGenericLink('https://mixo.com.bo/default/black-and-decker-licuadora-silenciosa-powercrush-digital-bl1300dg-pla.html', 700),
                    createUbuyLink('https://www.ubuy.com.bo/es/product/BUZIIEW-power-crush-digital-blender', 729),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Black+Decker Arrocera 22Cup RC5225',
                cocina,
                400,
                [
                    createGenericLink('https://mixo.com.bo/lp/black-and-decker-olla-arrocera-rc5225.html', 444),
                    createDismacLink('https://www.dismac.com.bo/arrocera-electrica-black-amp-decker-5-3-lts-700wrc5225-cl.html', 569),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Black+Decker Sandwichera 3en1 WM2000S-CL',
                cocina,
                450,
                [
                    createUbuyLink('https://www.ubuy.com.bo/es/product/SN1HG4-black-decker-3-in-1-morning-meal-station-waffle-maker-grill-or-sandwich-maker-black-silver-wm2000sd', 473),
                    createDismacLink('https://www.dismac.com.bo/sandwichera-black-and-decker-sm24530-cl43239.html', 489),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct('Bosch ErgoMixx', cocina, null, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Beurer Báscula de cocina', cocina, 150, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Juego de tápers de plástico', cocina, 100, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Abrelatas', cocina, 100, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Set de utensilios de cocina', cocina, 50, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Tabla de madera pequeña', cocina, 100, [], require('@/assets/images/products/TV.jpeg')),
            createProduct(
                'Xiaomi Air Fryer 5.5L',
                cocina,
                1600,
                [createGenericLink('https://nextlevel.com.bo/products/mi-smart-air-fryer-6-5-l?_pos=1&_sid=56947cb64&_ss=r', 1780)],
                require('@/assets/images/products/TV.jpeg')
            ),

            // ——— Otros ———
            createProduct('Reloj de bolsillo Harry Potter', otros, 100, [], require('@/assets/images/products/TV.jpeg')),
            createProduct('Cojín de viaje para cuello', otros, null, [], require('@/assets/images/products/TV.jpeg')),
            createProduct(
                'Colchón 1 plaza y media',
                otros,
                2399,
                [createDismacLink('https://www.dismac.com.bo/colchon-toborochi-linea-suavex-105x190x26-cm-1-5-plazaspp5233.html', 2399)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Somier',
                otros,
                899,
                [createDismacLink('https://www.dismac.com.bo/somier-de-tela-gris-1-5-plazas-sonarepp8896.html', 899)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Velador',
                otros,
                400,
                [
                    createGenericLink('https://hauscenter.com.bo/producto/velador-isis-c-almendra-off-white', 419),
                    createDismacLink('https://www.dismac.com.bo/velador-izzi-muebles-ceres-m3-color-adobe-x-marfilpp8942.html', 459),
                    createMulticenterLink('https://www.multicenter.com/mesa-de-noche-2-cajones-amendoia-blanco-isis/p', 429),
                ],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct('Brújula Militar', otros, 100, [], require('@/assets/images/products/TV.jpeg')),

            // ——— Herramientas ———
            createProduct(
                'Atornillador Inalámbrico Tramontina 3.6V',
                herramientas,
                300,
                [createDismacLink('https://www.dismac.com.bo/atornillador-inalambrico-tramontina-3-6v-maletin42380-045.html', 319)],
                require('@/assets/images/products/TV.jpeg')
            ),
            createProduct(
                'Taladro Bosch GSB 550RE',
                herramientas,
                1000,
                [createGenericLink('https://www.hi.com.bo/taladro-con-percusion-gsb-550re-bosch.html', 1106)],
                require('@/assets/images/products/TV.jpeg')
            ),

        ]
    }),
    // create these two methods: resetFilter() and setFilter()
    actions: {
        resetFilter() {
            this.filter = null;
        },
        setFilter(category) {
            this.filter = category;
        },
        resetPriceOrder() {
            this.priceOrder = null;
        },
        setPriceOrder(order) {
            this.priceOrder = order;
        },
        getProducts() {
            console.log('Getting products...');
            let finalProducts = [...this.products];

            // Filter by category
            if (this.filter) {
                finalProducts = this.products.filter(product => product.category === this.filter);
            }

            // Sort by price
            if (this.priceOrder === 'asc') {
                finalProducts.sort((a, b) => a.price - b.price);
            } else if (this.priceOrder === 'desc') {
                finalProducts.sort((a, b) => b.price - a.price);
            }

            return finalProducts;
        }
    },
});
