<template>
  <div class="login-box">
    <p>Registro de Usuario</p>
    <form>
      <div class="form-grid">
        <div class="user-box">
          <input required name="nombre" type="text" />
          <label>Nombre Completo</label>
        </div>
        <div class="user-box">
          <input required name="documento" type="text" />
          <label>Documento</label>
        </div>
        <div class="user-box">
          <input required name="telefono" type="text" />
          <label>Teléfono</label>
        </div>
        <div class="user-box">
          <input required name="correo" type="email" />
          <label>Correo</label>
        </div>
        <div class="user-box">
          <input required name="genero" type="text" />
          <label>Género</label>
        </div>
        <div class="user-box">
          <input required name="fecha_nacimiento" type="date" />
          <label>Fecha de Nacimiento</label>
        </div>
        <div class="user-box">
          <input required name="cuenta_bancaria" type="text" />
          <label>Cuenta Bancaria</label>
        </div>
        <div class="user-box">
          <input required name="contraseña" type="password" />
          <label>Contraseña</label>
        </div>
      </div>
      <button class="boton-elegante">Registrar</button>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
body {
  position: relative;
  height: 100vh;
  margin: 0;
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 50px;
  background: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  box-shadow: 0 2px 25px rgb(255, 253, 253);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.user-box {
  position: relative;
}

.user-box input {
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

.user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.user-box input:focus~label,
.user-box input:valid~label {
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
  margin-top: 20px; /* Espacio adicional arriba del botón */
  margin-left: 130px;
}

.boton-elegante::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
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