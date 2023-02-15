import { 
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react'
import { unitSelector } from './unitSelector.js'
import { parameterTextConverter } from './parameterTextConverter.js'

const DataComposer = ({data}) => {

    return(
        <TableContainer>
            <Table size = 'sm' variant='striped' colorScheme='facebook'>
                <Thead>
                    <Tr>
                        <Th>Parámetro</Th>
                        <Th>Fecha</Th>
                        <Th>Estado</Th>
                        <Th>Valor</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((sensor, index) => 
                        <Tr key={index}>
                            <Td fontSize='sm'>{parameterTextConverter(sensor.tableRow.parameter)}</Td>
                            <Td fontSize='sm' color='gray.600'>{sensor.tableRow.datetime}</Td>
                            <Td fontSize='sm' color='gray.600'>{sensor.tableRow.status}</Td>
                            <Td fontSize='sm' color='gray.600'>{sensor.tableRow.value} {unitSelector(sensor.tableRow.parameter)}</Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default DataComposer;