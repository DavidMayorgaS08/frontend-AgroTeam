import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useGastosStore = defineStore("gastos", () => {
    let token = ref(useLoginStore().token);
    let gastos = ref(null)

    let getGastos = async () => {
        try {
            let res = await axios.get("/api/gastos",{
                headers: {
                    "x-token":token.value
                }
            })
            gastos.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getGastosId = async (id) => {
        try {
            let res = await axios.get(`/api/gastos/${id}`,{
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
            let res = await axios.get('/api/gastos/listar/activos',
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
            let res = await axios.get('/api/gastos/listar/inactivos',
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

    let getGastosFechas = async (fecha1, fecha2) => {
        try {
            let res = await axios.get(`/api/gastos/fechas/${fecha1}/${fecha2}`, {
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

    let getGastosTotal = async () => {
        try {
            let res = await axios.get('/api/gastos/total', {
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

    let postGastos = async (gasto) => {
        try {
            let res = await axios.post("/api/gastos", gasto,
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

    let putGasto = async (id, gasto) => {
        try {
            let res = await axios.put(`/api/gastos/${id}`, gasto,
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
            let res = await axios.put(`/api/gastos/activar/${id}`,
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
            let res = await axios.put(`/api/gastos/desactivar/${id}`,
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
        getGastos, getGastosId, getActivos, getInactivos, postGastos, getGastosFechas, getGastosTotal, putGasto, putActivar, putDesactivar, gastos
    }
})