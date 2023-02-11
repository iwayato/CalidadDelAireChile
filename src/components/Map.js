import { 
    MapContainer, 
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'
import {
    VStack,
    Text,
    Heading,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import Chart from './Chart';

const Map = ({stationsData}) => {

    console.log(stationsData);

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <MapContainer
            zoomControl={false}
            minZoom={5}
            dragging={true} 
            center={[-34.135020, -71.565964]} 
            zoom={5} 
            scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
            </TileLayer>

            {stationsData.map(station => 
                <Marker
                    key={station.key}
                    position={[station.latitud, station.longitud]}>
                    <Popup closeButton={true}>
                        <VStack
                            spacing={3}
                            align='stretch'>
                            <Heading size='lg'>{station.nombre}</Heading>
                            <Text fontSize='sm'>{station.region}</Text>
                            <Text fontSize='sm'>Comune : {station.comuna}</Text>
                            <Button
                                colorScheme='blue'
                                onClick={onOpen}>
                                See graphics
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose} size='lg' isCentered>
                                <ModalOverlay
                                    backdropFilter='blur(1px)'/>
                                <ModalContent>
                                    <ModalHeader>Quality air graphics</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        {/* Gráfico con los datos de la API */}
                                        <Chart></Chart>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                        </VStack>
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    )
}

export default Map;