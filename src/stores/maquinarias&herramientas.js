import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useMaquinariasHerramientasStore = defineStore("maquinariasHerramientas", () => {
    let token = ref(useLoginStore().token);
    let maquinariasHerramientas = ref(null)

    let getMaquinariasHerramientas = async () => {
        try {
            let res = await axios.get("/api/maquinaria_herramientas", {
                headers: {
                    "x-token": token.value
                }
            })
            maquinariasHerramientas.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getMaquinariasHerramientasId = async (id) => {
        try {
            let res = await axios.get(`/api/maquinaria_herramientas/${id}`, {
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getActivos = async () => {
        try {
            let res = await axios.get('/api/maquinaria_herramientas/listar/activos',
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getInactivos = async () => {
        try {
            let res = await axios.get('/api/maquinaria_herramientas/listar/inactivos',
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let postMaquinariasHerramientas = async (maquinariaHerramienta) => {
        try {
            let res = await axios.post('/api/maquinaria_herramientas', maquinariaHerramienta, {
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let putMaquinariasHerramientas = async (id, maquinariaHerramienta) => {
        try {
            let res = await axios.put(`/api/maquinaria_herramientas/${id}`, maquinariaHerramienta, {
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/maquinaria_herramientas/activar/${id}`, null, {
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let putDesactivar = async (id) => {
        try {
            let res = await axios.put(`/api/maquinaria_herramientas/desactivar/${id}`, null, {
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    return {
        getMaquinariasHerramientas,
        getMaquinariasHerramientasId,
        getActivos,
        getInactivos,
        postMaquinariasHerramientas,
        putMaquinariasHerramientas,
        putActivar,
        putDesactivar,
        maquinariasHerramientas
    }
})