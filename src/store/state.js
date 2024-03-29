let modeloCripto = {
    nombre: "",
    precio: {
        fecha: "",
        valor: null
    },
    precios: {
        dia:[],
        semana:[],
        mes:[]
    },
    simbolo: "",
    color: ''
}

let divisas = ["bitcoin", "cardano", "chainlink", "ethereum", "litecoin", "polkadot", "ripple", "uniswap"];

let modeloDivisas = divisas.reduce((acumulador, divisa) => {
    acumulador[divisa] = JSON.parse(JSON.stringify(modeloCripto));
    return acumulador;
}, {});

export let state = {

    usuario: {
        id_google: '',
        nombre: '',
        resets: 0,
        fecha_registro: '',
        cartera: [],
        transacciones: []
    },

    ranking:[],

    divisas: modeloDivisas,

    conectado: false,
    tema:"claro",
    cargando:false
}