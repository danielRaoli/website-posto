import servicoimg from "@/assets/bombas.jpg";

import { Button } from "../components/ui/button";
import { useInView } from "react-intersection-observer";

export function HomeServico() {
  const { ref: servico, inView: servicoSectionVisible } = useInView();
  return (
    <>
      <section
        ref={servico}
        className={`w-full h-auto flex flex-col gap-10 bg-cover bg-[#000000a6] py-14 px-6 md:p-24 transition-all delay-300 ${
          servicoSectionVisible ? "opacity-1" : "opacity-0"
        }`}
        style={{
          backgroundBlendMode: "overlay",
          backgroundImage: `url(${servicoimg})`,
        }}
      >
        <h2 className="text-3xl text-white font-bold md:text-4xl">
          Nossos Serviços
        </h2>
        <p className="text-white text-lg md:text-xl  font-semibold md:w-[50%]">
          O Posto Iargas valoriza a excelência e a diversidade em seus produtos,
          buscando continuamente o aprimoramento dos serviços oferecidos. Tudo
          isso para garantir a plena satisfação de seus clientes.
        </p>
        <Button variant="outline" className="rounded-3xl md:w-min md:p-5">
          <a href="#" className="text-blue-900 font-bold md:text-lg">
            Conhecer Serviços
          </a>
        </Button>
      </section>
    </>
  );
}
