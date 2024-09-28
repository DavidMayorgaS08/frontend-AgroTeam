import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useSiembrasStore = defineStore("siembras", () => {

    let token = ref(useLoginStore().token);
    let siembras = ref(null)

    let getSiembras = async () => {
        try {
            let res = await axios.get("/api/siembras",{
                headers: {
                    "x-token":token.value
                }
            })
            siembras.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getSiembrasId = async (id) => {
        try {
            let res = await axios.get(`/api/siembras/${id}`,{
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
            let res = await axios.get('/api/siembras/listar/activos',
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
            let res = await axios.get('/api/siembras/listar/inactivos',
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
    
    let postSiembras = async (siembras) => {
        try {
            console.log("Token value:", token.value); // Verificar el valor del token
            let res = await axios.post('/api/siembras', siembras, {
                headers: {
                    "x-token": token.value
                }
            });
            console.log(res);
            return res.data;
        } catch (error) {
            console.error("Error en la solicitud:", error); // Registro detallado del error
            if (error.response) {
                console.error("Datos de respuesta del error:", error.response.data);
                console.error("Estado de respuesta del error:", error.response.status);
                console.error("Encabezados de respuesta del error:", error.response.headers);
            }
            return error;
        }
    }

    let putSiembras = async (id,siembra) => {
        try {
            let res = await axios.put(`/api/siembras/${id}`,siembra,{
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
            let res = await axios.put(`/api/siembras/activar/${id}`,
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
            let res = await axios.put(`/api/siembras/desactivar/${id}`,
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
        getSiembras,
        getSiembrasId,
        getActivos,
        getInactivos,
        postSiembras,
        putSiembras,
        putActivar,
        putDesactivar, 
        siembras
    }

});