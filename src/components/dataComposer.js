import { faker } from '@faker-js/faker';

export function dataComposer(stationSensors) {

    let dataSets = [];
    let labels = [];

    for (let point of stationSensors[0].info.rows) {
        labels.push(point.c[0].v)
    }

    for (let sensor of stationSensors) {
        // Se crea un dataset por sensor en la estacion
        let dataSet = {}
        let data = []
        // Se le añaden al dataset atributos básicos
        dataSet.label = sensor.name
        dataSet.borderColor = faker.color.rgb()
        dataSet.backgroundColor = 'white'
        dataSet.tension = 0.2
        // Se añaden los datos necesarios al dataset
        for (let point of sensor.info.rows) {
            data.push(point.c[1].v)
        }
        dataSet.data = data
        dataSets.push(dataSet)
    }

    return [dataSets, labels]
}

export default dataComposer;