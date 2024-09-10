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
      <p class="nombre_vue">facturas</p>
    </div>
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name">
        <template v-slot:body-cell-detalle="props">
          <q-td :props="props">
            <q-btn
              @click="verDetalles(props.row)"
              color="secondary"
              label="ver"
              :id="props.row.id"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-estado="props">
          <q-td :props="props">
            <q-chip
              :label="props.row.estado == 0 ? 'Inactivo' : 'Activo'"
              :color="props.row.estado == 0 ? 'negative' : 'positive'"
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
    <div class="cont_detalles" v-if="detalles">
      <div class="sub_cont_detalles">
        <svg
          class="cerrarDetalle"
          @click="cerrarDetalles()"
          version="1.1"
          viewBox="0 0 2048 2048"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(503,426)"
            d="m0 0h18l15 3 12 5 13 8 13 11 449 449 4-2 453-453 14-10 12-6 14-4 7-1h18l15 3 12 5 13 8 13 11 8 10 8 13 5 13 3 15v15l-3 16-7 16-7 11-8 10h-2l-2 4-352 352h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-28 28h-2l-2 4-6 5-6 7-4 4h-2l-2 4-8 8h-2l-2 4-4 2v2h-2v2h-2l3 5 449 449 11 14 6 10 5 13 3 15v14l-3 16-5 13-8 14-9 11h-2l-1 3-13 10-16 8-16 4-7 1h-13l-13-2-10-3-12-6-11-8-457-457-4 1-8 7-5 6-7 6-5 6-7 6-5 6-7 6-5 6-7 6-5 6-6 5-6 7-6 5-6 7-6 5-6 7-6 5-6 7h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-272 272h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4h-2l-2 4-12 12h-2l-2 4h-2l-1 3-13 10-16 8-16 4-7 1h-13l-13-2-15-5-13-8-12-11-10-11-8-13-6-16-2-11v-18l3-14 5-13 7-12 11-13 450-450-1-4-455-455-10-14-5-11-4-13-1-6v-19l4-18 8-16 10-14 8-8 14-10 12-6 14-4z"
            fill="#fff"
          />
        </svg>
        <div class="cont_titulo_detalles">
          <p class="text_detalle">detalles</p>
        </div>
        <div class="cont_inventario">
          <p class="text_inventario">inventario:</p>
          <p class="inventario">{{ inventario }}</p>
        </div>
        <div class="cont_cantidad">
          <p class="text_cantidad">cantidad:</p>
          <p class="cantidad">{{ cantidad }}</p>
        </div>
        <div class="cont_nombreProducto">
          <p class="text_nombreProducto">producto:</p>
          <p class="nombreProducto">{{ nombreProducto }}</p>
        </div>
        <div class="cont_subTotal">
          <p class="text_subTotal">subTotal:</p>
          <p class="subTotal">{{ subTotal }}</p>
        </div>
        <div class="cont_iva">
          <p class="text_iva">iva:</p>
          <p class="iva">{{ iva }}</p>
        </div>
        <div class="cont_total">
          <p class="text_total">total:</p>
          <p class="total">{{ total }}</p>
        </div>
      </div>
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
            fill="#fff"
          />
        </svg>
        <div class="titulo_form">
          <p v-if="variable === 0" class="text_titulo_form">crear</p>
          <p v-else class="text_titulo_form">editar</p>
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">fecha</p>
          <input type="date" class="inputs" v-model="fecha">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">valor</p>
          <input type="number" class="inputs" v-model="valor">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">Inventario</p>
          <select required v-model="inventarioOption">
            <option value="" disabled selected hidden></option>
            <option
            v-for="(inventario, index) in inventarios"
            :key="inventario._id"
            :value="index + 1"
            >{{ inventario.tipo }}</option>
          </select>
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">cantidad</p>
          <input type="number" class="inputs" v-model="cantidad">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">producto</p>
          <input type="text" class="inputs" v-model="nombreProducto">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">subTotal</p>
          <input type="number" class="inputs" v-model="subTotal">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">iva</p>
          <input type="number" class="inputs" v-model="iva">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">total</p>
          <input type="number" class="inputs" v-model="total">
        </div>
        <div class="cont_inputs">
          <p class="text_inputs">comprador</p>
          <select required v-model="compradorOption">
            <option value="" disabled selected hidden></option>
            <option
            v-for="(comprador, index) in compradores"
            :key="comprador._id"
            :value="index + 1"
            >{{ comprador.nombre }}</option>
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
import { onMounted, ref } from "vue";
import { useFacturasStore } from "../../stores/facturas.js";
import { useCompradores } from "../../stores/compradores.js";
import { useInventarioStore } from "../../stores/inventario.js";

