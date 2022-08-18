let miAlturaCM = 163;
let miAlturaM_CM = 1.63;
let miPesoK_G = 59.9;
let miAlturaRedondeadaArriba = Math.round(miAlturaM_CM);
let miPesoRedondeadoAbajo = Math.floor(miPesoK_G);
let maximoValorJS = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log("Mi altura en CM => " + miAlturaCM.toString());
console.log("Mi altura en M con CM => " + miAlturaM_CM.toString());
console.log("Mi peso en Kg con g => " + miPesoK_G.toString());
console.log("Mi altura redondeada hacia arriba => " + miAlturaRedondeadaArriba.toString());
console.log("Mi peso redondeado hacia abajo => " + miPesoRedondeadoAbajo.toString());
console.log("Máximo valor JS + 1 es igual Máximo valor JS => " + maximoValorJS.toString());
