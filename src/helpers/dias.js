let arrayDias = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let diaDeHoy = new Date().getDay()
export const contadorDias = (indice) => {
    if(indice==8) {
        indice=1
    }else if(indice > 6) {
        indice=0
    }
    let suma = diaDeHoy+indice;    
    if(suma > 6 ) {
        suma = 0;
    }
    
    return arrayDias[suma]
}