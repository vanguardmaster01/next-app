import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import L from "leaflet"

const Search = (props) => {
    const map = useMap(); //here use useMap hook
    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider: props.provider,
        style: "bar",
        marker: {
          icon: new L.icon({
            iconUrl:
              "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40]
          })
        },
        ...props
      });

      map.addControl(searchControl);

      return () => map.removeControl(searchControl)
    }, [map, props]);
    return null;
}

const Map = () => {
    const prov = new OpenStreetMapProvider();
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Search
        provider={prov}
        showMarker={true}
        showPopup={false}
        popupFormat={({ query, result }) => result.label}
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={false}
        searchLabel={"Enter address, please"}
        keepResult={false}
      />
        </MapContainer>
    )
}

export default Map