import {
    Text,
    Link,
    Heading,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./components/Map";
import StatusSideBar from "./components/StatusSideBar";
import './App.css';

const url = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/";

function App() {

    const [data, setData] = useState([])

    const getData = () => {
        axios
            .get(url)
            .then(response => {
                console.log('Promise fulfilled')
                setData(response.data)})
            .catch("Error al obtener datos desde la API")
    }

    useEffect(getData, [])

    return (
        <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'70px 1fr 30px'}
            gridTemplateColumns={'250px 1fr'}
            color='blackAlpha.700'
            fontWeight='bold'>

            <GridItem pl='17px' bg='gray.100' area={'header'}>
                    <Heading mt='11px' >Air quality map - {' '}
                        <Link color='teal.500' href='https://es.wikipedia.org/wiki/Chile'>
                            Chile
                        </Link>
                    </Heading>
            </GridItem>

            <GridItem bg='gray.400' area={'nav'}>
                <StatusSideBar
                    data = {data}>
                </StatusSideBar>
            </GridItem>

            <GridItem bg='green.300' area={'main'}>
                {/* Map Component With Props */}
                <Map
                    stationsData = {data}>
                </Map>
            </GridItem>

            <GridItem pl='2' bg='gray.600' area={'footer'} color='white'>
                <Text marginTop='3px'>
                    Made by {' '}
                    <Link color='teal.500' href='https://github.com/iwayato'>
                        Tomoaki Iwaya Villalobos
                    </Link>
                </Text>
            </GridItem>
        </Grid>
    );
}

export default App;
