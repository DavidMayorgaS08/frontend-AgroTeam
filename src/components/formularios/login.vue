<template>
    <div class="app">
        <div class="login-box">
            <p>Inicio De Sesion</p>
            <form>
                <div class="user-box">
                    <input required="" name="email" type="text" v-model="email"/>
                    <label>Correo</label>
                </div>
                <div class="user-box">
                    <input required="" name="password" type="password" v-model="password"/>
                    <label>Contraseña</label>
                </div>
                <button class="boton-elegante" @click.prevent="iniciar()">Ingresar</button>
            </form>
            <p class="forgot-password"><a href="#" class="a2">¿Olvidaste la Contraseña?</a></p>
        </div>
        <div class="cont_spinner" v-if="spinner">
            <div class="spinner"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLoginStore } from '../../stores/login.js'
const router = useRouter()

let useLogin = useLoginStore()

let spinner = ref(false)

let email = ref('juanperez@example.com')
let password = ref('password123')

async function iniciar() {
    spinner.value = true
    try {
        let data = {
            email: email.value,
            password: password.value
        }
        let res = await useLogin.login(data)
        spinner.value = false
        if (res) {
            router.push("/menu")
        }else {
            alert('Usuario o contraseña incorrecta')
        }
    } catch (error) {
        console.log(error)
        spinner.value = false
    }
}
</script>

<style scoped>
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    margin: 20px auto;
    transform: translate(-50%, -55%);
    background: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
    box-shadow: 0 2px 25px rgb(255, 253, 253);
    border-radius: 10px;
    text-align: center; /* Centra el contenido */
}

.login-box p:first-child {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
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
    color: #ffffff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #fff;
    font-size: 12px;
}

.boton-elegante {
    padding: 10px 30px;
    border: 2px solid #2c2c2c;
    background-color: #1a1a1a;
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
    background: radial-gradient(circle,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0) 70%);
    transform: scale(0);
    transition: transform 0.5s ease;
}

.boton-elegante:hover::after {
    transform: scale(4);
}

.boton-elegante:hover {
    border-color: #666666;
    background: #292929;
}

.login-box a.a2 {
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem; /* Aumenta el tamaño del enlace */
    transition: all 0.3s ease;
}

.login-box a.a2:hover {
    color: #aaa;
}

.login-box p.forgot-password {
    margin-top: 10px; /* Añade margen superior */
    color: #aaa;
    font-size: 14px;
}

.login-box a.a2:hover {
    background: transparent;
    color: #aaa;
    border-radius: 5px;
}

.cont_spinner {
    position: absolute;
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
 --first-block-clr: #235ba1;
 --second-block-clr: #66bea4;
 --clr: #111;
 width: 100px;
 height: 100px;
 position: relative;
}

.spinner::after,.spinner::before {
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
 0%, 100% {
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
 0%, 100% {
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
