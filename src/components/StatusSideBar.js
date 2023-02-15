import {
    Box,
    VStack,
    StackDivider,
    Heading,
} from "@chakra-ui/react";

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

    return(
        <VStack
            margin='15px'
            divider={<StackDivider borderColor='gray.500' />}
            spacing={4}
            align='stretch'>
            <Heading size='md'>
                Estado general
            </Heading>
            <Box borderRadius='7px' h='40px' bg='green.200' p={2}>
                Bueno : {good}
            </Box>
            <Box borderRadius='7px' h='40px' bg='yellow.200' p={2}>
                Regular : {regular}
            </Box>
            <Box borderRadius='7px' h='40px' bg='red.200' p={2}>
                Alerta : {alert}
            </Box>
            <Box borderRadius='7px' h='40px' bg='purple.200' p={2}>
                Pre emergencia : {pre}
            </Box>
            <Box borderRadius='7px' h='40px' bg='purple.500' p={2}>
                Emergenia : {emer}
            </Box>
            <Box borderRadius='7px' h='40px' bg='gray.200' p={2}>
                No disponible : {nota}
            </Box>
        </VStack>
    )
}

export default StatusSideBar;