let useFacturas = useFacturasStore();
let useComprador = useCompradores();
let useInventario = useInventarioStore();

let spinner = ref(false);

let r = null;
let c = ref([]);
let i = ref([]);

let rows = ref([]);
let columns = ref([
  {
    name: "fecha",
    label: "Fecha",
    align: "center",
    field: (row) => row.fecha.split("T")[0],
  },
  {
    name: "valor",
    label: "Valor",
    align: "center",
    field: "valor",
  },
  {
    name: "detalle",
    label: "Detalles",
    align: "center",
    field: "detalle",
  },
  {
    name: "id_comprador",
    label: "Comprador",
    align: "center",
    field: (row) => {
      let comprador = c.value.compradores;
      comprador = comprador.find((c) => c._id == row.id_comprador);
      return comprador.nombre;
    },
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
  r = await useFacturas.getFacturas();
  c.value = await useComprador.getCompradores();
  rows.value = r.factura;
  spinner.value = false;
};

let listarActivos = async () => {
  spinner.value = true;
  r = await useFacturas.getActivos();
  rows.value = r.factura;
  spinner.value = false;
};

let listarInactivos = async () => {
  spinner.value = true;
  r = await useFacturas.getInactivos();
  rows.value = r.factura;
  spinner.value = false;
};

let activar = async (row) => {
  spinner.value = true;
  r = await useFacturas.putActivar(row._id);
  listarTodos();
  spinner.value = false;
};

let desactivar = async (row) => {
  spinner.value = true;
  r = await useFacturas.putDesactivar(row._id);
  listarTodos();
  spinner.value = false;
};

let inventario = ref("");
let cantidad = ref("");
let nombreProducto = ref("");
let subTotal = ref("");
let iva = ref("");
let total = ref("");

let detalles = ref(false);

let verDetalles = async (row) => {
  spinner.value = true;
  let id = row.detalle[0].id_inventario;
  let inventarioPeticion = await useInventario.getInventariosId(id);
  inventario.value = inventarioPeticion.tipo;
  cantidad.value = row.detalle[0].cantidad;
  nombreProducto.value = row.detalle[0].nombreProducto;
  subTotal.value = row.detalle[0].subTotal;
  iva.value = row.detalle[0].iva;
  total.value = row.detalle[0].total;
  detalles.value = true;
  spinner.value = false;
};

let cerrarDetalles = () => {
  detalles.value = false;
};

let formulario = ref(false);

let cerrarForm = () => {
  formulario.value = false;
  listarTodos();
  vaciarCampos();
};

let fecha = ref("");
let valor = ref("");
let inventarioOption = ref("");
let compradorOption = ref("");
let estado = ref(1);

let validaciones = () => {
  if(fecha.value === "") {
    alert("La fecha es obligatoria");
    return false;
  }
  if(valor.value === "" || String(valor.value).trim() === "") {
    alert("El valor es obligatorio");
    return false;
  }
  if(cantidad.value === "" || String(cantidad.value).trim() === "") {
    alert("La cantidad es obligatoria");
    return false;
  }
  if(nombreProducto.value === "" || nombreProducto.value.trim() === "") {
    alert("El nombre del producto es obligatorio");
    return false;
  }
  if(subTotal.value === "" || String(subTotal.value).trim() === "") {
    alert("El subTotal es obligatorio");
    return false;
  }
  if(iva.value === "" || String(iva.value).trim() === "") {
    alert("El iva es obligatorio");
    return false;
  }
  if(total.value === "" || String(total.value).trim() === "") {
    alert("El total es obligatorio");
    return false;
  }
  if(inventarioOption.value === "") {
    alert("El inventario es obligatorio");
    return false;
  }
  if(compradorOption.value === "") {
    alert("El comprador es obligatorio");
    return false;
  }
};

let vaciarCampos = () => {
  fecha.value = "";
  valor.value = "";
  inventarioOption.value = "";
  cantidad.value = "";
  nombreProducto.value = "";
  subTotal.value = "";
  iva.value = "";
  total.value = "";
  compradorOption.value = "";
};

let inventarios = ref([]);
let compradores = ref([]);

let variable = ref(null)
let id = ref(null)

let crear = async () => {
  spinner.value = true;
  await useInventario.getInventarios();
  await useComprador.getCompradores();
  inventarios.value = useInventario.inventario.inventarios;
  compradores.value = useComprador.compradores.compradores;
  vaciarCampos();
  variable.value = 0;
  formulario.value = true;
  spinner.value = false;
}

let editar = async (data) => {
  spinner.value = true;
  await useInventario.getInventarios();
  await useComprador.getCompradores();
  inventarios.value = useInventario.inventario.inventarios;
  compradores.value = useComprador.compradores.compradores;
  variable.value = 1;
  id.value = data._id;
  fecha.value = data.fecha.split("T")[0];
  valor.value = data.valor;
  inventarioOption.value = inventarios.value.findIndex((i) => i._id === data.detalle[0].id_inventario) + 1;
  cantidad.value = data.detalle[0].cantidad;
  nombreProducto.value = data.detalle[0].nombreProducto;
  subTotal.value = data.detalle[0].subTotal;
  iva.value = data.detalle[0].iva;
  total.value = data.detalle[0].total;
  compradorOption.value = compradores.value.findIndex((c) => c._id === data.id_comprador) + 1;
  formulario.value = true;
  spinner.value = false;
}

let enviarCrear = async () => {
  if (validaciones() === false) {
    return;
  }
  let data = {
    fecha: fecha.value,
    valor: valor.value,
    detalle: [
      {
        id_inventario: inventarios.value[inventarioOption.value - 1]._id,
        cantidad: cantidad.value,
        nombreProducto: nombreProducto.value,
        subTotal: subTotal.value,
        iva: iva.value,
        total: total.value,
      },
    ],
    id_comprador: compradores.value[compradorOption.value - 1]._id,
    estado: estado.value,
  };
  spinner.value = true;
  await useFacturas.postFacturas(data);
  vaciarCampos();
  spinner.value = false;
}

let enviarEditar = async () => {
  if (validaciones() === false) {
    return;
  }
  let data = {
    fecha: fecha.value,
    valor: valor.value,
    detalle: [
      {
        id_inventario: inventarios.value[inventarioOption.value - 1]._id,
        cantidad: cantidad.value,
        nombreProducto: nombreProducto.value,
        subTotal: subTotal.value,
        iva: iva.value,
        total: total.value,
      },
    ],
    id_comprador: compradores.value[compradorOption.value - 1]._id,
    estado: estado.value,
  };
  spinner.value = true;
  await useFacturas.putFacturas(id.value, data);
  vaciarCampos();
  spinner.value = false;
}

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
  background-color: #e9b27c;
  box-shadow: 0px 15px 20px #eed37a;
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

.cont_detalles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.474);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sub_cont_detalles {
  width: 26%;
  height: 40%;
  background: #e9b27c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.cerrarDetalle {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.cont_titulo_detalles {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
}

.cont_inventario,
.cont_cantidad,
.cont_nombreProducto,
.cont_subTotal,
.cont_iva,
.cont_total {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18%;
}

.cont_inventario {
  border-top: 2px solid #ffffff;
  padding-top: 5px;
}

.text_detalle {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.text_inventario,
.text_cantidad,
.text_nombreProducto,
.text_subTotal,
.text_iva,
.text_total {
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 40px;
}

.inventario,
.cantidad,
.nombreProducto,
.subTotal,
.iva,
.total {
  font-size: 18px;
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 5px;
}

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
  background: #e9b27c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 10px;
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
.inputs,
select {
  width: 75%;
  padding: 10px;
  border: none;
  outline: none;
  background: none;
  border-bottom: 2px solid #f4f4f4;
  transition: border-color 0.5s ease;
}

.inputs:focus,
select:focus {
  border-bottom-color: #000000;
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
  margin: 16px 0;
}

.btn_form {
  padding: 14px 25px;
  border: none;
  border-radius: 25px;
  font-size: 13px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px #0000001a;
  transition: all 0.3s ease;
  background-color: #f6e4ab;
}

.btn_form:hover {
  background-color: #eed37a;
}
</style>