import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useAdministradoresStore = defineStore("administradores", () => {
    let token = ref(useLoginStore().token);
    let administradores = ref(null)

    let getAdministradores = async () => {
        try {
            let res = await axios.get("/api/administradores",{
                headers: {
                    "x-token":token.value
                }
            })
            administradores.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getAdministradoresId = async (id) => {
        try {
            let res = await axios.get(`/api/administradores/${id}`,{
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
            let res = await axios.get('/api/administradores/listar/activos',
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
            let res = await axios.get('/api/administradores/listar/inactivos',
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

    let postAdministradores = async (administrador) => {
        try {
            let res = await axios.post("/api/administradores", administrador,
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

    let putAdministradores = async (id, administrador) => {
        try {
            let res = await axios.put(`/api/administradores/${id}`, administrador,
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
            let res = await axios.put(`/api/administradores/activar/${id}`,
                null,{
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
            let res = await axios.put(`/api/administradores/desactivar/${id}`,
                null,{
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
        getAdministradores, getAdministradoresId, getActivos, getInactivos, postAdministradores, putAdministradores, putActivar, putDesactivar, administradores
    }
})