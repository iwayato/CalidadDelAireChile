import { 
    MapContainer, 
    TileLayer,
    Marker,
    Tooltip,
} from 'react-leaflet'
import {
    HStack,
    VStack,
    Text,
    Heading,
    Divider,
} from '@chakra-ui/react';
import "leaflet/dist/leaflet.css";
import { iconSelector } from './iconSelector.js'
import DataComposer from './DataComposer.js';

const Map = ({stationsData}) => {

    return(
        <MapContainer
            zoomControl={true}
            minZoom={4}
            dragging={true} 
            center={[-34.135020, -71.565964]} 
            zoom={4} 
            scrollWheelZoom={true}>

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
            </TileLayer>

            {stationsData.map((station) => 
                <Marker
                    icon={iconSelector(station.realtime)}
                    key={station.key}
                    position={[station.latitud, station.longitud]}>
                    <Tooltip opacity={1}>
                        <HStack
                            spacing={3}
                            align='stretch'>
                            <VStack
                                spacing={3}
                                align='stretch'>
                                <Heading size='md' color='cadetblue'>{station.nombre}</Heading>
                                <Text fontSize='sm' color='gray.600'>{station.region}</Text>
                                <Text fontSize='sm' color='gray.600'>Comuna : {station.comuna}</Text>
                                <Text fontSize='sm' color='gray.600'>Latitud : {station.latitud}</Text>
                                <Text fontSize='sm' color='gray.600'>Longitud : {station.longitud}</Text>
                            </VStack>
                            <Divider></Divider>
                            <Divider></Divider>
                            <Divider></Divider>
                            <VStack
                                spacing={3}
                                align='stretch'>
                                <Heading size='md' color='cadetblue'>Información sensores</Heading>
                                <DataComposer 
                                    data = {station.realtime}>
                                </DataComposer>
                            </VStack>
                        </HStack>
                    </Tooltip>
                </Marker>
            )}
        </MapContainer>
    )
}

export default Map;