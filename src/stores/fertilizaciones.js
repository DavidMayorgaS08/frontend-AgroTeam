import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useFertilizacionesStore = defineStore("fertilizaciones", () => {
    let token = ref(useLoginStore().token);
    let fertilizaciones = ref(null)

    let getFertilizaciones = async () => {
        try {
            let res = await axios.get("/api/fertilizantes",{
                headers: {
                    "x-token":token.value
                }
            })
            fertilizaciones.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getFertilizacionesId = async (id) => {
        try {
            let res = await axios.get(`/api/fertilizantes/${id}`,{
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
            let res = await axios.get('/api/fertilizantes/listar/activos',
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
            let res = await axios.get('/api/fertilizantes/listar/inactivos',
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

    let getFertilizacionesFechas = async (fecha1, fecha2) => {
        try {
            let res = await axios.get(`/api/fertilizantes/fechas/${fecha1}/${fecha2}`, {
                headers: {
                    "x-token": token.value
                }
            });
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    let postFertilizaciones = async (fertilizacion) => {
        try {
            let res = await axios.post("/api/fertilizantes", fertilizacion,
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

    let putFertilizaciones = async (id, fertilizacion) => {
        try {
            let res = await axios.put(`/api/fertilizantes/${id}`, fertilizacion,
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
            let res = await axios.put(`/api/fertilizantes/activar/${id}`,
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
            let res = await axios.put(`/api/fertilizantes/desactivar/${id}`,
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

    return {
        getFertilizaciones, getFertilizacionesId, getActivos, getInactivos, getFertilizacionesFechas, postFertilizaciones, putFertilizaciones, putActivar, putDesactivar, fertilizaciones
    }
})