<template>
  <div class="app">
    <div class="menu">
      <div class="cont_menu" @click="menu()" v-if="desplegable">
        <input id="checkbox" type="checkbox" v-model="isChecked" />
        <label class="toggle" for="checkbox">
          <div id="bar1" class="bars"></div>
          <div id="bar2" class="bars"></div>
          <div id="bar3" class="bars"></div>
        </label>
      </div>
      <div class="cont_perfil" @click="perfil()">
        <input id="checkbox2" type="checkbox" v-model="isChecked2">
        <svg
          for="checkbox2"
          version="1.1"
          viewBox="0 0 2048 2048"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(897,1199)"
            d="m0 0h251l35 1 42 3 32 4 35 6 28 6 32 8 38 12 28 10 32 13 28 13 32 16 24 14 17 10 30 20 18 13 16 12 14 11 13 11 11 9 16 15 8 7 35 35 7 8 11 12 9 11 11 13 13 17 10 13 14 20 12 18 13 21 10 17 13 24 9 17 13 28 13 31 11 30 11 34 10 37 8 36 7 43 4 34 2 23 1 19v43l-4 14-6 11-8 10-13 9-11 5-6 2h-1706l-15-7-10-7-9-9-8-13-4-13-1-10 1-45 4-46 5-36 6-34 9-38 9-32 12-37 17-43 13-29 15-30 13-23 8-14 15-24 13-19 12-17 16-21 11-14 9-10 8-10 3-4h2l2-4 9-9 7-8 6-7h2l2-4h2l2-4h2v-2l8-7 14-14 8-7 10-9 11-9 17-14 13-10 19-14 16-11 17-11 21-13 21-12 23-12 15-8 29-13 27-11 28-10 31-10 38-10 32-7 36-6 44-5 31-2z"
            fill="#FEFEFE"
          />
          <path
            transform="translate(976)"
            d="m0 0h103v1l50 8 31 7 28 8 31 11 28 12 29 14 23 13 19 12 19 13 19 14 13 11 11 9 16 15 5 5 7 6 7 8 10 10 9 11 9 10 13 17 14 19 11 17 9 15 12 21 14 28 14 34 12 35 9 34 7 36 5 41 1 16v58l-2 26-4 30-4 23-8 34-11 35-9 24-9 21-15 31-13 23-12 19-13 19-12 16-13 16-9 11-6 7h-2l-2 4-30 30h-2v2l-11 9-11 10-16 12-19 14-17 11-20 12-18 10-19 10-32 14-28 10-25 8-28 7-31 6-29 4-21 2-17 1h-46l-30-2-36-5-31-6-34-9-33-11-27-11-30-14-24-13-18-11-24-16-16-12-14-11-13-11-12-11-8-7-20-20v-2h-2l-7-8-9-10-9-11-8-10-13-18-12-17-12-20-12-21-14-28-12-28-13-37-9-33-7-34-5-36-2-23-1-21v-26l2-35 3-27 7-39 9-36 12-36 11-28 13-28 10-19 16-27 8-12 12-17 12-16 13-16 9-10 7-8 5-6h2l2-4 12-12h2v-2l8-7 13-12 11-9 16-13 17-12 15-10 19-12 23-13 24-12 28-12 27-10 33-10 35-8 36-6z"
            fill="#FEFEFE"
          />
        </svg>
      </div>
      <p class="text_agro">AgroTeam</p>
    </div>
    <div class="cont" v-if="Menu">
      <div class="cards" @click="adiministradores()">
        <p class="text_card">Administradores</p>
      </div>
      <div class="cards" @click="analisisSuelos()">
        <p class="text_card">Analisis de Suelos</p>
      </div>
      <div class="cards" @click="climas()">
        <p class="text_card">Climas</p>
      </div>
      <div class="cards" @click="compradores()">
        <p class="text_card">Compradores</p>
      </div>
      <div class="cards" @click="controlPlagas()">
        <p class="text_card">Control Plagas</p>
      </div>
      <div class="cards" @click="cultivos()">
        <p class="text_card">Cultivos</p>
      </div>
      <div class="cards" @click="elaboracionSustratos()">
        <p class="text_card">Elaboración Sustratos</p>
      </div>
      <div class="cards" @click="empleados()">
        <p class="text_card">Empleados</p>
      </div>
      <div class="cards" @click="facturas()">
        <p class="text_card">Facturas</p>
      </div>
      <div class="cards" @click="fertilizaciones()">
        <p class="text_card">Fertilizaciones</p>
      </div>
      <div class="cards" @click="fincas()">
        <p class="text_card">Fincas</p>
      </div>
      <div class="cards" @click="gastos()">
        <p class="text_card">Gastos</p>
      </div>
      <div class="cards" @click="insumos()">
        <p class="text_card">Insumos</p>
      </div>
      <div class="cards" @click="inventarios()">
        <p class="text_card">Inventarios</p>
      </div>
      <div class="cards" @click="mantenimientos()">
        <p class="text_card">Mantenimientos</p>
      </div>
      <div class="cards" @click="maquinariasHerramientas()">
        <p class="text_card">Maquinaria y herramientas</p>
      </div>
      <div class="cards" @click="nominas()">
        <p class="text_card">Nominas</p>
      </div>
      <div class="cards" @click="parcelas()">
        <p class="text_card">Parcelas</p>
      </div>
      <div class="cards" @click="preparacionSuelos()">
        <p class="text_card">Preparación Suelos</p>
      </div>
      <div class="cards" @click="procesos()">
        <p class="text_card">Procesos</p>
      </div>
      <div class="cards" @click="producciones()">
        <p class="text_card">Producciones</p>
      </div>
      <div class="cards" @click="proveedores()">
        <p class="text_card">Proveedores</p>
      </div>
      <div class="cards" @click="riegos()">
        <p class="text_card">Riegos</p>
      </div>
      <div class="cards" @click="semillas()">
        <p class="text_card">Semillas</p>
      </div>
      <div class="cards" @click="siembras()">
        <p class="text_card">Siembras</p>
      </div>
    </div>
    <router-view />
    <div
      class="cont_menu_lateral"
      :class="{ cont_menu2: true, 'menu2-open': menuOpen }"
    >
      <div>
        <button class="btn" @click="administrador()">Administradores</button>
        <button class="btn" @click="analisisSuelo()">Analisis de Suelos</button>
        <button class="btn" @click="clima()">Climas</button>
        <button class="btn" @click="comprador()">Compradores</button>
        <button class="btn" @click="controlPlaga()">Control Plagas</button>
      </div>
      <div>
        <button class="btn" @click="cultivo()">Cultivos</button>
        <button class="btn" @click="elaboracionSustrato()">Elaboración Sustratos</button>
        <button class="btn" @click="empleado()">Empleados</button>
        <button class="btn" @click="factura()">Facturas</button>
        <button class="btn" @click="fertilizacion()">Fertilizaciones</button>
      </div>
      <div>
        <button class="btn" @click="finca()">Fincas</button>
        <button class="btn" @click="gasto()">Gastos</button>
        <button class="btn" @click="insumo()">Insumos</button>
        <button class="btn" @click="inventario()">Inventarios</button>
        <button class="btn" @click="mantenimiento()">Mantenimientos</button>
      </div>
      <div>
        <button class="btn" @click="maquinariaHerramienta()">Maquinaria y Herramientas</button>
        <button class="btn" @click="nomina()">Nominas</button>
        <button class="btn" @click="parcela()">Parcelas</button>
        <button class="btn" @click="preparacionSuelo()">Preparación Suelos</button>
        <button class="btn" @click="proceso()">Procesos</button>
      </div>
      <div>
        <button class="btn" @click="produccion()">Producciones</button>
        <button class="btn" @click="proveedor()">Proveedores</button>
        <button class="btn" @click="riego()">Riegos</button>
        <button class="btn" @click="semilla()">Semillas</button>
        <button class="btn" @click="siembra()">Siembras</button>
      </div>
    </div>
    <div class="cont_perfil_desplegable" :class="{ cont_perfil2: true, 'perfil2-open': perfilOpen }">
      <div class="cont_nombre">
        <p class="text_nombre">Jesus</p>
      </div>
      <div class="cont_rol">
        <p class="text_rol">Administrador</p>
      </div>
      <div class="cont_salir">
        <button class="btn_salir" @click="cerrarSesion()">Cerrar Sesion</button>
      </div>
    </div>
    <div class="footer">
      <p class="text_footer">©2024 AgroTeam</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { router } from "../../routes/routes";

