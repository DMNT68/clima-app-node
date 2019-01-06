const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=44feb7b4a726e79a32c2516861b4f053`);

    if (resp.data.cod === 400) {
        throw new Error(`No se encuentran la latitud y la longuitud ingresada`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}