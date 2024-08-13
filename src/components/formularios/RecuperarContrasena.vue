<template>
    <div class="login-box">
        <p>Recuperación De Contraseña</p>
        <form>
            <div class="user-box">
                <input required="" name="email" type="text" />
                <label>Correo</label>
            </div>
            <div class="user-box">
                <input required="" name="phone" type="text" />
                <label>Teléfono</label>
            </div>
            <button class="boton-elegante">Recuperar</button>
        </form>
    </div>
</template>

<script setup></script>

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
    color: #fff;
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

</style>