let menuOpen = ref(false);
let isChecked = ref(false);
let perfilOpen = ref(false);
let isChecked2 = ref(false);

const menu = () => {
  menuOpen.value = !menuOpen.value;
};

const perfil = () => {
  perfilOpen.value = !perfilOpen.value;
};

let Menu = ref(true);
let desplegable = ref(false);

let adiministradores = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/administradores");
};

let administrador = () => {
  menu()
  isChecked.value = false;
  router.push("/administradores");
};

let analisisSuelos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/analisisSuelos");
};

let analisisSuelo = () => {
  menu()
  isChecked.value = false;
  router.push("/analisisSuelos");
};

let climas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/climas");
};

let clima = () => {
  menu()
  isChecked.value = false;
  router.push("/climas");
};

let compradores = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/compradores");
};

let comprador = () => {
  menu()
  isChecked.value = false;
  router.push("/compradores");
};

let controlPlagas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/controlPlagas");
};

let controlPlaga = () => {
  menu()
  isChecked.value = false;
  router.push("/controlPlagas");
};

let cultivos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/cultivos");
};

let cultivo = () => {
  menu()
  isChecked.value = false;
  router.push("/cultivos");
};

let elaboracionSustratos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/elaboracionSustratos");
};

let elaboracionSustrato = () => {
  menu()
  isChecked.value = false;
  router.push("/elaboracionSustratos");
};

let empleados = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/empleados");
};

