import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useFincasStore = defineStore("fincas", () => {
    let token = ref(useLoginStore().token);
    let fincas = ref(null)

    let getFincas = async () => {
        try {
            let res = await axios.get("/api/fincas",{
                headers: {
                    "x-token":token.value
                }
            })
            fincas.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getFincasId = async (id) => {
        try {
            let res = await axios.get(`/api/fincas/${id}`,{
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data            
        } catch(error){
            console.log(error);
            return error
            
        }
    }

    let getActivos = async () => {
        try {
            let res = await axios.get('/api/fincas/listar/activos',
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data           
        } catch(error){
            console.log(error);
            return error
        } 
    }

    let getInactivos = async () => {
        try {
            let res = await axios.get('/api/fincas/listar/inactivos',
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data           
        } catch(error){
            console.log(error);
            return error
        } 
    }

    let postFincas = async (finca) => {
        try {
            let res = await axios.post("/api/fincas", finca,
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } catch (error){
            console.log(error);
            return error
        }
    }

    let putFincas = async (id, finca) => {
        try {
            let res = await axios.put(`/api/fincas/${id}`, finca,
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } catch (error){
            console.log(error);
            return error
        }
    }

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/fincas/activar/${id}`,
                null,{
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
            let res = await axios.put(`/api/fincas/desactivar/${id}`,
                null,{
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
        getFincas, getFincasId, getActivos, getInactivos, postFincas, putFincas, putActivar, putDesactivar, fincas
    }
})