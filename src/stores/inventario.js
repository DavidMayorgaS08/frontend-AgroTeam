import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useInventarioStore = defineStore("inventarios", () => {
    let token = ref(useLoginStore().token);
    let inventario = ref(null)

    let getInventarios = async () => {
        try {
            let res = await axios.get("/api/inventarios", {
                headers: {
                    "x-token": token.value
                }
            })
            inventario.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getInventariosId = async (id) => {
        try {
            let res = await axios.get(`/api/inventarios/${id}`, {
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
            let res = await axios.get('/api/inventarios/listar/activos',
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
            let res = await axios.get('/api/inventarios/listar/inactivos',
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

    let postInventarios = async (inventario) => {
        try {
            let res = await axios.post('/api/inventarios', inventario, {
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

    let putInventarios = async (id, inventario) => {
        try {
            let res = await axios.put(`/api/inventarios/${id}`, inventario, {
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
            let res = await axios.put(`/api/inventarios/activar/${id}`, null, {
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
            let res = await axios.put(`/api/inventarios/desactivar/${id}`, null, {
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
        getInventarios,
        getInventariosId,
        getActivos,
        getInactivos,
        postInventarios,
        putInventarios,
        putActivar,
        putDesactivar,
        inventario
    }
})