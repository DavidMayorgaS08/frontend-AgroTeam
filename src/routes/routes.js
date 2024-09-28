import { createRouter, createWebHashHistory } from "vue-router";
import login from "../components/formularios/login.vue";
import RecuperarContrasena from "../components/formularios/RecuperarContrasena.vue";
import NuevaContrasena from "../components/formularios/NuevaContrasena.vue";
import menu from "../components/views/menu.vue";
import administradores from "../components/views/administradores.vue";
import analisisSuelos from "../components/views/analisis suelos.vue";
import climas from "../components/views/climas.vue";
import compradores from "../components/views/compradores.vue";
import controlPlagas from "../components/views/control plagas.vue";
import cultivos from "../components/views/cultivos.vue";
import elaboracionSustratos from "../components/views/elaboracion sustratos.vue";
import empleados from "../components/views/empleados.vue";
import facturas from "../components/views/facturas.vue";
import fertilizaciones from "../components/views/fertilizaciones.vue";
import fincas from "../components/views/fincas.vue";
import gastos from "../components/views/gastos.vue";
import insumos from "../components/views/insumos.vue";
import maquinariaHerramientas from "../components/views/maquinaria y herramientas.vue";
import nominas from "../components/views/nominas.vue";
import parcelas from "../components/views/parcelas.vue";
import preparcionSuelos from "../components/views/preparacion suelos.vue";
import procesos from "../components/views/procesos.vue";
import producciones from "../components/views/producciones.vue";
import proveedores from "../components/views/proveedores.vue";
import riegos from "../components/views/riegos.vue";
import semillas from "../components/views/semillas.vue";
import siembras from "../components/views/siembras.vue";
import { useLoginStore } from "../stores/login.js";

const checkAuth = () => {
    const loginStore = useLoginStore();
    let token = loginStore.token;
    console.log(loginStore.token);
    if(!token) {
        return "/";
    }
}

const routes = [
    { path: "/",
        name: "login",
        component: login
    },
    {
        path: "/RecuperarContrasena",
        name: "RecuperarContrasena",
        component: RecuperarContrasena
    },

    {
        path: "/NuevaContrasena/:token",
        name: "NuevaContrasena",
        component: NuevaContrasena,
        beforeEnter: (to, from, next) => {
            // Lógica para verificar el token o cualquier otra condición
            const token = to.params.token;
            if (token) {
                next();
            } else {
                next({ name: 'login' });
            }
        }
    },

    {
        path: "/menu",
        name: "menu",
        component: menu,
        beforeEnter: checkAuth,
        children: [
            {
                path: "/administradores",
                name: "administradores",
                component: administradores
            },
            {
                path: "/analisisSuelos",
                name: "analisisSuelos",
                component: analisisSuelos
            },
            {
                path: "/climas",
                name: "climas",
                component: climas
            },
            {
                path: "/compradores",
                name: "compradores",
                component: compradores
            },
            {
                path: "/controlPlagas",
                name: "controlPlagas",
                component: controlPlagas
            },
            {
                path: "/cultivos",
                name: "cultivos",
                component: cultivos
            },
            {
                path: "/elaboracionSustratos",
                name: "elaboracionSustratos",
                component: elaboracionSustratos
            },
            {
                path: "/empleados",
                name: "empleados",
                component: empleados
            },
            {
                path: "/facturas",
                name: "facturas",
                component: facturas
            },
            {
                path: "/fertilizaciones",
                name: "fertilizaciones",
                component: fertilizaciones
            },
            {
                path: "/fincas",
                name: "fincas",
                component: fincas
            },
            {
                path: "/gastos",
                name: "gastos",
                component: gastos
            },
            {
                path: "/insumos",
                name: "insumos",
                component: insumos
            },
            {
                path: "/maquinariaHerramientas",
                name: "maquinariaHerramientas",
                component: maquinariaHerramientas
            },
            {
                path: "/nominas",
                name: "nominas",
                component: nominas
            },
            {
                path: "/parcelas",
                name: "parcelas",
                component: parcelas
            },
            {
                path: "/preparcionSuelos",
                name: "preparcionSuelos",
                component: preparcionSuelos
            },
            {
                path: "/procesos",
                name: "procesos",
                component: procesos
            },
            {
                path: "/producciones",
                name: "producciones",
                component: producciones
            },
            {
                path: "/proveedores",
                name: "proveedores",
                component: proveedores
            },
            {
                path: "/riegos",
                name: "riegos",
                component: riegos
            },
            {
                path: "/semillas",
                name: "semillas",
                component: semillas
            },
            {
                path: "/siembras",
                name: "siembras",
                component: siembras
            }
        ]
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})