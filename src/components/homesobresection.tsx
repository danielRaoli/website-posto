import logo from "@/assets/logo-iargas.png";
import sobrefoto from "@/assets/sobrefoto.jpg";
import { Button } from "./ui/button";
import { useInView } from "react-intersection-observer";

export function HomeSobre() {
  const { ref: sobre, inView: sobreSectionVisible } = useInView();
  return (
    <>
      <section
        ref={sobre}
        className={`w-full bg-cover bg-no-repeat bg-fixed bg-center bg-[#000000b4] h-auto py-14 px-10 md:py-20 flex flex-col items-center gap-10 md:gap-10 transition-all duration-300 ${
          sobreSectionVisible ? "opacity-1" : "opacity-0"
        }`}
        style={{
          backgroundBlendMode: "overlay",
          backgroundImage: `url(${sobrefoto})`,
        }}
      >
        <img
          src={logo}
          alt="logo marca do posto iargas"
          className="object-cover max-h-[100px]"
          loading="lazy"
        />
        <h2 className="text-white font-semibold rounded-sm text-center md:text-3xl md:w-[50%]">
          Descubra a trajetória de trabalho em equipe, conquista e perseverança
          que transformou o Iargas em um grande ecossistema que vai além de um
          posto.
        </h2>
        <Button variant="outline" className="rounded-3xl md:p-5">
          <a href="#" className="text-blue-900 font-bold md:text-lg">
            Quem Somos
          </a>
        </Button>
      </section>
    </>
  );
}
