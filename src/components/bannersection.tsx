import bannerimagem from "@/assets/postobanner1.png";
import bannerimagem2 from "@/assets/banner2.jpg";
import banner2 from "@/assets/banner22.png";
import banneroleo from "@/assets/banneroleodesk.png";
import bannerconveniencia from "@/assets/bannerconvenienciadesk.png";
import bannerconvenienciamob from "@/assets/bannerconveniencia.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export function BannerSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <>
      <section className="w-full bg-yellow-400">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent className="h-full md:h-[400px]">
            <CarouselItem className="w-full h-full flex-shrink-0">
              <img
                className="md:hidden w-full h-full object-cover"
                src={bannerimagem2}
                alt="Banner contendo uma foto dos posto e texto escrito posto largas muito mais que um posto uma parada completa pra voce"
              />
              <img
                className="hidden md:block w-full h-full object-cover object-left"
                src={banner2}
                alt="Banner contendo uma foto dos posto e texto escrito posto largas muito mais que um posto uma parada completa pra voce"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full flex-shrink-0 ">
              <img
                src={bannerimagem}
                alt="Banner contendo uma foto de abastecimento de carro e texto escrito abastecimento com qualidade atendimento com excelencia"
                className="w-full h-full object-cover md:hidden"
              />
              <img
                src={banneroleo}
                alt="Banner contendo uma foto de abastecimento de carro e texto escrito abastecimento com qualidade atendimento com excelencia"
                className="hidden md:block w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem className="w-full h-full flex-shrink-0 ">
              <img
                src={bannerconvenienciamob}
                alt="Banner contendo uma foto de abastecimento de carro e texto escrito abastecimento com qualidade atendimento com excelencia"
                className="w-full h-full object-cover md:hidden"
              />
              <img
                src={bannerconveniencia}
                alt="Banner contendo uma foto de abastecimento de carro e texto escrito abastecimento com qualidade atendimento com excelencia"
                className="hidden w-full h-full object-cover md:block"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
}
