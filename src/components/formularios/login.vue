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
    <div :class="registroFallido ? 'error1' : 'error'">
      <div class="error__icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
      <div class="error__title">{{ text }}</div>
      <div class="error__close" @click="cerrar()">
        <svg
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="#393a37"
          ></path>
        </svg>
      </div>
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

let registroFallido = ref(false);
let text = ref("");

function ocultar() {
  setTimeout(() => {
    registroFallido.value = false;
  }, 3000);
}

function cerrar() {
  registroFallido.value = false;
}

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
    if (res && res.admin && res.token) {
      router.push("/menu");
    } else {
      registroFallido.value = true;
      text.value = "Correo o contraseña incorrectos";
      ocultar();
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

.error {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error1 {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #fce8db;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
  transition: all 0.5s;
}

.error__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.error__icon path {
  fill: #ef665b;
}

.error__title {
  font-weight: 500;
  font-size: 14px;
  color: #71192f;
}

.error__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.error__close path {
  fill: #71192f;
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
