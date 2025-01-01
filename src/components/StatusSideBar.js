import {
    Box,
    VStack,
    HStack,
    Divider,
    Heading,
    Tooltip,
    Text,
    StatNumber,
    Stat,
    Button,
    SimpleGrid,
    Show
} from "@chakra-ui/react";
import { QuestionIcon } from '@chakra-ui/icons'
import PDFRender from "./PDFRender";
import { CSVLink } from "react-csv";
import { parameterTextConverter } from "./parameterTextConverter";
import { unitSelectorPDF } from "./unitSelectorPDF";

const StatusSideBar = (props) => {

    let good = 0
    let regular = 0
    let alert = 0
    let pre = 0
    let emer = 0
    let nota = 0

    for (let station of props.data) {
        for (let sensor of station.realtime) {
            switch (sensor.tableRow.statuscode) {
                case 1:
                    good = good + 1;
                    break;
                case 2:
                    regular = regular + 1;
                    break;
                case 3:
                    alert = alert + 1;
                    break;
                case 4:
                    pre = pre + 1;
                    break;
                case 5:
                    emer = emer + 1;
                    break;
                case 6:
                    nota = nota + 1;
                    break;
                default:
                    break;
            }
        }
    }

    const toolTipText = () => {
        return(
            <Text align='justify'>
                Indica si los sensores (independientemente del 
                parámetro que midan) registran o no cantidades en
                los rangos adecuados para la salud de las personas.
                Siendo "Bueno" el mejor estado y "Emergencia" el peor.
            </Text>
        )
    }

    const dataCSV = [];
    const date = Date().split(" ");
    const dateStr = date[0] + "_" + date[1] + "_" + date[2] + "_" + date[3];

    dataCSV.push(["Estación", "Parámetro", "Fecha", "Estado", "Valor", "Unidad"]);

    for (let station of props.data) {
        for (let sensor of station.realtime) {
            const row = [
                station.nombre, 
                parameterTextConverter(sensor.tableRow.parameter), 
                sensor.tableRow.datetime, 
                sensor.tableRow.status, 
                sensor.tableRow.value,
                unitSelectorPDF(sensor.tableRow.parameter)
            ];
            dataCSV.push(row);
        }
    }

    return(
        <Show breakpoint='(min-width: 800px)'>
            <VStack
                margin='15px'
                spacing={4}
                align='stretch'
            >
                <Heading size='md'>
                    Estado general de los sensores
                    <Tooltip 
                        label = {toolTipText()}>
                        <QuestionIcon 
                            marginLeft='15px' 
                            marginBottom='4px'/>
                    </Tooltip>
                </Heading>
                <HStack borderRadius='7px' bg='mediumseagreen'>
                    <Box h='40px' w='80%' p={2}>
                        Bueno
                    </Box>
                    <Box h='40px' w='20%'>
                        <Stat>
                            <StatNumber>
                                {good}
                            </StatNumber>
                        </Stat>
                    </Box>
                </HStack>
                <HStack borderRadius='7px' bg='gold'>
                    <Box h='40px' w='80%' p={2}>
                        Regular
                    </Box>
                    <Box h='40px' w='20%'>
                        <Stat>
                            <StatNumber>
                                {regular}
                            </StatNumber>
                        </Stat>
                    </Box>
                </HStack>
                <HStack borderRadius='7px' bg='tomato'>
                    <Box h='40px' w='80%' p={2}>
                        Alerta
                    </Box>
                    <Box h='40px' w='20%'>
                        <Stat>
                            <StatNumber>
                                {alert}
                            </StatNumber>
                        </Stat>
                    </Box>
                </HStack>
                <HStack borderRadius='7px' bg='violet' >
                    <Box h='40px' w='80%' p={2}>
                        Pre emergencia
                    </Box>
                    <Box h='40px' w='20%'>
                        <Stat>
                            <StatNumber>
                                {pre}
                            </StatNumber>
                        </Stat>
                    </Box>
                </HStack>
                <HStack borderRadius='7px' bg='darkorchid'>
                    <Box h='40px' w='80%' p={2}>
                        Emergencia
                    </Box>
                    <Box h='40px' w='20%'>
                        <Stat>
                            <StatNumber>
                                {emer}
                            </StatNumber>
                        </Stat>
                    </Box>
                </HStack>
                <HStack borderRadius='7px' bg='gray'>
                    <Box h='40px' w='80%' p={2}>
                        No disponible
                    </Box>
                    <Box h='40px' w='20%'>
                        <Stat>
                            <StatNumber>
                                {nota}
                            </StatNumber>
                        </Stat>
                    </Box>
                </HStack>
                <Divider></Divider>
                <Heading size='md'>Descargar información</Heading>
                <SimpleGrid
                    columns={2}
                    spacing={3}>
                    <Button
                        colorScheme='blue'
                        onClick={() => PDFRender(props)}>
                        PDF
                    </Button>
                    <CSVLink
                        data = {dataCSV}
                        filename = {`report_${dateStr}.csv`}>
                        <Button width='100%' colorScheme='green'>CSV</Button>
                    </CSVLink>
                </SimpleGrid>
            </VStack>
        </Show>
    )
}

export default StatusSideBar;