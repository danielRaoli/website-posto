import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import postolocal from "@/assets/PostoIargars.jpg";
import postolocal2 from "@/assets/localposto.jpg";
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";

export function LocalSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const { ref: local, inView: localSectionVisible } = useInView();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        id="local"
        ref={local}
        className={`py-10 px-4 md:px-20 w-full flex flex-col items-center transition duration-300   ${
          localSectionVisible ? "opacity-1" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl text-blue-950 text-center font-semibold mb-4">
          Encontre Nosso Posto
        </h2>
        <p className="text-slate-600 text-center text-xl mb-20">
          Tenha acesso a nossa localização
        </p>

        <Carousel plugins={isMobile ? [plugin.current] : []} className="mb-10">
          <CarouselContent className="w-full h-[150px] md:h-[400px] md:w-[50%]">
            <CarouselItem className="w-full h-full flex-shrink-0">
              <img
                src={postolocal2}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full flex-shrink-0">
              <CarouselItem className="w-full h-full flex-shrink-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.936682728243!2d-49.510148371527954!3d-25.87156126045887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ddafe021f49b21%3A0xa6cad9fca48b8633!2sIARGAS%20AUTO%20POSTO%20IARGAS%20GAS%20IARGAS%20PESQUE%20PAGUE%20IARGAS!5e0!3m2!1spt-BR!2sbr!4v1730298191248!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-sm"
                  title="Localização no Google Maps"
                ></iframe>
              </CarouselItem>
            </CarouselItem>
            <CarouselItem className="w-full h-full flex-shrink-0">
              <img
                src={postolocal}
                alt=""
                className="w-full h-full object-cover rounded-sm"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <Button variant="outline" className="rounded-3xl md:p-5">
          <a
            className="font-bold text-blue-900 md:text-lg"
            target="_blank"
            href="https://www.google.com/maps/place/IARGAS+AUTO+POSTO+IARGAS+GAS+IARGAS+PESQUE+PAGUE+IARGAS/@-25.871561,-49.510148,16z/data=!4m6!3m5!1s0x94ddafe021f49b21:0xa6cad9fca48b8633!8m2!3d-25.8715613!4d-49.5101484!16s%2Fg%2F11h0_j746z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
          >
            Ver no Mapa
          </a>
        </Button>
      </section>
    </>
  );
}
