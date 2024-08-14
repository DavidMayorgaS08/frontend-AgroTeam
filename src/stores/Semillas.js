import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import {useLoginStore} from '../stores/login.js'

export const useSemillasStore = defineStore("semillas",()=>
{
    let token =ref(useLoginStore().token);
    let semillas=ref(null)
    // #1
    let getSemillas=async()=>{
        try {
            let res = await axios.get("/api/semillas",
                {
                    headers:{
                        "x-token":token.value
                    }
                }
            )   
            semillas.value=res.data
            console.log(res);
            return res.data
        } catch (error){
            console.log(error);
            return error
        }
    }
    // #2
    let getSemillasId = async (id) => {
        try {
            let res= await axios.get (`/api/semillas/${id}`,
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
    // #3
    let getActivos = async ()=>{
        try{
            let res= await axios.get('/api/semillas/listar/activos',
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
    // #4
    let getInactivos=async ()=>{
        try {
            let res=await axios.get('/api/semillas/listar/inactivos',
                {
                    headers:{
                        "x-token":token.value
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
    // #5
    let postSemillas=async(semillas)=>{
        try {
            let res=await axios.post("/api/semillas",semillas,
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
    // #6
    let putSemillas=async(id,semillas)=>{
        try{
            let res=await axios.put(`/api/semillas/${id}`,semillas,
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
    // #7
    let putActivar=async (id)=>{
        try {
            let res = await axios.put(`/api/semillas/activar/${id}`,
                {
                    headers:{
                        "x-token":token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } 
        catch (error){
            console.log(error);
            return error
        }
    }
    // #8
    let putDesactivar= async (id)=>{
        try {
            let res= await axios.put (`/api/semillas/desactivar/${id}`,
                {
                    headers:{
                        "x-token":token.value
                    }
                }
            )
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);return error
        }
    }

    return {
        getSemillas,
        getSemillasId,
        getActivos,
        getInactivos,
        postSemillas,
        putSemillas,
        putActivar,
        putDesactivar,
        semillas
    }

    // falta esta:
    // router.get("listar/por/:proveedor",[
//     validarJWT,
//     validarCampos
// ], httpSemillas.getSemillasProveedor);
})