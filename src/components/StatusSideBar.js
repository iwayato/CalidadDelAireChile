import {
    Box,
    VStack,
    StackDivider,
    Heading,
    Tooltip,
    Text,
} from "@chakra-ui/react";
import { QuestionIcon } from '@chakra-ui/icons'

const StatusSideBar = (props) => {

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

    return(
        <VStack
            margin='15px'
            divider={<StackDivider borderColor='gray.500' />}
            spacing={4}
            align='stretch'>
            <Heading size='md'>
                Estado general de los sensores
                <Tooltip 
                    label = {toolTipText()}>
                    <QuestionIcon 
                        marginLeft='15px' 
                        marginBottom='4px'/>
                </Tooltip>
            </Heading>
            <Box borderRadius='7px' h='40px' bg='mediumseagreen' p={2}>
                Bueno : {good}
            </Box>
            <Box borderRadius='7px' h='40px' bg='gold' p={2}>
                Regular : {regular}
            </Box>
            <Box borderRadius='7px' h='40px' bg='tomato' p={2}>
                Alerta : {alert}
            </Box>
            <Box borderRadius='7px' h='40px' bg='violet' p={2}>
                Pre emergencia : {pre}
            </Box>
            <Box borderRadius='7px' h='40px' bg='darkorchid' p={2}>
                Emergencia : {emer}
            </Box>
            <Box borderRadius='7px' h='40px' bg='gainsboro' p={2}>
                No disponible : {nota}
            </Box>
        </VStack>
    )
}

export default StatusSideBar;