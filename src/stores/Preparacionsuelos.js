import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const usePreparacionsuelosStore = defineStore("preparacionSuelos", () => {
    let token = ref(useLoginStore().token);
    let preparacion_suelos = ref(null)
    // #1
    let getPreparacion_suelos = async () => {
        try {
            let res = await axios.get("/api/preparacion_suelos",
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            preparacion_suelos.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }
    // #2
    let getPreparacion_suelosId = async (id) => {
        try {
            let res = await axios.get(`/api/preparacion_suelos/${id}`,
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
    // #3
    let getActivos = async () => {
        try {
            let res = await axios.get('/api/preparacion_suelos/listar/activos',
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
    // #4
    let getInactivos = async () => {
        try {
            let res = await axios.get('/api/preparacion_suelos/listar/inactivos',
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
    // #5
    let postPereparacion_suelos = async (preparacion_suelo) => {
        try {
            let res = await axios.post("/api/preparacion_suelos", preparacion_suelo,
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
    // #6
    let putPreparacion_suelos = async (id, preparacion_suelos) => {
        try {
            let res = await axios.put(`/api/preparacion_suelos/${id}`, preparacion_suelos,
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
    // #7
    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/preparacion_suelos/activar/${id}`,
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
    // #8
    let putDesactivar = async (id) => {
        try {
            let res = await axios.put(`/api/preparacion_suelos/desactivar/${id}`,
                null,{
                    headers:{
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

    return {
        getPreparacion_suelos,
        getPreparacion_suelosId,
        getActivos,
        getInactivos,
        postPereparacion_suelos,
        putPreparacion_suelos,
        putActivar,
        putDesactivar,
        preparacion_suelos
    }

    // falta esta:
    // router.get("/fechas/:fecha1/:fecha2",[
    //     validarJWT,
    //     validarCampos
    // ], httpPreparacionSuelos.getPreparacionSuelosEntreFechas);
})