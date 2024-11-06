import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import clientes1 from "@/assets/clientes.jpg";
import clientes2 from "@/assets/clientes2.jpg";
import mulher from "@/assets/mulher.jpg";
import homem from "@/assets/homem.jpg";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    image: clientes2,
    quote:
      "Atendimento excelente todos muitos atenciosa desde donos como os funcionários so abasteço nesse posto parabéns pra eles pela dedicação com os clientes.",
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

export function DepoimentosSection() {
  const { ref: depoimento, inView: depoimentoSectionVisible } = useInView();

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
      <section
        id="depoimento"
        ref={depoimento}
        className={`flex flex-col w-full px-5 py-10 gap-4 md:py-20 md:px-20 h-full items-center md:justify-center md:items-start md:gap-6 transition-all duration-300 delay-300  ${
          depoimentoSectionVisible
            ? "opacity-1 translate-x-0"
            : "-translate-x-20 opacity-0"
        }`}
      >
        <div className=" md:w-[50%]  flex items-center flex-col md:items-start gap-4">
          <span className="text-yellow-500 font-bold md:text-2xl">
            Depoimentos
          </span>
          <h2 className="text-blue-900 md:text-4xl text-center font-bold">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-center font-semibold md:text-lg md:text-start text-slate-800">
            Eis o que alguns dos nossos fantásticos clientes estão a dizer sobre
            os nossos serviços.
          </p>
        </div>

        <div className="flex flex-col  md:flex-row-reverse w-full md:gap-10 items-center gap-5 ">
          <div className="w-[80%] md:w-[50%] h-auto relative md:-mt-40">
            <img
              src={image}
              alt="Imagem de cliente Abastecendo"
              className="w-full min-h-[300px] flex-shrink-0 object-cover rounded-sm"
              loading="lazy"
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
          <div className="flex flex-col items-center md:w-[50%]">
            <div className="relative items-center mb-4">
              <ImQuotesLeft className="absolute  top-0 text-yellow-500" />
              <p className="text-blue-950 text-center w-full px-[4%] md:text-xl">
                {quote}
              </p>
              <ImQuotesRight className="absolute right-0  bottom-0 text-yellow-300" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar className="h-[60px] w-[60px]">
                <AvatarImage src={avatar} alt="foto de perfil do usuario" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-yellow-500 text-xl font-bold">{name}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
