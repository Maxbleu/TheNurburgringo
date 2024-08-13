/**
 * This method validate lap time received by parameters.
 * @returns {boolean}
 */
function validarFormatoTiempo(tiempo) {
    return /^\d+:[0-5][0-9]\.\d{3}$/.test(tiempo);
}

/**
 * This method reformart lap time received
 * if it is not validate.
 * @returns {string}
 */
function formatearTiempo(tiempo) {
    let tiempoFormateado = tiempo;
    if (!validarFormatoTiempo(tiempo)) {
        let partes = tiempo.split(':');
        let minutos = partes[0];
        let segundosMilisegundos = partes[1].split('.');
        let segundos = segundosMilisegundos[0];
        let milisegundos = segundosMilisegundos[1];

        let minutosFormateados = parseInt(minutos, 10);
        let segundosFormateados = segundos.padStart(2, '0');
        let milisegundosFormateados = milisegundos.padStart(3, '0');

        tiempoFormateado = `${minutosFormateados}:${segundosFormateados}.${milisegundosFormateados}`;
    }

    return tiempoFormateado;
}

/**
 * This method convert lap time received
 * milliseconds to minutes.
 * @returns {string}
 */
function converterLapTime(tiempo) {

    if(tiempo < 0){
        tiempo = -(tiempo);
    }

    let tiempoVueltaEnSegundos = tiempo / 1000;
    let minutoVuelta = Math.floor(tiempoVueltaEnSegundos / 60);
    let resto = tiempoVueltaEnSegundos % 60;

    let tiempoFormateado = formatearTiempo(`${minutoVuelta}:${resto.toFixed(3)}`);

    return tiempoFormateado;
}

export { converterLapTime };