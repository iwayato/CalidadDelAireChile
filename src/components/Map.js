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
                            <Divider orientation='vertical'></Divider>
                            <VStack
                                spacing={3}
                                align='stretch'>
                                <Heading size='md' color='gray'>{station.nombre}</Heading>
                                <Divider></Divider>
                                <Text fontSize='sm' color='gray.600'>{station.region}</Text>
                                <Text fontSize='sm' color='gray.600'>Comune : {station.comuna}</Text>
                                <Divider></Divider>
                                <Text fontSize='sm' color='gray.600'>Latitude : {station.latitud}</Text>
                                <Text fontSize='sm' color='gray.600'>Longitude : {station.longitud}</Text>
                            </VStack>
                            <Divider orientation='vertical'></Divider>
                            <Divider orientation='vertical'></Divider>
                            <VStack
                                spacing={3}
                                align='stretch'>
                                <Heading size='md' color='gray'>Latest register</Heading>
                                <Divider></Divider>
                                <DataComposer 
                                    data = {station.realtime}>
                                </DataComposer>
                            </VStack>
                            <Divider orientation='vertical'></Divider>
                        </HStack>
                    </Tooltip>
                </Marker>
            )}
        </MapContainer>
    )
}

export default Map;