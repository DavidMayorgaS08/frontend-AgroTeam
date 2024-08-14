import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useFacturasStore = defineStore("facturas", () => {
    let token = ref(useLoginStore().token);
    let facturas = ref(null)

    let getFacturas = async () => {
        try {
            let res = await axios.get("/api/facturas",{
                headers: {
                    "x-token":token.value
                }
            })
            facturas.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getFacturasId = async (id) => {
        try {
            let res = await axios.get(`/api/facturas/${id}`,{
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
            let res = await axios.get('/api/facturas/listar/activos',
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
            let res = await axios.get('/api/facturas/listar/inactivos',
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

    let getFacturasFechas = async (fecha1, fecha2) => {
        try {
            let res = await axios.get(`/api/facturas/fechas/${fecha1}/${fecha2}`, {
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

    let postFacturas = async (factura) => {
        try {
            let res = await axios.post("/api/facturas", factura,
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

    let putFacturas = async (id, factura) => {
        try {
            let res = await axios.put(`/api/facturas/${id}`, factura,
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
            let res = await axios.put(`/api/facturas/activar/${id}`,
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
            let res = await axios.put(`/api/facturas/desactivar/${id}`,
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
        getFacturas, getFacturasId, getActivos, getInactivos, getInactivos, getFacturasFechas, postFacturas, putFacturas, putActivar, putDesactivar, facturas
    }
})