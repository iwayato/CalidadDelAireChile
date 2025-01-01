import Icons from "../components/Icons";

// realtime es un array de largo variable dependiendo la cantidad de sensores de la estacion
export function iconSelector(realtime) {

    let max = 1

    for (let sensor of realtime) {
        if (sensor.tableRow.statuscode > max) {
            max = sensor.tableRow.statuscode;
        }
    }

    switch (max) {
        case 1:
            return Icons.bueno
        case 2:
            return Icons.regular
        case 3:
            return Icons.alerta
        case 4:
            return Icons.preemergencia
        case 5:
            return Icons.emergencia
        case 6:
            return Icons.noDisponible
        default:
            return Icons.noDisponible
    }
}

export default iconSelector;