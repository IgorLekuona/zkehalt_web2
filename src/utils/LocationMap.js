import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import "../App.css";

const LocationMap = () => {
    return (
        <div className="map-container">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    );
}

export default LocationMap;

// import React, { useState, useCallback } from 'react';
// import { GoogleMap, useLoadScript, Marker as GoogleMapMarker } from '@react-google-maps/api';
// // import FilterComponent from './FilterComponent'; // Ensure this path matches your project structure
// // import SearchAndZoomComponent from './SearchAndZoomComponent'; // Ensure this path matches your project structure
// // import ReportsComponent from './ReportsComponent'; // Ensure this path matches your project structure
// // import { Report } from '../types'; // Ensure this path matches your project structure
// // import ReportForm from './ReportForm'; // Ensure this path matches your project structure
// // icons 
// import iconLocation from '../assets/icons/location.svg';

// const mapContainerStyle = {
//   width: '10vw',
//   height: '10vh',
// };

// // Updated center coordinates for Barcelona, Spain
// // const center = {
// //   lat: 41.3851,
// //   lng: 2.1734,
// // };
// const zoomLevel = 13;

// const options = {
//   disableDefaultUI: true, // This will disable the default map controls
//   zoomControl: false, // Specifically disables the default zoom controls

//   styles: [
//     {
//       featureType: 'all',
//       elementType: 'all',
//       stylers: [
//         { saturation: -20 } // Desatura todos los colores para dar un aspecto más apagado
//       ]
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry',
//       stylers: [
//         { lightness: 100 }, // Hace las carreteras más claras
//         { visibility: 'simplified' } // Simplifica la visualización de las carreteras
//       ]
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry',
//       stylers: [
//         { hue: '#fff' },
//         { lightness: 50 } // Hace el color del agua más claro
//       ]
//     },
//     {
//       featureType: 'poi', // Puntos de interés
//       elementType: 'labels.icon',
//       stylers: [
//         { visibility: 'off' } // Oculta los íconos de los puntos de interés
//       ]
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'geometry',
//       stylers: [
//         { lightness: 60 } // Hace los parques más claros
//       ]
//     }
//     // Puedes seguir agregando más estilos para otros tipos de elementos
//   ]
// };



// // interface Marker {
// //   lat: number;
// //   lng: number;
// //   time: Date;
// // }

// // interface FilterState {
// //   distance: number;
// //   dateRange: string;
// //   severity: string;
// //   showHistory: boolean;
// // }


// const MapComponent = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDXVy0i2UQ6szLj9VstATaGSx_fzjSC2Lw", // Replace with your actual API key
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [, setSelectedMarker] = useState(null);

//   const [newReportDescription, setNewReportDescription] = useState('');
//   const [newReportSeverity, setNewReportSeverity] = useState('');


//   const [markers, setMarkers] = useState([]);
//   const [reports, setReports] = useState([]);
//   // const [zoom, setZoom] = useState(zoomLevel);


//   const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 }); // Estado inicial para el centro, puedes cambiarlo por una ubicación predeterminada
//   const handleFilterChange = useCallback((filters) => {
//     // Implement your filtering logic here
//     // This example simply logs the filters to the console
//     console.log(filters);
//   }, []);






//   const zoomIn = () => {
//     setZoom((currentZoom) => currentZoom + 1);
//   };

//   // Function to decrease the zoom level
//   const zoomOut = () => {
//     setZoom((currentZoom) => Math.max(currentZoom - 1, 0)); // assuming you don't want to go below 0
//   };

//   // Add state for zoom control
//   const [zoom, setZoom] = useState(zoomLevel);


//   const handleLocationSearch = async (query) => {
//     // Asegúrate de que la consulta no esté vacía
//     if (!query.trim()) return;

//     try {
//       // Utiliza la API de Geocoding de Google Maps para buscar el lugar
//       const geocoder = new google.maps.Geocoder();

