type IDMoto = string | number;
type CategoriaMoto = string;
type CoordenadasConcesionaria = [number, number]; 

type DimensionesBase = {
    largo: number; 
    ancho: number; 
}

const motoEstandar: DimensionesBase = { largo: 2050, ancho: 820 };
const idInventario: IDMoto = 42;
const idChasis: IDMoto = "VIN-XYZ001";


type DimensionesCompletas = DimensionesBase & {
    alto: number;
}


interface UsuarioSistema {
    readonly id: number; 
    nombre: string;
    email: string;
    fotoPerfil?: string; 
}


interface EmpleadoTienda extends UsuarioSistema {
    cargo: string;
}


const cliente1: UsuarioSistema = {
    id: 1,
    nombre: "Ana",
    email: "ana.compradora@gmail.com"
};

const cliente2: UsuarioSistema = {
    id: 2,
    nombre: "Luis",
    email: "luis.rutas@gmail.com"
};

console.log(cliente1);
console.log(cliente2);

const asesorVentas: EmpleadoTienda = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@motoscalde.com",
    cargo: "Asesor de ventas a tiempo completo"
};

console.log(asesorVentas);