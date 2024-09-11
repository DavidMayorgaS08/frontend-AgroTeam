import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import {useLoginStore} from '../stores/login.js'

export const useProduccionesStore = defineStore ("producciones", ()=>{
    let token=ref(useLoginStore().token);
    let producciones=ref(null)
    // #1
    let getProducciones=async()=>{
        try{
            let res=await axios.get("/api/producciones",
                {
                    headers:{
                        "x-token":token.value
                    }
                }
            )
            producciones.value=res.data
            console.log(res);
            return res.data
        } catch (error){
            console.log(error);
            return error
        }
    }
    
    let getProduccionesId=async(id)=>{
        try{
            let res=await axios.get(`/api/producciones/${id}`,
                {
                    headers:{
                        "x-token":token.value
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

    let getActivos=async()=>{
        try{
            let res=await axios.get('/api/producciones/listar/activos',
                {
                    headers:{
                        "x-token":token.value
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

    let getInactivos=async()=>{
        try{
            let res=await axios.get('/api/producciones/listar/inactivos',
                {
                    headers:{
                        "x-token":token.value
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

    let postProducciones=async(producciones)=>{ 
        try{
            let res=await axios.post('/api/producciones',producciones,
                {
                    headers:{
                        "x-token":token.value
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

    let putProducciones=async(id, producciones)=>{
        try{
            let res=await axios.put(`/api/producciones/${id}`,producciones,
                {
                    headers:{
                        "x-token":token.value
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
            let res = await axios.put(`/api/producciones/activar/${id}`, {},
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
            let res = await axios.put(`/api/producciones/desactivar/${id}`, {},
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
        getProducciones,
        getProduccionesId,
        getActivos,
        getInactivos,
        postProducciones,
        putProducciones,
        putActivar,
        putDesactivar,
        producciones
    }
})