import { 
    Text,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import { unitSelector } from './unitSelector.js'
import { parameterTextConverter } from './parameterTextConverter.js'

const DataComposer = ({data}) => {

    return(
        <Grid
            templateColumns = 'repeat(3, 1fr)' 
            templateRows = 'repeat(2, 1fr)'
            gap={6}>
            {data.map((sensor, index) => 
                <GridItem key={index}>
                    <Text fontSize='lg'>{parameterTextConverter(sensor.tableRow.parameter)}</Text>
                    <Text fontSize='sm' color='gray.600'>Date : {sensor.tableRow.datetime}</Text>
                    <Text fontSize='sm' color='gray.600'>Status : {sensor.tableRow.status}</Text>
                    <Text fontSize='sm' color='gray.600'>Value : {sensor.tableRow.value} {unitSelector(sensor.tableRow.parameter)}</Text>
                    <br></br>
                </GridItem>
            )}
        </Grid>
    )
}

export default DataComposer;