let empleado = () => {
  menu()
  isChecked.value = false;
  router.push("/empleados");
};

let facturas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/facturas");
};

let factura = () => {
  menu()
  isChecked.value = false;
  router.push("/facturas");
};

let fertilizaciones = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/fertilizaciones");
};

let fertilizacion = () => {
  menu()
  isChecked.value = false;
  router.push("/fertilizaciones");
};

let fincas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/fincas");
};

let finca = () => {
  menu()
  isChecked.value = false;
  router.push("/fincas");
};

let gastos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/gastos");
};

let gasto = () => {
  menu()
  isChecked.value = false;
  router.push("/gastos");
};

let insumos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/insumos");
};

let insumo = () => {
  menu()
  isChecked.value = false;
  router.push("/insumos");
};

let inventarios = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/inventarios");
};

let inventario = () => {
  menu()
  isChecked.value = false;
  router.push("/inventarios");
};

let mantenimientos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/mantenimientos");
};

let mantenimiento = () => {
  menu()
  isChecked.value = false;
  router.push("/mantenimientos");
};

let maquinariasHerramientas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/maquinariaHerramientas");
};

let maquinariaHerramienta = () => {
  menu()
  isChecked.value = false;
  router.push("/maquinariaHerramientas");
};

let nominas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/nominas");
};

let nomina = () => {
  menu()
  isChecked.value = false;
  router.push("/nominas");
};

let parcelas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/parcelas");
};

let parcela = () => {
  menu()
  isChecked.value = false;
  router.push("/parcelas");
};

let preparacionSuelos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/preparcionSuelos");
};

let preparacionSuelo = () => {
  menu()
  isChecked.value = false;
  router.push("/preparcionSuelos");
};

let procesos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/procesos");
};

let proceso = () => {
  menu()
  isChecked.value = false;
  router.push("/procesos");
};

let producciones = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/producciones");
};

let produccion = () => {
  menu()
  isChecked.value = false;
  router.push("/producciones");
};

let proveedores = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/proveedores");
};

let proveedor = () => {
  menu()
  isChecked.value = false;
  router.push("/proveedores");
};

let riegos = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/riegos");
};

let riego = () => {
  menu()
  isChecked.value = false;
  router.push("/riegos");
};

let semillas = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/semillas");
};

let semilla = () => {
  menu()
  isChecked.value = false;
  router.push("/semillas");
};

let siembras = () => {
  Menu.value = false;
  desplegable.value = true;
  router.push("/siembras");
};

let siembra = () => {
  menu()
  isChecked.value = false;
  router.push("/siembras");
};

let cerrarSesion = () => {
  localStorage.removeItem("login");
  router.push("/");
};
</script>
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  background-color: #e9b27c;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
}

.cont_menu {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
}

.text_agro {
  font-size: 30px;
  color: white;
}

#checkbox {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  appearance: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: #ffffff;
  border-radius: 4px;
}

#bar2 {
  transition-duration: 0.8s;
}

#bar1 {
  width: 50%;
}

#bar2 {
  width: 75%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: 0.1s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}

.cont {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 20px 5%;
  margin-top: 90px;
  margin-bottom: 60px;
}

.cards {
  background-color: #f2f2f2;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.cards:hover {
  cursor: pointer;
  border: 1px solid #ff9900e5;
  transform: scale(1.1);
}

.text_card {
  font-size: 30px;
  color: #c58423e5;
  position: absolute;
  width: 100%;
  text-align: center;
  white-space: normal;
}

.cont_menu_lateral {
  width: 100%;
  background-color: #e9b27c;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.cont_menu2 {
  position: fixed;
  top: 90px;
  clip-path: inset(0 0 100% 0);
  left: 0;
  transition: all 0.3s ease-in-out;
}

.menu2-open {
  clip-path: inset(0 0 0 0);
  transition: all 0.3s ease-in-out;
}

.cont_menu_lateral div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  background-color: #f6e4ab;
  color: #696969;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  margin: 10px 0;
  width: 90%;
  border-radius: 12px;
}

.btn:hover {
  background-color: #eed37a;
  color: white;
}

.cont_perfil {
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  border-radius: 50%;
}

.cont_perfil_desplegable {
  width: 15%;
  height: auto;
  padding: 8px 0;
  border-radius: 10px;
  position: fixed;
  top: 98px;
  right: 1%;
  background-color: #e9b27c;
  clip-path: circle(0% at 100% 0);
}

#checkbox2 {
  display: none;
}

.cont_perfil2 {
  clip-path: circle(0% at 100% 0);
  transition: all 0.4s ease-in-out;
}

.perfil2-open {
  clip-path: circle(141.2% at 100% 0);
}

.cont_nombre, .cont_rol {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
}

.cont_salir{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.text_nombre {
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
}

.text_rol {
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
}

.btn_salir {
  background-color: #2b90c8;
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 12px;
}

.footer {
  background-color: #e9b27c;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
}

.text_footer {
  font-size: 20px;
  color: white;
}
</style>