"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

export default function LeafletMapWrapper() {
  return <LeafletMap />;
}
