"use client";

import type { LatLngTuple } from "leaflet";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

export default function LeafletMapWrapper({ center }: { center: LatLngTuple }) {
  return <LeafletMap center={center} />;
}
