import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useNominasStore = defineStore("nominas", () => {
    let token = ref(useLoginStore().token);
    let nominas = ref(null)

    let getNominas = async () => {
        try {
            let res = await axios.get("/api/nominas", {
                headers: {
                    "x-token": token.value
                }
            })
            nominas.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getNominasId = async (id) => {
        try {
            let res = await axios.get(`/api/nominas/${id}`, {
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
            let res = await axios.get('/api/nominas/listar/activas',
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
            let res = await axios.get('/api/nominas/listar/inactivas',
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

    let postNominas = async (nomina) => {
        try {
            let res = await axios.post('/api/nominas', nomina, {
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

    let putNominas = async (id, nomina) => {
        try {
            let res = await axios.put(`/api/nominas/${id}`, nomina, {
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
            let res = await axios.put(`/api/nominas/activar/${id}`, null, {
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
            let res = await axios.put(`/api/nominas/desactivar/${id}`, null, {
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
        getNominas,
        getNominasId,
        getActivos,
        getInactivos,
        postNominas,
        putNominas,
        putActivar,
        putDesactivar,
        nominas
    }
})