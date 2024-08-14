import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useMantenimientosStore = defineStore("mantenimientos", () => {
    let token = ref(useLoginStore().token);
    let mantenimientos = ref(null)

    let getMantenimientos = async () => {
        try {
            let res = await axios.get("/api/mantenimientos", {
                headers: {
                    "x-token": token.value
                }
            })
            mantenimientos.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getMantenimientosId = async (id) => {
        try {
            let res = await axios.get(`/api/mantenimientos/${id}`, {
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
            let res = await axios.get('/api/mantenimientos/listar/activas',
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
            let res = await axios.get('/api/mantenimientos/listar/inactivas',
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

    let postMantenimientos = async (mantenimiento) => {
        try {
            let res = await axios.post('/api/mantenimientos', mantenimiento,
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

    let putMantenimientos = async (id, mantenimiento) => {
        try {
            let res = await axios.put(`/api/mantenimientos/${id}`, mantenimiento,
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

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/mantenimientos/activar/${id}`, {},
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

    let putDesactivar = async (id) => {
        try {
            let res = await axios.put(`/api/mantenimientos/desactivar/${id}`, {},
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

    return {
        getMantenimientos,
        getMantenimientosId,
        getActivos,
        getInactivos,
        postMantenimientos,
        putMantenimientos,
        putActivar,
        putDesactivar,
        mantenimientos
    }
})