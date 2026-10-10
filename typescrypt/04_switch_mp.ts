type MarcaMoto =
  | "Yamaha"
  | "Honda"
  | "Kawasaki"
  | "Suzuki"
  | "Ducati"
  | "BMW";

let marcaSeleccionada: MarcaMoto = "Yamaha";
let cilindrada: number = 600;
let tieneABS: boolean = true;

switch (marcaSeleccionada) {
    case 'Yamaha':
        console.log("Yamaha destaca por sus motos deportivas y de calle (Líneas MT y R).");
        if (cilindrada > 500 && tieneABS) {
            console.log("Es una Yamaha de alta cilindrada y cuenta con frenos seguros.");
        } else {
            console.log("Es una Yamaha urbana, ideal para el tráfico diario.");
        }
        break;
    case 'Honda':
        console.log("Honda es reconocida por su extrema confiabilidad y durabilidad.");
        if (cilindrada > 400 && tieneABS) {
            console.log("Es una Honda potente, excelente para viajes largos en carretera.");
        } else {
            console.log("Es una Honda utilitaria, perfecta para trabajo o movilidad básica.");
        }
        break;
    case 'Kawasaki':
        console.log("Kawasaki es famosa por el diseño agresivo y la velocidad de sus modelos.");
        if (cilindrada > 800 && tieneABS) {
            console.log("Es una Kawasaki categoría Superbike, de rendimiento extremo.");
        } else {
            console.log("Es una Kawasaki de media cilindrada, ideal para pilotos en progresión.");
        }
        break;
    case 'Ducati':
        console.log("Ducati es una marca premium enfocada en el diseño italiano y competición.");
        break;
    case 'BMW':
        console.log("BMW es líder en el segmento de motocicletas de aventura (GS) y turismo.");
        break;
    case 'Suzuki':
        console.log("Suzuki ofrece motocicletas con un excelente equilibrio entre calidad y precio.");
        break;
    default:
        console.log("Marca de motocicleta desconocida en el sistema de inventario.");
}