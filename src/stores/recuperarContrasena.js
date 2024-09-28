import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useRecuperarContrasenaStore = defineStore("recuperarContrasena", () => {
    const email = ref('');
    const recuperarContrasena = async (email) => {
        try {
            const response = await axios.post('/api/restablecer', { email });
            return response.data; // Asegúrate de devolver los datos de la respuesta
        } catch (error) {
            console.error(error);
            throw error; // Lanza el error para que pueda ser manejado en el componente
        }
    }

    const resetPassword = async (passwords, token) => { // Asegúrate de recibir el token como parámetro
        try {
          const response = await axios.post(`/api/restablecer/reset_password/${token}`, passwords); // Envía passwords directamente
          return response.data; // Asegúrate de devolver los datos de la respuesta
        } catch (error) {
          console.error(error);
          throw error; // Lanza el error
        }
      }; 

    return {
        email,
        recuperarContrasena,
        resetPassword
    }
});