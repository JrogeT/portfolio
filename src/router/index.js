import { createWebHistory, createRouter } from "vue-router";
import AboutMe from "@/views/AboutMe";
import WhatIDo from "@/views/Knowledge";
import ContactMe from "@/views/ContactMe";
import Cv from "@/views/Cv";
import SocialNetworks from "@/views/SocialNetworks";
import Projects from "@/views/Projects.vue";
import GarageSale from "@/views/GarageSale.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: GarageSale,
    },
    {
        path: "/about-me",
        name: "AboutMe",
        component: AboutMe,
    },
    {
        path: "/knowledge",
        name: "Knowledge",
        component: WhatIDo,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/contact-me",
        name: "ContactMe",
        component: ContactMe,
    },
    {
        path: "/cv",
        name: "CV",
        component: Cv,
    },
    {
        path: "/social-networks",
        name: "SocialNetworks",
        component: SocialNetworks,
    },
    {
        path: "/garage-sale",
        name: "GarageSale",
        component: GarageSale,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
