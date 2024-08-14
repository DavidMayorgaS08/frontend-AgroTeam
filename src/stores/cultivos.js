import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'
  
export const useCultivosStore = defineStore("cultivos", () => {

    let token = ref(useLoginStore().token);
    let cultivos = ref(null)

    let getCultivos = async () => {
        try {
            let res = await axios.get("/api/cultivos",{
                headers: {
                    "x-token":token.value
                }
            })
            cultivos.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getCultivosId = async (id) => {
        try {
            let res = await axios.get(`/api/cultivos/${id}`,{
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
            let res = await axios.get('/api/cultivos/listar/activos',
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
            let res = await axios.get('/api/cultivos/listar/inactivos',
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

    let postCultivos = async (cultivo) => {
        try {
            let res = await axios.post('/api/cultivos',cultivo,
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

    let putCultivos = async (id, cultivo) => {
        try {
            let res = await axios.put(`/api/cultivos/${id}`, cultivo,
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
            let res = await axios.put(`/api/cultivos/activar/${id}`,
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
            let res = await axios.put(`/api/cultivos/desactivar/${id}`,
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
        getCultivos,
        getCultivosId,
        getActivos,
        getInactivos,
        postCultivos,
        putCultivos,
        putActivar,
        putDesactivar,
        cultivos
    }
});