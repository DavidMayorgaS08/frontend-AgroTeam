import { createRouter, createWebHashHistory } from "vue-router";
import login from "../components/formularios/login.vue";
import registro from "../components/formularios/registro.vue";
import RecuperarContrasena from "../components/formularios/RecuperarContrasena.vue";
import NuevaContrasena from "../components/formularios/NuevaContrasena.vue";
import menu from "../components/views/menu.vue";


const routes = [
    { path: "/",
        name: "login",
        component: login
    },

    {
        path: "/registro",
        name: "registro",
        component: registro
        
    },

    {
        path: "/RecuperarContrasena",
        name: "RecuperarContrasena",
        component: RecuperarContrasena
    },

    {
        path: "/NuevaContrasena",
        name: "NuevaContrasena",
        component: NuevaContrasena
    },

    {
        path: "/menu",
        name: "menu",
        component: menu
    }
];

export const router = createRouter({
    history:createWebHashHistory(),
    routes
})
