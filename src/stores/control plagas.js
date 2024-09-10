import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useControlPlagas = defineStore("control plagas", () => {

    let token = ref(useLoginStore().token);
    let controlPlagas = ref(null)

    let getControlPlagas = async () => {
        try {
            let res = await axios.get("/api/control_plagas",{
                headers: {
                    "x-token":token.value
                }
            })
            controlPlagas.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getControlPlagasId = async (id) => {
        try {
            let res = await axios.get(`/api/control_plagas/${id}`,{
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
            let res = await axios.get('/api/control_plagas/listar/activos',
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
            let res = await axios.get('/api/control_plagas/listar/inactivos',
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
    let getControlPlagasFechas = async (fechaInicio, fechaFin) => {
        try {
            let res = await axios.get(`/api/control_plagas/fechas/${fechaInicio}/${fechaFin}`, {
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
    
    let postControlPlagas = async (controlPlagas) => {
        try {
            let res = await axios.post('/api/control_plagas',controlPlagas,{
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

    let putControlPlagas = async (id, controlPlagas) => {
        try {
            let res = await axios.put(`/api/control_plagas/${id}`,controlPlagas,{
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
            let res = await axios.put(`/api/control_plagas/activar/${id}`,
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
            let res = await axios.put(`/api/control_plagas/desactivar/${id}`,
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
        getControlPlagas,
        getControlPlagasId,
        getActivos,
        getInactivos,
        getControlPlagasFechas,
        postControlPlagas,
        putControlPlagas,
        putActivar,
        putDesactivar,
        controlPlagas
    }
});