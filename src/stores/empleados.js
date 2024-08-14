import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useLoginStore } from '../stores/login.js'

export const useEmpleadosStore = defineStore("empleados", () => {
    let token = ref(useLoginStore().token);
    let empleados = ref(null)

    let getEmpleados = async () => {
        try {
            let res = await axios.get("/api/empleados",{
                headers: {
                    "x-token":token.value
                }
            })
            empleados.value = res.data
            console.log(res);
            return res.data
        } catch(error){
            console.log(error);
            return error
        }
    }

    let getEmpleadosId = async (id) => {
        try {
            let res = await axios.get(`/api/empleados/${id}`,{
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
            let res = await axios.get('/api/empleados/listar/activos',
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
            let res = await axios.get('/api/empleados/listar/inactivos',
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

    let postEmpleados = async (empleado) => {
        try {
            let res = await axios.post('/api/empleados', empleado, {
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

    let putEmpleados = async (id, empleado) => {
        try {
            let res = await axios.put(`/api/empleados/${id}`, empleado, {
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
            let res = await axios.put(`/api/empleados/activar/${id}`, null, {
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

    let putDesactivar = async (id) => {
        try{
            let res = await axios.put(`/api/empleados/desactivar/${id}`, null, {
                headers:{
                    "x-token": token.value
                }
            })
            console.log(res);
            return res.data
        }catch(error){
            console.log(error);
            return error
        }
    }

    return{
        getEmpleados, getEmpleadosId, getActivos, getInactivos, postEmpleados, putEmpleados, putActivar, putDesactivar, empleados
    }
})