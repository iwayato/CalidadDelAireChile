import {
    Text,
    Link,
    Heading,
    Grid,
    GridItem,
    HStack,
    Button,
    Box,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    UnorderedList,
    ListItem,
    Spinner,
    Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./components/Map";
import StatusSideBar from "./components/StatusSideBar";
import './App.css';

const url = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/";

function App() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    const getData = () => {
        axios
            .get(url)
            .then(response => {
                setData(response.data)
                setLoading(false);
            })
            .catch(
                setData([])
            )
    }

    useEffect(() => {
        getData()

        const interval = setInterval(() => {
            getData()
        }, 3600000)

        return() => clearInterval(interval)
    }, [])

    if (isLoading) {
        return(
            <Center width='100%' height='100vh'>
                <Spinner
                    height='150px'
                    width='150px'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Center>
        )
    }

    return (
        <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'70px 1fr 30px'}
            gridTemplateColumns={'250px 1fr'}
            color='blackAlpha.700'
            fontWeight='bold'>

            <GridItem pl = '15px' bg = 'gray.100' area = {'header'}>
                <HStack mt = '13px'>
                    <Heading>Calidad del aire - {' '}
                        <Link color='teal.500' href='https://sinca.mma.gob.cl/'>
                            Chile
                        </Link>
                    </Heading>
                    <Box
                        onClick={onOpen}
                        as = {Button} 
                        left = 'calc(100% - 675px)'>
                            ¿Qué es lo que se esta midiendo?
                    </Box>
                </HStack>
            </GridItem>

            <Modal size='xl' scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Contaminantes</ModalHeader>

                    <ModalCloseButton></ModalCloseButton>

                    <ModalBody>
                        <Heading size='sm'>Material particulado</Heading>
                        <Text align='justify'>
                            Contaminante atmosférico que corresponde a aquellas partículas líquidas o sólidas
                            que se encuentran en suspensión, siendo posible clasificarlo según su diámetro en 
                            MP10 (grueso) y MP2,5 (fino). El primero es aquel en que las partículas tienen un 
                            diámetro menor a 10 micrones (o micrómetros), y el segundo, en que las partículas 
                            tienen un diámetro menor a 2,5 micrones. Por lo mismo, el MP2,5 se encuentra 
                            contenido en el MP10. También existe el denominado MP ultrafino, de alrededor 
                            de 0,1 μm de diámetro. La concentración de MP es el valor promedio temporal 
                            detectado en el aire y se mide en microgramos por metro cúbico normal (μg/m3N).
                        </Text>
                        <br></br>
                        <Heading size='sm'>Ozono troposférico</Heading>
                        <Text align='justify'>
                            Gas incoloro que se crea a través de reacciones fotoquímicas entre óxidos de nitrógeno 
                            (NOx) y compuestos orgánicos volátiles (COV) derivados de fuentes como la quema de 
                            combustible. Esto se convierte en un problema, puesto que el ozono, en concentración 
                            suficiente, puede provocar daños en la salud humana (a partir de unos 150 microgramos 
                            por metro cúbico) o en la vegetación (a partir de 30 ppb (partes por billón anglosajón, 
                            o millardo) y contribuye a generar un calentamiento en la superficie de la Tierra.
                            Cabe destacar que el  mecanismo mediante el cual se genera el ozono en la tropósfera 
                            es completamente distinto, ya que depende de contaminantes provenientes de la 
                            actividad humana, mientras que el ozono estratosférico se forma por la acción de la
                            radiación ultravioleta.
                        </Text>
                        <br></br>
                        <Heading size='sm'>Dióxido de azufre</Heading>
                        <Text align='justify'>
                            Gas irritante y tóxico. Afecta sobre todo las mucosidades y los pulmones provocando 
                            ataques de tos. Si bien este es absorbido principalmente por el sistema nasal, 
                            la exposición de altas concentraciones por cortos períodos de tiempo puede irritar 
                            el tracto respiratorio, causar bronquitis y congestionar los conductos bronquiales 
                            de los asmáticos. La concentración máxima permitida en los lugares de trabajo 
                            es de 2 ppm. Es el principal causante de la lluvia ácida.
                        </Text>
                        <br></br>
                        <Heading size='sm'>Dióxido de nitrógeno</Heading>
                        <Text align='justify'>
                            Es un gas tóxico, irritante y precursor de la formación de partículas de nitrato. 
                            Estas llevan a la producción de ácido y elevados niveles de PM-2.5 en el ambiente. 
                            Afecta principalmente al sistema respiratorio.
                        </Text>
                        <br></br>
                        <Heading size='sm'>Monóxido de carbono</Heading>
                        <Text align='justify'>
                            Gas incoloro y altamente tóxico. Puede causar la muerte cuando se respira en niveles 
                            muy elevados (0,4% de concentración en el aire). Se produce por la combustión deficiente 
                            de sustancias como gas, gasolina, queroseno, carbón, petróleo, tabaco o madera. 
                            Las chimeneas, las calderas, los calentadores de agua o calefactores y los aparatos 
                            domésticos que queman combustible, como las estufas u hornillas de la cocina o los 
                            calentadores a queroseno, también pueden producirlo si no están funcionando bien.
                        </Text>
                        <br></br>
                        <Heading size='sm'>Fuentes</Heading>
                        <UnorderedList>
                            <ListItem>
                                <Link 
                                    href='https://airechile.mma.gob.cl/faq' 
                                    color='teal.500'>
                                        Aire Chile
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link 
                                    href='https://es.wikipedia.org/wiki/Ozono' 
                                    color='teal.500'>
                                        Ozono
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href='https://es.wikipedia.org/wiki/Di%C3%B3xido_de_azufre' 
                                    color='teal.500'>
                                        Dióxido de azufre
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href='https://es.wikipedia.org/wiki/Di%C3%B3xido_de_nitr%C3%B3geno' 
                                    color='teal.500'>
                                        Dióxido de nitrógeno
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href='https://es.wikipedia.org/wiki/Mon%C3%B3xido_de_carbono' 
                                    color='teal.500'>
                                        Monóxido de carbono
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={0} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <GridItem bg='gray.400' area={'nav'}>
                <StatusSideBar
                    data = {data}>
                </StatusSideBar>
            </GridItem>

            <GridItem area={'main'}>
                {/* Map Component With Props */}
                <Map stationsData = {data}/>
            </GridItem>

            <GridItem pl='2' bg='gray.600' area={'footer'} color='white'>
                <Text marginTop='3px'>
                    Hecho por {' '}
                    <Link color='teal.500' href='https://github.com/iwayato'>
                        Tomoaki Iwaya Villalobos
                    </Link>
                </Text>
            </GridItem>
        </Grid>
    );
}

export default App;
