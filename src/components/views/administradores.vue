<template>
  <div class="app">
    <div class="cont_spinner" v-if="spinner">
      <div class="spinner"></div>
    </div>
    <div class="cont_btns">
      <button class="btn" @click.prevent="listarTodos()">listar todos</button>
      <button class="btn" @click.prevent="listarActivos()">
        listar activos
      </button>
      <button class="btn" @click.prevent="listarInactivos()">
        listar inactivos
      </button>
      <button class="btn" @click.prevent="crear()">crear</button>
    </div>
    <div class="cont_nombre_vue">
      <p class="nombre_vue">administradores</p>
    </div>
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name">
        <template v-slot:body-cell-estado="props">
          <q-td :props="props">
            <q-chip
              :label="props.row.estado == 0 ? 'Inactivo' : 'Activo'"
              :color="props.row.estado == 0 ? 'negative' : 'positive'"
              text-color="white"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-rol="props">
          <q-td :props="props">
            <q-chip
              :label="
                props.row.rol === 1
                  ? 'Administrador'
                  : props.row.rol === 2
                  ? 'Usuario 1'
                  : props.row.rol === 3
                  ? 'Usuario 2'
                  : 'Usuario 3'
              "
              :color="
                props.row.rol === 1
                  ? 'primary'
                  : props.row.rol === 2
                  ? 'primary'
                  : props.row.rol === 3
                  ? 'primary'
                  : 'primary'
              "
              text-color="white"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-acciones="props">
          <q-td :props="props">
            <q-btn
              @click="editar(props.row)"
              color="primary"
              label="Editar"
              :id="props.row.id"
              :style="{ marginRight: '5px' }"
            />
            <q-btn
              v-if="props.row.estado == 0"
              @click="activar(props.row)"
              color="positive"
              :id="props.row.id"
            >
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(1837,280)"
                  d="m0 0h16l12 3 13 8 14 13 7 8 7 7 7 8 7 7 7 8 7 7v2h2l7 8 15 16 7 7 7 8 12 13 7 10 5 12 1 5v16l-3 12-6 11-11 13-28 28h-2v2l-7 6-86 86h-2l-2 4h-2l-2 4h-2l-2 4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2l-8 7-89 89-7 6-5 6-8 7-106 106h-2l-1 3-7 6-5 6-7 6-102 102-8 7-89 89h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2l-8 7-85 85-7 6-5 6-7 6-111 111h-2l-1 3-7 6-5 6-7 6-98 98-8 7-93 93h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2v2h-2v2h-2v2h-2v2h-2v2h-2v2l-8 7-85 85-7 6-5 6-7 6-79 79-13 9-14 5-16 1-10-2-10-4-8-6-10-9-550-550-7-10-5-12-1-4v-19l3-10 5-10 7-9h2l2-4 94-94 10-7 11-5 9-2h13l13 3 11 6 13 11 22 22 8 7 34 34 2 1v2l4 2 40 40 8 7 32 32 6 5v2l4 2 26 26 8 7 32 32 8 7 36 36 8 7 32 32 6 5v2l4 2 26 26 8 7 28 28 8 7 21 21 3 1 50-50h2v-2h2v-2l8-7 74-74h2l1-3 7-6 102-102h2l2-4h2l2-4h2l2-4h2v-2h2v-2h2v-2h2v-2h2v-2l8-7 79-79h2l2-4h2l1-3 8-7 90-90h2v-2h2v-2h2v-2h2v-2l8-7 74-74h2l1-3 7-6 102-102h2l2-4h2l2-4h2l2-4h2v-2h2v-2h2v-2h2v-2h2v-2l8-7 79-79h2l2-4h2l1-3 8-7 90-90h2v-2h2v-2h2v-2h2v-2l8-7 74-74h2l2-4h2l1-3 7-6 98-98h2l2-4h2l2-4h2l2-4h2l2-4h2v-2h2v-2h2v-2h2v-2h2v-2l8-7 36-36 13-9 10-4z"
                  fill="#FEFEFE"
                />
              </svg>
            </q-btn>
            <q-btn
              v-else
              @click="desactivar(props.row)"
              color="negative"
              :id="props.row.id"
            >
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  transform="translate(503,426)"
                  d="m0 0h18l15 3 12 5 13 8 13 11 449 449 4-2 453-453 14-10 12-6 14-4 7-1h18l15 3 12 5 13 8 13 11 8 10 8 13 5 13 3 15v15l-3 16-7 16-7 11-8 10h-2l-2 4-352 352h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-28 28h-2l-2 4-6 5-6 7-4 4h-2l-2 4-8 8h-2l-2 4-4 2v2h-2v2h-2l3 5 449 449 11 14 6 10 5 13 3 15v14l-3 16-5 13-8 14-9 11h-2l-1 3-13 10-16 8-16 4-7 1h-13l-13-2-10-3-12-6-11-8-457-457-4 1-8 7-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-272 272h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-12 12h-2l-2 4h-2l-1 3-13 10-16 8-16 4-7 1h-13l-13-2-15-5-13-8-12-11-10-11-8-13-6-16-2-11v-18l3-14 5-13 7-12 11-13 450-450-1-4-455-455-10-14-5-11-4-13-1-6v-19l4-18 8-16 10-14 8-8 14-10 12-6 14-4z"
                  fill="#fff"
                />
              </svg>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="cont_form" v-if="formulario">
      <div class="form">
        <svg
          class="cerrarForm"
          @click="cerrarForm()"
          version="1.1"
          viewBox="0 0 2048 2048"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(503,426)"
            d="m0 0h18l15 3 12 5 13 8 13 11 449 449 4-2 453-453 14-10 12-6 14-4 7-1h18l15 3 12 5 13 8 13 11 8 10 8 13 5 13 3 15v15l-3 16-7 16-7 11-8 10h-2l-2 4-352 352h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-28 28h-2l-2 4-6 5-6 7-4 4h-2l-2 4-8 8h-2l-2 4-4 2v2h-2v2h-2l3 5 449 449 11 14 6 10 5 13 3 15v14l-3 16-5 13-8 14-9 11h-2l-1 3-13 10-16 8-16 4-7 1h-13l-13-2-10-3-12-6-11-8-457-457-4 1-8 7-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-272 272h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-12 12h-2l-2 4h-2l-1 3-13 10-16 8-16 4-7 1h-13l-13-2-15-5-13-8-12-11-10-11-8-13-6-16-2-11v-18l3-14 5-13 7-12 11-13 450-450-1-4-455-455-10-14-5-11-4-13-1-6v-19l4-18 8-16 10-14 8-8 14-10 12-6 14-4z"
            fill="#000"
          />
        </svg>
        <div class="titulo_form">
          <p v-if="variable === 0" class="text_titulo_form">crear</p>
          <p v-else class="text_titulo_form">editar</p>
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Nombre</p>
          <input
            type="text"
            class="inputs"
            v-model="nombre"
          />
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Dirección</p>
          <input
            type="text"
            class="inputs"
            v-model="direccion"
          />
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Teléfono</p>
          <input
            type="text"
            class="inputs"
            v-model="telefono"
          />
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Correo</p>
          <input
            type="text"
            class="inputs"
            v-model="email"
          />
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Municipio</p>
          <input
            type="text"
            class="inputs"
            v-model="municipio"
          />
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Contraseña</p>
          <input
            type="text"
            class="inputs"
            v-model="password"
          />
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Rol</p>
          <select required v-model="rol">
            <option value="" disabled selected hidden></option>
            <option value="1">Administrador</option>
            <option value="2">Usuario 1</option>
            <option value="3">Usuario 2</option>
            <option value="4">Usuario 3</option>
          </select>
        </div>
        <div class="cont_btn_form">
          <button
            v-if="variable === 0"
            class="btn_form"
            @click.prevent="enviarCrear()"
          >
            crear
          </button>
          <button v-else class="btn_form" @click.prevent="enviarEditar()">
            editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAdministradoresStore } from "../../stores/administradores.js";

