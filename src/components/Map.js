import { 
    MapContainer, 
    TileLayer,
    Marker,
    Tooltip,
    Popup,
} from 'react-leaflet'
import {
    HStack,
    VStack,
    Text,
    Heading,
    Divider
} from '@chakra-ui/react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { iconSelector } from '../helpers/iconSelector.js'
import DataComposer from './DataComposer.js';
import { InfoIcon } from '@chakra-ui/icons';

const corner1 = L.latLng(-11.011774, -102.208789);
const corner2 = L.latLng(-57.234297, -25.698563);
const bounds = L.latLngBounds(corner1, corner2);

const Map = ({stationsData}) => {

    return(
        <MapContainer
            maxBounds={bounds}
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
                    <Popup
                        maxHeight='1000px'
                        maxWidth='1000px'>
                        <VStack
                            spacing={3}
                            align='stretch'>
                            <Heading size='md' color='cadetblue'>Información sensores</Heading>
                            <DataComposer 
                                data = {station.realtime}>
                            </DataComposer>
                        </VStack>
                    </Popup>
                    <Tooltip
                        opacity={1}
                        direction='bottom'>
                        <VStack
                            spacing={3}
                            align='stretch'>
                            <Heading size='md' color='cadetblue'>{station.nombre}</Heading>
                            <Text fontSize='sm' color='gray.600'>{station.region}</Text>
                            <Text fontSize='sm' color='gray.600'>Comuna : {station.comuna}</Text>
                            <Divider></Divider>
                            <Text fontSize='sm' color='gray.600'>Latitud : {station.latitud}</Text>
                            <Text fontSize='sm' color='gray.600'>Longitud : {station.longitud}</Text>
                            <HStack>
                                <InfoIcon
                                    mb='3px'
                                    color='gray.600'
                                    boxSize='1.5em'>
                                </InfoIcon>
                                <Text fontSize='md' color='cadetblue'>Click para más información</Text>
                            </HStack>
                        </VStack>
                    </Tooltip>
                </Marker>
            )}
        </MapContainer>
    )
}

export default Map;