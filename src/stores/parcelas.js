import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useParcelasStore = defineStore("parcelas", () => {
    let token = ref(useLoginStore().token);
    let parcelas = ref(null)

    let getParcelas = async () => {
        try {
            let res = await axios.get("/api/parcelas", {
                headers: {
                    "x-token": token.value
                }
            })
            parcelas.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getParcelasId = async (id) => {
        try {
            let res = await axios.get(`/api/parcelas/${id}`, {
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
            let res = await axios.get('/api/parcelas/listar/activos',
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
            let res = await axios.get('/api/parcelas/listar/inactivos',
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

    let postParcelas = async (parcela) => {
        try {
            let res = await axios.post('/api/parcelas', parcela,
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

    let putParcelas = async (id, parcela) => {
        try {
            let res = await axios.put(`/api/parcelas/${id}`, parcela,
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
            let res = await axios.put(`/api/parcelas/activar/${id}`, {},
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
            let res = await axios.put(`/api/parcelas/desactivar/${id}`, {},
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
        getParcelas,
        getParcelasId,
        getActivos,
        getInactivos,
        postParcelas,
        putParcelas,
        putActivar,
        putDesactivar,
        parcelas
    }
})