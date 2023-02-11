import Icons from "./Icons";

// realtime es un array de largo variable dependiendo la cantidad de sensores de la estacion
export function iconSelector(realtime) {

    let max = 1

    for (let sensor of realtime) {
        if (sensor.tableRow.statuscode > max) {
            max = sensor.tableRow.statuscode;
        }
    }

    if (max === 1){
        return Icons.bueno
    }
    if (max === 2){
        return Icons.regular
    }
    if (max === 3){
        return Icons.alerta
    }
    if (max === 4){
        return Icons.preemergencia
    }
    if (max === 5){
        return Icons.emergencia
    }
    if (max === 6){
        return Icons.noDisponible
    }
}

export default iconSelector;