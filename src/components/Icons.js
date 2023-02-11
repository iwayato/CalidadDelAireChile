import L from 'leaflet';

const bueno = new L.Icon({
    iconUrl: require("../assets/bueno.svg").default,
    iconSize: new L.Point(50, 50)
});

const regular = new L.Icon({
    iconUrl: require("../assets/regular.svg").default,
    iconSize: new L.Point(50, 50)
});

const alerta = new L.Icon({
    iconUrl: require("../assets/alerta.svg").default,
    iconSize: new L.Point(50, 50)
});

const preemergencia = new L.Icon({
    iconUrl: require("../assets/preemergencia.svg").default,
    iconSize: new L.Point(50, 50)
});

const emergencia = new L.Icon({
    iconUrl: require("../assets/emergencia.svg").default,
    iconSize: new L.Point(50, 50)
});

const noDisponible = new L.Icon({
    iconUrl: require("../assets/no_disponible.svg").default,
    iconSize: new L.Point(50, 50)
});

const Icons = {
    bueno,
    regular,
    alerta,
    preemergencia,
    emergencia,
    noDisponible
}

export default Icons;