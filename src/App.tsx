import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./components/ui/navigation-menu";

import logo from "@/assets/logoposto.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import { Button } from "./components/ui/button";

import { AlignJustify, ArrowRight, Quote } from "lucide-react";
import bannerimagem from "@/assets/postobanner1.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import bannerimagem2 from "@/assets/banner2.png";
import postolocal from "@/assets/PostoIargars.jpg";
import sobrefoto from "@/assets/sobrefoto.jpg";
import clientes1 from "@/assets/clientes.jpg";
import clientes2 from "@/assets/clientes2.jpg";
import mulher from "@/assets/mulher.jpg";
import homem from "@/assets/homem.jpg";
import banner2 from "@/assets/banner22.jpg";
import servico from "@/assets/bombas.jpg";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

const testimonials = [
  {
    image: clientes2,
    quote:
      "Atendimento excelente todos muitos atenciosa desde donos como os funcionários so abasteço nesse posto parabéns pra eles pele dedicação com os crientes.",
    avatar: mulher,
    name: "Iraci Moreira",
  },
  {
    image: clientes1,
    quote:
      "Excelente serviço e equipe super atenciosa. Fico muito satisfeito em abastecer aqui.",
    avatar: homem,
    name: "Carlos Nunes",
  },
  // Adicione outros depoimentos aqui
];

function App() {
  const links = [
    "Sobre Nos",
    "Produtos e Servicos",
    "Conveniencia",
  ] as string[];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Função para navegar entre os depoimentos
  const handlePrevious = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, quote, avatar, name } = testimonials[currentIndex];

  return (
    <>
      <header className="flex flex-col w-full h-auto bg-yellow-300">
        <div className="h-auto w-full flex justify-end py-3 md:py-5 px-4 relative">
          <img
            src={logo}
            alt=""
            className="h-[60px] md:h-[80px] w-auto absolute left-4 top-[0]"
          />
          <NavigationMenu className="w-full">
            <NavigationMenuList className="gap-3">
              {links.map((link) => (
                <NavigationMenuItem>
                  <a
                    href=""
                    className="text-blue-900 font-semibold hidden md:block"
                  >
                    {link}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <AlignJustify className="text-blue-900 md:hidden" />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-yellow-300">
                <SheetHeader>
                  <SheetTitle className="text-blue-900">Menu</SheetTitle>
                  <SheetDescription>
                    Navegue pelo nosso site e nos conheça ainda mais
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-3 mt-10">
                  {links.map((link) => (
                    <Button className="text-yellow-300 font-semibold bg-blue-900">
                      {link}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </NavigationMenu>
        </div>
        <div className="bg-blue-800 h-[20px] w-full"></div>
      </header>
      <main className="w-full h-full">
        <section className="w-full bg-yellow-400">
          <Carousel plugins={[plugin.current]}>
            <CarouselContent>
              <CarouselItem className="md:max-h-[720px] ">
                <img
                  className="md:hidden m"
                  src={bannerimagem2}
                  alt="Banner contendo uma foto dos posto e texto escrito posto largas muito mais que um posto uma parada completa pra voce"
                />
                <img
                  className="hidden md:block object-contain "
                  src={banner2}
                  alt="Banner contendo uma foto dos posto e texto escrito posto largas muito mais que um posto uma parada completa pra voce"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src={bannerimagem}
                  alt="Banner contendo uma foto de abastecimento de carro e texto escrito abastecimento com qualidade atendimento com excelencia"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
        <section className="py-10 px-4 w-full flex flex-col items-center">
          <h2 className="text-3xl text-blue-950 text-center font-semibold mb-4">
            Encontre Nosso Posto
          </h2>
          <p className="text-slate-600 text-center mb-20">
            Tenha acesso a nossa localização
          </p>

          <Carousel plugins={[plugin.current]} className="mb-10">
            <CarouselContent className="w-full h-[150px]">
              <CarouselItem className="w-full h-full flex-shrink-0">
                <img
                  src={postolocal}
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
            </CarouselContent>
          </Carousel>

          <Button variant="outline" className="rounded-3xl">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/IARGAS+AUTO+POSTO+IARGAS+GAS+IARGAS+PESQUE+PAGUE+IARGAS/@-25.871561,-49.510148,16z/data=!4m6!3m5!1s0x94ddafe021f49b21:0xa6cad9fca48b8633!8m2!3d-25.8715613!4d-49.5101484!16s%2Fg%2F11h0_j746z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
            >
              Ver no Mapa
            </a>
          </Button>
        </section>
        <section
          className="w-full bg-cover bg-no-repeat bg-fixed bg-center bg-[#00000080] h-auto p-10 flex flex-col items-center gap-3"
          style={{
            backgroundBlendMode: "overlay",
            backgroundImage: `url(${sobrefoto})`,
          }}
        >
          <img
            src={logo}
            alt="logo marca do posto iargas"
            className="object-cover max-h-[250px]"
          />
          <h2 className="text-white font-semibold rounded-sm text-center">
            Descubra a trajetória de trabalho em equipe, conquista e
            perseverança que transformou o Posto Iargas em um grande ecossistema
            que vai além de um posto.
          </h2>
          <Button variant="outline" className="rounded-3xl">
            <a href="#" className="text-blue-900">
              Quem Somos
            </a>
          </Button>
        </section>
        <section className="flex flex-col py-10 px-4 h-full items-center gap-6">
          <span className="text-yellow-500 font-bold">Depoimentos</span>
          <h2 className="text-blue-900 text-3xl text-center font-bold">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-center font-semibold text-slate-800">
            Eis o que alguns dos nossos fantásticos clientes estão a dizer sobre
            os nossos serviços.
          </p>
          <div className="w-[80%] h-auto relative">
            <img
              src={image}
              alt=""
              className="w-full min-h-[300px] flex-shrink-0 object-cover rounded-sm"
            />
            <div className="flex gap-3 items-center justify-evenly bg-slate-300 h-[50px] w-auto p-3 rounded-tl-sm absolute bottom-0 right-0">
              <button
                onClick={handlePrevious}
                className="rounded-full bg-blue-900 text-white p-2"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="rounded-full bg-blue-900 text-white p-2"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative items-center mb-4">
              <ImQuotesLeft className="absolute left-0 top-0 text-yellow-500" />
              <p className="text-blue-950 text-center w-full px-[4%]">
                {quote}
              </p>
              <ImQuotesRight className="absolute right-0 bottom-0 text-yellow-300" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar className="h-[60px] w-[60px]">
                <AvatarImage src={avatar} className="object-cover " />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-yellow-500 text-xl font-bold">{name}</span>
            </div>
          </div>
        </section>
        <section
          className="w-full h-auto flex flex-col gap-10 bg-cover bg-[#00000080] py-8 px-4"
          style={{
            backgroundBlendMode: "overlay",
            backgroundImage: `url(${servico})`,
          }}
        >
          <h2 className="text-3xl text-white font-bold">Nossos Serviços</h2>
          <p className="text-white text-lg font-semibold">
            O Posto Iargas valoriza a excelência e a diversidade em seus
            produtos, buscando continuamente o aprimoramento dos serviços
            oferecidos. Tudo isso para garantir a plena satisfação de seus
            clientes.
          </p>
          <Button variant="outline" className="rounded-3xl">
            <a href="#" className="text-blue-900">
              Conhecer Serviços
            </a>
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