let useAdministradores = useAdministradoresStore();

let spinner = ref(false);

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
  {
    name: "acciones",
    label: "Acciones",
    align: "center",
    field: "acciones",
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

let activar = async (administrador) => {
  spinner.value = true;
  r = await useAdministradores.putActivar(administrador._id);
  listarTodos();
  spinner.value = false;
};

let desactivar = async (administrador) => {
  if (administrador._id == "66b3a6d67e766caa0bd31da7") {
    alert("No se puede desactivar este administrador");
    return;
  } else {
    spinner.value = true;
    r = await useAdministradores.putDesactivar(administrador._id);
    listarTodos();
    spinner.value = false;
  }
};

let formulario = ref(false);

let cerrarForm = () => {
  formulario.value = false;
  listarTodos();
  vaciarCampos(); 
};

let nombre = ref("");
let direccion = ref("");
let telefono = ref("");
let email = ref("");
let municipio = ref("");
let password = ref("");
let rol = ref("");
let estado = ref(1);

let validaciones = () => {
  if (nombre.value === "" || nombre.value.trim() === "") {
    alert("El nombre es obligatorio");
    return false;
  }
  if (direccion.value === "" || direccion.value.trim() === "") {
    alert("La dirección es obligatoria");
    return false;
  }
  if (telefono.value === "" || telefono.value.trim() === "") {
    alert("El teléfono es obligatorio");
    return false;
  }
  if (email.value === "" || email.value.trim() === "") {
    alert("El email es obligatorio");
    return false;
  }
  if (municipio.value === "" || municipio.value.trim() === "") {
    alert("El municipio es obligatorio");
    return false;
  }
  if (password.value === "" || password.value.trim() === "") {
    alert("La contraseña es obligatoria");
    return false;
  }
  if (rol.value === "" || String(rol.value).trim() === "") {
    alert("El rol es obligatorio");
    return false;
  }
};

let vaciarCampos = () => {
  nombre.value = "";
  direccion.value = "";
  telefono.value = "";
  email.value = "";
  municipio.value = "";
  password.value = "";
  rol.value = "";
};

let variable = ref(null);
let id = ref(null);

let crear = () => {
  variable.value = 0;
  formulario.value = true;
};

let editar = (data) => {
  variable.value = 1;
  id.value = data._id;
  nombre.value = data.nombre;
  direccion.value = data.direccion;
  telefono.value = data.telefono;
  email.value = data.email;
  municipio.value = data.municipio;
  password.value = data.password;
  rol.value = data.rol;
  formulario.value = true;
};

let enviarCrear = async () => {
  if (validaciones() === false) {
    return;
  }
  let data = {
    nombre: nombre.value,
    direccion: direccion.value,
    telefono: telefono.value,
    email: email.value,
    municipio: municipio.value,
    password: password.value,
    rol: rol.value,
    estado: estado.value,
  };
  spinner.value = true;
  await useAdministradores.postAdministradores(data);
  vaciarCampos();
  spinner.value = false;
};

let enviarEditar = async () => {
  if (validaciones() === false) {
    return;
  }
  let data = {
    nombre: nombre.value,
    direccion: direccion.value,
    telefono: telefono.value,
    email: email.value,
    municipio: municipio.value,
    password: password.value,
    rol: rol.value,
    estado: estado.value,
  };
  spinner.value = true;
  await useAdministradores.putAdministradores(id.value, data);
  vaciarCampos();
  spinner.value = false;
};

onMounted(() => {
  listarTodos();
});
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
  z-index: 10000;
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
  --first-block-clr: #2e7d32;
  --second-block-clr: #77DD77;
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

.btn {
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

.btn:hover {
  background-color: #2e7d32;
  box-shadow: 0px 15px 20px #61ca66;
  color: #fff;
  transform: translateY(-7px);
}

.btn:active {
  transform: translateY(-1px);
}

.cont_nombre_vue {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

/* NUEVO */

.cont_form {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.474);
  top: 0;
  left: 0;
}

.form {
  margin-top: 35px;
  width: 28%;
  height: 80%;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.cerrarForm {
  position: absolute;
  z-index: 1000;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.titulo_form {
  margin-top: 20px;
}

.text_titulo_form {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.cont_inputs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Estilo para inputs y select */
.inputs, select {
  width: 75%;
  padding: 10px;
  border: none;
  outline: none;
  background: none;
  border-bottom: 1px solid #000000;
}

.inputs:focus, select:focus {
  border-bottom: 2px solid #2e7d32;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  background-image: url('data:image/svg+xml;utf8,<svg version="1.1" viewBox="0 0 2048 2048" width="80" height="80" xmlns="http://www.w3.org/2000/svg"><path transform="translate(131,440)" d="m0 0h26l15 2 20 6 12 5 17 9 13 10 14 12 774 774 3 1 779-779 11-9 15-11 22-11 25-7 17-2h23l15 2 21 6 12 5 15 8 11 8 11 9 6 5 9 11 9 12 12 23 9 27h1v55h-2l-7 24-11 23-7 10-9 11-11 12-878 878-10 8-11 8-12 7-16 7-21 6-24 3h-12l-20-2-27-8-23-12-14-11-13-11-880-880-9-11-9-12-10-18-5-13-5-18-2-2v-50l3-9 6-19 5-12 9-16 13-16 9-10 10-8 11-8 18-10 19-7 18-4z" fill="%23FFFFFF"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
}

.text_inputs {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  position: absolute;
  top: 5%;
  left: 14%;
}


.cont_btn_form {
  margin: 20px 0;
}

.btn_form {
  padding: 14px 25px;
  border: none;
  border-radius: 25px;
  font-size: 13px;  
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
  background-color: #2e7d32;
  color: #ffffff;
}

.btn_form:hover {
  background-color: #589f5c;
}
</style>