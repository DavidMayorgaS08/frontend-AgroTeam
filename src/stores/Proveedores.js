import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import {useLoginStore} from '../stores/login.js'

export const useProveedoresStore = defineStore ("proveedores", ()=>{
    let token=ref(useLoginStore().token);
    let proveedores=ref(null)
    // #1
    let getProveedores=async()=>{
        try{
            let res=await axios.get("/api/proveedores",
                {
                    headers:{
                        "x-token":token.value
                    }
                }
            )
            proveedores.value=res.data
            console.log(res);
            return res.data
        } catch (error){
            console.log(error);
            return error
        }
    }
    
    let getProveedoresId=async(id)=>{
        try{
            let res=await axios.get(`/api/proveedores/${id}`,
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
            let res=await axios.get('/api/proveedores/listar/activos',
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
            let res=await axios.get('/api/proveedores/listar/inactivos',
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

    let postProveedores=async(proveedor)=>{
        try{
            let res=await axios.post("/api/proveedores",proveedor,
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

    let putProveedor=async(id, proveedor)=>{
        try{
            let res=await axios.put(`/api/proveedores/${id}`,proveedor,
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

    let putActivar=async(id)=>{
        try{
            let res=await axios.put(`/api/proveedores/activar/${id}`,null,
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

    let putDesactivar=async(id)=>{
        try{
            let res=await axios.put(`/api/proveedores/desactivar/${id}`,null,
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

    return{
        getProveedores,
        getProveedoresId,
        getActivos,
        getInactivos,
        postProveedores,
        putProveedor,
        putActivar,
        putDesactivar,
        proveedores
    }
})