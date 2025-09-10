"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/img/marker.svg",
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -60],
});

export default function LeafletMap() {
  return (
    <MapContainer
      center={[47.8095, 13.055]}
      zoom={5.3}
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
