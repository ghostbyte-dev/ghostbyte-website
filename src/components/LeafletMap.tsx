"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { type LatLngTuple } from "leaflet";

const customIcon = L.icon({
  iconUrl: "/img/marker.svg",
  iconSize: [60, 60],
  iconAnchor: [30, 60],
  popupAnchor: [0, -60],
});

export default function LeafletMap({ center }: { center: LatLngTuple }) {
  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
      <Marker icon={customIcon} position={center}>
        <Popup>Our office</Popup>
      </Marker>
    </MapContainer>
  );
}
