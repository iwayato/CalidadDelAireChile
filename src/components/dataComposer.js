import { 
    Text
} from '@chakra-ui/react'
import { unitSelector } from './unitSelector.js'
import { parameterTextConverter } from './parameterTextConverter.js'

const DataComposer = ({data}) => {

    console.log(data);

    return(
        <div>
            {data.map((sensor, index) => 
                <div key={index}>
                    <Text fontSize='lg'>{parameterTextConverter(sensor.tableRow.parameter)}</Text>
                    <Text fontSize='sm' color='gray.600'>Date : {sensor.tableRow.datetime}</Text>
                    <Text fontSize='sm' color='gray.600'>Status : {sensor.tableRow.status}</Text>
                    <Text fontSize='sm' color='gray.600'>Value : {sensor.tableRow.value} {unitSelector(sensor.tableRow.parameter)}</Text>
                    <br></br>
                </div>
            )}
        </div>
    )
}

export default DataComposer;