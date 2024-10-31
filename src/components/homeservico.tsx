import servico from "@/assets/bombas.jpg";

import { Button } from "../components/ui/button";

export function HomeServico() {
  return (
    <>
      <section
        className="w-full h-auto flex flex-col gap-10 bg-cover bg-[#000000a6] py-14 px-6 md:p-24"
        style={{
          backgroundBlendMode: "overlay",
          backgroundImage: `url(${servico})`,
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
