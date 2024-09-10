import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useElaboracionSustratosStore = defineStore("elaboracionSustratos", () => {
    let token = ref(useLoginStore().token);
    let elaboracionSustratos = ref(null)

    let getElaboracionSustratos = async () => {
        try {
            let res = await axios.get("/api/elaboracion_sustratos",{
                headers: {
                    "x-token":token.value
                }
            })
            elaboracionSustratos.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getElaboracionSustratosId = async (id) => {
        try {
            let res = await axios.get(`/api/elaboracion_sustratos/${id}`,{
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
            let res = await axios.get('/api/elaboracion_sustratos/listar/activos',
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
            let res = await axios.get('/api/elaboracion_sustratos/listar/inactivos',
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

    let getElaboracionSustratosFechas = async (fecha1, fecha2) => {
        try {
            let res = await axios.get(`/api/elaboracion_sustratos/fechas/${fecha1}/${fecha2}`, {
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

    let postElaboracionSustratos = async (elaboracionSustrato) => {
        try {
            let res = await axios.post("/api/elaboracion_sustratos", elaboracionSustrato,
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

    let putElaboracionSustratos = async (id, elaboracionSustrato) => {
        try {
            let res = await axios.put(`/api/elaboracion_sustratos/${id}`, elaboracionSustrato,
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
            let res = await axios.put(`/api/elaboracion_sustratos/activar/${id}`,
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
            let res = await axios.put(`/api/elaboracion_sustratos/desactivar/${id}`,
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
        getElaboracionSustratos, getElaboracionSustratosId, getActivos, getInactivos, getElaboracionSustratosFechas, postElaboracionSustratos, putElaboracionSustratos, putActivar, putDesactivar, elaboracionSustratos
    }
})