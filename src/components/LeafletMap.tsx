"use client";

import maplibregl, { type LngLatLike } from "maplibre-gl";
import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

type Props = {
  center: [number, number]; // [lng, lat]
};

export default function MapLibreMap({ center }: Props) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/bright",
      center: center as LngLatLike,
      cooperativeGestures: true,
      attributionControl: {
        compact: true,
      },
      zoom: 11,
    });

    mapRef.current = map;

    const el = document.createElement("div");
    el.style.width = "43px";
    el.style.height = "60px";
    el.style.backgroundImage = "url(/img/marker.svg)";
    el.style.backgroundSize = "contain";
    el.style.backgroundRepeat = "no-repeat";
    el.style.cursor = "pointer";

    const marker = new maplibregl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(center as LngLatLike)
      .setPopup(
        new maplibregl.Popup({
          className: "custom-popup",
          closeButton: false,
          offset: {
            bottom: [0, -60],
            top: [0, 0],
            left: [22, -30],
            right: [-22, -30],
            "bottom-left": [22, -60],
            "bottom-right": [-22, -60],
            "top-left": [22, 0],
            "top-right": [-22, 0],
          } as any,
        }).setText("Our office"),
      )
      .addTo(map);

    return () => {
      marker.remove();
      map.remove();
    };
  }, [center]);

  return <div ref={mapContainer} className="h-full w-full" />;
}
