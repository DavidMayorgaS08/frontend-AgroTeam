import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useCompradores = defineStore("compradores", () => {
    let token = ref(useLoginStore().token);
    let compradores = ref(null)

    let getCompradores = async () => {
        try {
            let res = await axios.get("/api/compradores",{
                headers: {
                    "x-token":token.value
                }
            })
            compradores.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getCompradoresId = async (id) => {
        try {
            let res = await axios.get(`/api/compradores/${id}`,{
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
            let res = await axios.get('/api/compradores/listar/activos',
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
            let res = await axios.get('/api/compradores/listar/inactivos',
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

    let postCompradores = async (compradores) => {
        try {
            let res = await axios.post('/api/compradores',compradores,
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

    let putCompradores = async (id,compradores) => {
        try {
            let res = await axios.put(`/api/compradores/${id}`,compradores,
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

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/compradores/activar/${id}`,
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
            let res = await axios.put(`/api/compradores/desactivar/${id}`,
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
        getCompradores,
        getCompradoresId,
        getActivos,
        getInactivos,
        postCompradores,
        putCompradores,
        putActivar,
        putDesactivar,
        compradores
    }
});

