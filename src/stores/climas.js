import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useClimas =defineStore("climas",() => {
    let token = ref(useLoginStore().token);
    let climas = ref(null)

    let getClimas = async () => {
        try {
            let res = await axios.get("/api/climas",{
                headers: {
                    "x-token":token.value
                }
            })
            climas.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getClimasId = async (id) => {
        try {
            let res = await axios.get(`/api/climas/${id}`,{
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
            let res = await axios.get('/api/climas/listar/activos',
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
            let res = await axios.get('/api/climas/listar/inactivos',
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

    let postClimas = async (clima) => {
        try {
            let res = await axios.post('/api/climas',clima,{
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

    let putClimas = async (id, clima) => {
        try {
            let res = await axios.put(`/api/climas/${id}`,clima,{
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
            let res = await axios.put(`/api/climas/activar/${id}`,
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
            let res = await axios.put(`/api/climas/desactivar/${id}`,
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
    getClimas,
    getClimasId,
    getActivos,
    getInactivos,
    postClimas,
    putClimas,
    putActivar,
    putDesactivar,
    climas
 }
})