//       geocoder.geocode({ address: query }, (results, status) => {
//         if (status === 'OK') {
//           // Asegúrate de que results no sea null antes de acceder a su contenido
//           if (results && results[0]) {
//             // Si todo sale bien, actualiza el centro del mapa con las coordenadas del primer resultado
//             setCenter({
//               lat: results[0].geometry.location.lat(),
//               lng: results[0].geometry.location.lng(),
//             });
//           }
//         } else {
//           console.error('Geocode was not successful for the following reason:', status);
//         }
//       });
//     } catch (error) {
//       console.error('Error during location search:', error);
//     }
//   };




//   const handleZoomChange = (newZoom) => {
//     // Aquí puedes convertir el valor de kilómetros a nivel de zoom si es necesario
//     // y luego actualizar el estado del zoom del mapa
//     console.log(`Nuevo nivel de zoom: ${newZoom}`);
//     setZoom(newZoom); // Actualiza el estado del zoom directamente si es un valor de zoom válido
//   };




//   const onMapClick = useCallback((event) => {
//     if (event.latLng) {
//       const newMarker = {
//         lat: event.latLng.lat(),
//         lng: event.latLng.lng(),
//         time: new Date(),
//       };
//       setMarkers((current) => [...current, newMarker]);
//     }
//   }, []);


//   const onAddReport = useCallback((data) => {
//     // Crear un nuevo reporte con un ID único
//     const newReport = {
//       ...data,
//       id: Date.now().toString(), // Generar un ID simple basado en el timestamp actual
//       time: new Date().toISOString(), // Agregar un timestamp al reporte
//     };
  
//     // Actualizar el estado para incluir el nuevo reporte
//     setReports(currentReports => [...currentReports, newReport]);
  
//     console.log('Reporte añadido con éxito:', newReport);
  
//     // Resetear cualquier estado del formulario si es necesario
//     // Por ejemplo:
//     setNewReportDescription('');
//     setNewReportSeverity('');
//     setIsFormVisible(false); // Ocultar el formulario tras añadir el reporte
//   }, [setReports, setNewReportDescription, setNewReportSeverity, setIsFormVisible]);
  
  
  

//   const onDeleteReport = useCallback((reportId) => {
//     setReports((prev) => prev.filter((report) => report.id !== reportId));
//   }, []);



  


//   const goToCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCenter({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         () => {
//           alert('No se pudo obtener la ubicación');
//         }
//       );
//     }
//   };

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading Maps</div>;

//   // Ajusta según la estructura de tus marcadores

  


//   return (
//     <section className='sct-map'>
//       <FilterComponent onFilterChange={handleFilterChange} />
//       <div className='div-container-btn'>
//         <button className='btn-ubication' onClick={goToCurrentLocation}>
//           <img src={iconLocation} alt="icono de ubicación" />
//         </button>
//         <button className='btn-zoom-in' onClick={zoomIn}>+</button>
//         <button className='btn-zoom-out' onClick={zoomOut}>-</button>
//       </div>



//       <div className='div-map'>


//         <ReportsComponent  
//           reports={reports} 
//           onDeleteReport={onDeleteReport}
//         />




//         <SearchAndZoomComponent
//           onSearch={handleLocationSearch}
//           onZoomChange={handleZoomChange}
//         />
//         <GoogleMap
//           mapContainerStyle={mapContainerStyle}
//           zoom={zoom}
//           center={center}
//           options={options}
//           onClick={onMapClick}
//         >

//           {markers.map((marker, index) => (
//             <GoogleMapMarker
//               key={index}
//               position={{ lat: marker.lat, lng: marker.lng }}
//               onClick={() => {
//                 console.log('Marcador clickeado, mostrando formulario');
//                 setIsFormVisible(true);
//                 setSelectedMarker(marker);
//               }}
//             />
//           ))}
//         </GoogleMap>


//         {isFormVisible && (
//           <ReportForm onSubmit={onAddReport} />
//         )}


//       </div>
//     </section>
//   );
// };

// export default MapComponent;
