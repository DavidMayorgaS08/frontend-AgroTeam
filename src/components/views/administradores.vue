<template>
  <div class="app">
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
  r = await useAdministradores.getAdministradores();
  rows.value = r.administradores;
  console.log(r.administradores);
};

let listarActivos = async () => {
  r = await useAdministradores.getActivos();
  rows.value = r.administradores;
  console.log(r.administradores);
};

let listarInactivos = async () => {
  r = await useAdministradores.getInactivos();
  rows.value = r.administradores;
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
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
</style>