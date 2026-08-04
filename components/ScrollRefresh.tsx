"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Next.js hidrata y carga imágenes/fuentes de forma asíncrona — los ScrollTrigger
   creados por cada sección al montar pueden quedar con posiciones desalineadas
   si la altura de la página sigue cambiando después. Este componente fuerza un
   recálculo global una vez que todo (imágenes + fuentes) está asentado. */
export default function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh);

    // Fallback: algunas imágenes/texturas WebGL cargan después del evento load
    const t1 = setTimeout(refresh, 800);
    const t2 = setTimeout(refresh, 2000);

    // Si las fuentes web terminan de cargar tarde, también recalcula
    if ("fonts" in document) {
      (document as any).fonts.ready.then(refresh);
    }

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
