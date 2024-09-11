import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useRiegosStore = defineStore("riegos", () => {
    let token = ref(useLoginStore().token);
    let riegos = ref(null)
    // #1
    let getRiegos = async () => {
        try {
            let res = await axios.get("/api/riegos",
                {
                    headers: {
                        "x-token": token.value
                    }
                }
            )
            riegos.value = res.data
            console.log(res);
            return res.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    let getRiegosId = async (id) => {
        try {
            let res = await axios.get(`/api/riegos/${id}`,
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

    let getActivos = async () => {
        try {
            let res = await axios.get('/api/riegos/listar/activos',
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

    let getInactivos = async () => {
        try {
            let res = await axios.get('/api/riegos/listar/inactivos',
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

    let postRiegos = async (riegos) => {
        try {
            let res = await axios.post("/api/riegos", riegos,
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

    let putRiegos = async (id, riegos) => {
        try {
            let res = await axios.put(`/api/riegos/${id}`, riegos, {
                headers: {
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    let putActivar = async (id) => {
        try {
            let res = await axios.put(`/api/riegos/activar/${id}`, null, {
                headers:{
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data            
        } catch (error){
            console.log(error);
            return error
        }
    }

    let putDesactivar = async (id) => {
        try {
            let res = await axios.put(`/api/riegos/desactivar/${id}`, null, {
                headers:{
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data            
        } catch (error){
            console.log(error);
            return error
        }
    }

    return {
        getRiegos,
        getRiegosId,
        getActivos,
        getInactivos,
        postRiegos,
        putRiegos,
        putActivar,
        putDesactivar,
        riegos
    }
})