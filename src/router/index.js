import { createWebHistory, createRouter } from "vue-router";
import AboutMe from "@/views/AboutMe";
import WhatIDo from "@/views/WhatIDo";
import Experience from "@/views/Experience";
import ContactMe from "@/views/ContactMe";
import Cv from "@/views/Cv";
import SocialNetworks from "@/views/SocialNetworks";

const routes = [
    {
        path: "/",
        name: "Home",
        component: AboutMe,
    },
    {
        path: "/about-me",
        name: "AboutMe",
        component: AboutMe,
    },
    {
        path: "/what-i-do",
        name: "WhatIDo",
        component: WhatIDo,
    },
    {
        path: "/experience",
        name: "Experience",
        component: Experience,
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;