<template>
  <body>
    <div class="login-container">
      <div class="login-box">
        <h2>Nueva Contraseña</h2>
        <form>
          <div class="input-box">
            <input type="text" v-model="newPasword" required />
            <label>Digite Su Nueva Contraseña</label>
          </div>
          <div class="input-box">
            <input type="text" v-model="ConfirmarPassword" required />
            <label>Confirme Su Nueva Contraseña</label>
          </div>
          <button @click.prevent="resetPassword()">Cambiar Contraseña</button>
        </form>
      </div>
    </div>
  </body>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRecuperarContrasenaStore } from "../../stores/recuperarContrasena.js";

const newPassword = ref("");
const confirmNewPassword = ref("");
const message = ref("");
const route = useRoute();
const router = useRouter();
const store = useRecuperarContrasenaStore();

const resetPassword = async () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {
    const passwords = {
      newPassword: newPassword.value,
      confirmNewPassword: confirmNewPassword.value,
    };
    const token = route.params.token; // Obtén el token de la URL
    const res = await store.resetPassword(passwords, token); // Pasa el token como parámetro
    message.value = res.message;
    router.push("/login");
  } catch (error) {
    console.log(error);
    message.value = error.response
      ? error.response.data.message
      : "Error al restablecer la contraseña.";
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #ffffff;
  background-image: url("../src/img/agroteam.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.login-box {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-box h2 {
  margin-bottom: 30px;
  color: #4caf50;
  font-weight: bold;
}

.input-box {
  position: relative;
  margin-bottom: 30px;
}

.input-box input {
  width: 100%;
  padding: 10px;
  background: none;
  border: none;
  border-bottom: 2px solid #4caf50;
  outline: none;
  color: #4caf50;
  font-size: 18px;
}

.input-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 18px;
  color: #4caf50;
  pointer-events: none;
  transition: 0.5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -25px;
  left: 0;
  color: #4caf50;
  font-size: 14px;
}

button {
  width: 100%;
  background-color: #4caf50;
  border: none;
  padding: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>