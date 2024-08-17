<template>
  <div class="app">
    <div class="cont_spinner" v-if="spinner">
      <div class="spinner"></div>
    </div>
    <div class="area">
      <ul class="circles">
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/3248/3248532.png" />
        </li>
      </ul>
    </div>
    <div class="cont_btns">
      <button @click.prevent="listarTodos()">listar todos</button>
      <button @click.prevent="listarActivos()">listar activos</button>
      <button @click.prevent="listarInactivos()">listar inactivos</button>
      <button @click.prevent="crear()">crear</button>
      <button @click.prevent="contEditar()">editar</button>
      <button @click.prevent="estados()">cambiar estado</button>
    </div>
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name" />
    </div>
    <div class="cont_estados">
      <div v-for="(admin, index) in administradores" :key="index">
        <button @click.prevent="cambiarEstado(admin)">
          {{ admin.nombre }} - {{ admin.estado }}
        </button>
      </div>
    </div>
    <div class="cont_editar">
      <div v-for="(admin, index) in administradores" :key="index">
        <button @click.prevent="editar(admin._id)">
          {{ admin.nombre }} - {{ admin.telefono }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAdministradoresStore } from "../../stores/administradores.js";

let useAdministradores = useAdministradoresStore();

let spinner = ref(false);

let administradores = ref([]);

let r = null;

let rows = ref([]);
let columns = ref([
  {
    name: "nombre",
    label: "Nombre",
    align: "center",
    field: "nombre",
  },
  {
    name: "direccion",
    label: "Dirección",
    align: "center",
    field: "direccion",
  },
  {
    name: "telefono",
    label: "Teléfono",
    align: "center",
    field: "telefono",
  },
  {
    name: "email",
    label: "Email",
    align: "center",
    field: "email",
  },
  {
    name: "municipio",
    label: "Municipio",
    align: "center",
    field: "municipio",
  },
  {
    name: "password",
    label: "Contraseña",
    align: "center",
    field: "password",
  },
  {
    name: "rol",
    label: "Rol",
    align: "center",
    field: "rol",
  },
  {
    name: "estado",
    label: "Estado",
    align: "center",
    field: "estado",
  },
]);

let listarTodos = async () => {
  spinner.value = true;
  r = await useAdministradores.getAdministradores();
  rows.value = r.administradores;
  spinner.value = false;
  console.log(r.administradores);
};

let listarActivos = async () => {
  spinner.value = true;
  r = await useAdministradores.getActivos();
  rows.value = r.administradores;
  spinner.value = false;
  console.log(r.administradores);
};

let listarInactivos = async () => {
  spinner.value = true;
  r = await useAdministradores.getInactivos();
  rows.value = r.administradores;
  spinner.value = false;
  console.log(r.administradores);
};

let estados = async () => {
  r = await useAdministradores.getAdministradores();
  administradores.value = r.administradores;
  console.log(administradores.value);
};

let cambiarEstado = async (admin) => {
  console.log(admin);
  if (admin.estado == 1) {
    r = await useAdministradores.putDesactivar(admin._id);
    estados();
    console.log(r);
  } else {
    r = await useAdministradores.putActivar(admin._id);
    estados();
    console.log(r);
  }
};

let contEditar = async () => {
  r = await useAdministradores.getAdministradores();
  administradores.value = r.administradores;
  console.log(administradores.value);
};

let editar = async (id) => {
  r = await useAdministradores.getAdministradoresId(id);
  console.log(r);
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin-top: 90px;
  padding-top: 20px;
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
  --first-block-clr: #e28426;
  --second-block-clr: #eed37a;
  --clr: #111;
  width: 100px;
  height: 100px;
  position: fixed;
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

.cont_btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

.area {
  margin-top: -110px;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  animation: animate 20s linear infinite;
  bottom: -150px;
}

.circles li img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(-1000px) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(0) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

/* From Uiverse.io by cssbuttons-io */
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #e9b27c;
  box-shadow: 0px 15px 20px #eed37a;
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
</style>