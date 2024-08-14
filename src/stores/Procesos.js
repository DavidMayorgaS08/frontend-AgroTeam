import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useProcesosStore = defineStore("procesos", () => {
    let token = ref(useLoginStore().token);
    let procesos = ref(null)
    // #1
    let getProcesos = async () => {
        try {
            let res = await axios.get("/api/procesos", {
                headers: {
                    "x-toquen": token.value
                }
            })
            procesos.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }
    // #2
    let getProcesosId = async () => {
        try {
            let res = await axios.get(`/api/procesos/${id}`, {
                headers: {
                    "x-toquen": token.value
                }
            })
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    // #3
    let getActivos = async () => {
        try {
            let res = await axios.get('/api/procesos/listar/activos',
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
    // #4
    let getInactivos = async () => {
        try {
            let res = await axios.get('/api/administradores/listar/inactivos',
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
    // #5
    let postProcesos = async (procesos) => {
        try {
            let res = await axios.post("/api/procesos", procesos,
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } catch (error) {

        }
    }
    // #6
    let putProcesos = async (id, procesos) => {
        try {
            let res = await axios.put(`/api/procesos/${id}`, procesos,
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
    // #7
    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/procesos/activar/${id}`, null,
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
    // #8
    let putDesactivar = async (id) => {
        try {
            let res = await axios.put(`/api/procesos/desactivar/${id}`, null,
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            cosole.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    return {
        getProcesos,
        getProcesosId,
        getActivos,
        getInactivos,
        postProcesos,
        putProcesos,
        putActivar,
        putDesactivar,
        procesos
    }
})