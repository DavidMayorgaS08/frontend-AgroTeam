import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useAnalisisSuelos = defineStore ("analisis suelos", () => {
    let token = ref(useLoginStore().token);
    let analisis_suelos = ref(null)
    
    let getAnalisis_Suelos = async () => {
        try {
            let res = await axios.get("/api/analisis_suelos",{
                headers: {
                    "x-token": token.value
                }
            })
            analisis_suelos.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getAnalisis_SuelosId = async (id, analisis_suelos) => {
        try {
            let res = await axios.get(`/api/analisis_suelos/${id}`,{
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
            let res = await axios.get('/api/analisis_suelos/listar/activos',
                null,{
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
            let res = await axios.get('/api/analisis_suelos/listar/inactivos',
                null,{
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

    let postAnalisis_Suelos = async (analisis_suelos) => {
        try {
            let res = await axios.post('/api/analisis_suelos', analisis_suelos, {
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

    let putAnalisis_Suelos = async (id,analisis_suelos) => {
        try {
            let res = await axios.put(`/api/analisis_suelos/${id}`, analisis_suelos, {
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

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`"/api/analisis_suelos"/activar/${id}`,
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
            let res = await axios.put(`"/api/analisis_suelos"/desactivar/${id}`,
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
    return{
        getAnalisis_Suelos,
        getAnalisis_SuelosId,
        getActivos,
        getInactivos,
        postAnalisis_Suelos,
        putAnalisis_Suelos,
        putActivar,
        putDesactivar,
        analisis_suelos
        
    } 
})