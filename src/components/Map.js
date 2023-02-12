import { 
    MapContainer, 
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet'
import {
    VStack,
    Text,
    Heading,
    Button,
    useDisclosure,
    Modal,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Box,
    Divider,
} from '@chakra-ui/react';
import MarkerClusterGroup from 'react-leaflet-cluster'
import "leaflet/dist/leaflet.css";
import Chart from './Chart';
import { iconSelector } from './iconSelector.js'
import { dataComposer } from './dataComposer.js'

const Map = ({stationsData}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <MapContainer
            zoomControl={false}
            minZoom={4}
            dragging={true} 
            center={[-34.135020, -71.565964]} 
            zoom={4} 
            scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
            </TileLayer>

            <MarkerClusterGroup chunkedLoading>
                {stationsData.map( (station) => 
                    <Marker
                        icon={iconSelector(station.realtime)}
                        key={station.key}
                        position={[station.latitud, station.longitud]}>

                        <Popup closeButton={false}>

                            <VStack
                                spacing={3}
                                align='stretch'>
                                <Heading size='lg' color='#252b34'>{station.nombre}</Heading>
                                <Divider></Divider>
                                <Text fontSize='sm' color='gray.600'>{station.region}</Text>
                                <Text fontSize='sm' color='gray.600'>Comune : {station.comuna}</Text>
                                <Divider></Divider>
                                <Text fontSize='sm' color='gray.600'>Latitude : {station.latitud}</Text>
                                <Text fontSize='sm' color='gray.600'>Longitude : {station.longitud}</Text>
                                <Divider></Divider>
                                <Button
                                    colorScheme='blue'
                                    onClick={onOpen}>
                                    See graphics
                                </Button>
                            </VStack>

                            <Modal isOpen={isOpen} onClose={onClose} size='6xl' isCentered>
                                <ModalContent>
                                    <ModalCloseButton size='md'/>
                                    <ModalBody>
                                        <Box>
                                            {/* Gráfico con los datos de la API */}
                                            {/* Idea : generar el array de datos a plotear en App.js
                                                y mapearlos con la id al respectivo componente (estacion) */}
                                            <Chart plotData = {dataComposer(station.realtime)}/>
                                        </Box>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>

                        </Popup>
                    </Marker>
                )}
            </MarkerClusterGroup>
        </MapContainer>
    )
}

export default Map;