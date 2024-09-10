<template>
  <div class="app">
    <div class="login-box">
      <p>Inicio De Sesion</p>
      <form>
        <div class="user-box">
          <input required="" name="email" type="text" v-model="email" />
          <label>Correo</label>
        </div>
        <div class="user-box">
          <input
            required=""
            name="password"
            type="password"
            v-model="password"
          />
          <label>Contraseña</label>
        </div>
        <button class="boton-elegante" @click.prevent="iniciar()">
          Ingresar
        </button>
      </form>
      <p class="forgot-password">
        <a href="#" class="a2">¿Olvidaste la Contraseña?</a>
      </p>
    </div>
    <div class="cont_spinner" v-if="spinner">
      <div class="spinner"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "../../stores/login.js";
const router = useRouter();

let useLogin = useLoginStore();

let spinner = ref(false);

let email = ref("juanperez@example.com");
let password = ref("password123");

async function iniciar() {
  spinner.value = true;
  try {
    let data = {
      email: email.value,
      password: password.value,
    };
    let res = await useLogin.login(data);
    spinner.value = false;
    if (res) {
      router.push("/menu");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  } catch (error) {
    console.log(error);
    spinner.value = false;
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  margin: 20px auto;
  transform: translate(-50%, -55%);
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.5);
}

.login-box p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #000000;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 15px 0;
  font-size: 16px;
  color: #000000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000000;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #000000;
  font-size: 12px;
}

.login-box .user-box input:focus {
  border-bottom: 3px solid #2e7d32;
}

.boton-elegante {
  padding: 10px 30px;
  border: 2px solid #2e7d32;
  background-color: #2e7d32;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 20px; /* Añade margen inferior */
}

.boton-elegante::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: transform 0.5s ease;
}

.boton-elegante:hover::after {
  transform: scale(4);
}

.boton-elegante:hover {
  border-color: #589f5c;
  background: #589f5c;
}

.login-box a.a2 {
  color: #000000;
  text-decoration: none;
  font-size: 0.9rem; /* Aumenta el tamaño del enlace */
  transition: all 0.3s ease;
}

.login-box a.a2:hover {
  color: #000000;
}

.login-box p.forgot-password {
  margin-top: 10px; /* Añade margen superior */
  color: #000000;
  font-size: 14px;
}

.login-box a.a2:hover {
  background: transparent;
  color: #000000;
  border-radius: 5px;
}

.cont_spinner {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.474);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* From Uiverse.io by satyamchaudharydev */
.spinner {
  --size: 30px;
  --first-block-clr: #2e7d32;
  --second-block-clr: #77DD77;
  --clr: #111;
  width: 100px;
  height: 100px;
  position: relative;
}

.spinner::after,
.spinner::before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  width: var(--size);
  height: var(--size);
  top: 50%;
  animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  left: 50%;
  background: var(--first-block-clr);
}

.spinner::after {
  background: var(--second-block-clr);
  top: calc(50% - var(--size));
  left: calc(50% - var(--size));
  animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
}

@keyframes down {
  0%,
  100% {
    transform: none;
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(100%) translateY(100%);
  }

  75% {
    transform: translateY(100%);
  }
}

@keyframes up {
  0%,
  100% {
    transform: none;
  }

  25% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(-100%) translateY(-100%);
  }

  75% {
    transform: translateY(-100%);
  }
}
</style>
