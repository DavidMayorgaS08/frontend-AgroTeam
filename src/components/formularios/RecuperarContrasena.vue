<template>
    <div class="app">
        <div class="cont_spinner" v-if="spinner">
            <div class="spinner"></div>
        </div>
        <div class="login-box">
            <p>Recuperar Contraseña</p>
            <form @submit.prevent="recoverPassword">
                <div class="user-box">
                    <input required name="email" type="email" v-model="email" />
                    <label>Correo</label>
                </div>
                <button class="boton-elegante" type="submit" :disabled="spinner">
                    Recuperar Contraseña
                </button>
            </form>
        </div>
        <div class="cont_spinner" v-if="spinner">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let email = ref("esneydergalviz1210@gmail.com");
let spinner = ref(false);

async function recoverPassword() {
    if (!email.value) {
        alert("Por favor, introduce un correo válido.");
        return;
    }

    spinner.value = true;
    try {
        let res = await fetch("/api/recover-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email.value }),
        });

        if (res.ok) {
            alert("Correo de recuperación enviado. Revisa tu bandeja de entrada.");
            email.value = "";  // Limpiar el campo de correo
        } else {
            let result = await res.json();
            alert(result.message || "Error al intentar recuperar la contraseña.");
        }
    } catch (error) {
        console.error(error);
        spinner.value = false;
        alert("Ocurrió un error. Por favor, intenta de nuevo.");
    } finally {
        spinner.value = false;
    }
}
</script>
<style scoped>
* {
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
    background: #e9b27c;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    /* Centra el contenido */
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
    color: #000000;
    pointer-events: none;
    transition: 0.5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #000000;
    font-size: 12px;
}

.boton-elegante {
    padding: 10px 30px;
    border: 2px solid #f6e4ab;
    background-color: #f6e4ab;
    color: #000000;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 20px;
    /* Añade margen inferior */
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
    border-color: #eed37a;
    background: #eed37a;
}

.login-box a.a2 {
    color: #000000;
    text-decoration: none;
    font-size: 0.9rem;
    /* Aumenta el tamaño del enlace */
    transition: all 0.3s ease;
}

.login-box a.a2:hover {
    color: #000000;
}

.login-box p.forgot-password {
    margin-top: 10px;
    /* Añade margen superior */
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

.spinner {
    --size: 30px;
    --first-block-clr: #e28426;
    --second-block-clr: #eed37a;
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