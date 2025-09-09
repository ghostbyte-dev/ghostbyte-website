"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define custom icon
const customIcon = L.icon({
  iconUrl: "/img/marker.svg", // path from public folder
  iconSize: [60, 60], // width, height in pixels
  iconAnchor: [20, 40], // point of the icon which corresponds to marker's location
  popupAnchor: [0, -40], // point from which the popup should open relative to iconAnchor
});

export default function LeafletMap() {
  return (
    <MapContainer
      center={[47.8095, 13.055]}
      zoom={6}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
      <Marker icon={customIcon} position={[47.423395, 9.656736]}>
        <Popup>Our office in Lustenau</Popup>
      </Marker>

      <Marker icon={customIcon} position={[48.231051, 16.376282]}>
        <Popup>Our office in Vienna</Popup>
      </Marker>
    </MapContainer>
  );
}
