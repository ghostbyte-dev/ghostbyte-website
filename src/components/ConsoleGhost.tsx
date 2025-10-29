"use client";
import { useEffect } from "react";

export default function ConsoleGhost() {
  useEffect(() => {
    const ghost = `
      .-.
     (o o) boo!
     | O \\
      \\   \\
       \`~~~'
    `;

    console.log(
      "%c" + ghost,
      "color: #00ffff; font-weight: bold; font-family: monospace;"
    );
  }, []);

  return null;
}
