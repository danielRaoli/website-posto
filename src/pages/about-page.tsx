import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import logotipo from "../assets/logo-iargas.png";
import ImagemPosto from "../assets/foto-pessoal.png";

function AboutPage() {
  return (
    <>
      <section className="flex flex-col gap-10 px-4 py-28  md:p-10 lg:px-40 lg:py-24">
        <div className="flex items-center justify-between">
          <h2 className="lg:text-4xl text-2xl font-bold text-blue-900">Quem somos?</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-semibold">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="font-semibold">
                  Sobre Nós
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="lg:flex lg:gap-8">
          <div className="flex flex-col lg:flex">
            <div className="flex flex-col items-center gap-4 mb-4 lg:items-start max-w-[400px]">
              <h2 className="text-3xl font-black text-blue-900">A Iargas</h2>
              <p
                style={{ textAlign: "justify" }}
                className="text-sm font-medium"
              >
                Está há mais de 25 anos entendendo sua família. Abastecemos sua
                jornada com combustível de qualidade. Gasolina comum e
                aditivada, etanol, diesel e gás GLP.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 mb-4 lg:items-start max-w-[400px]">
              <h2 className="text-3xl mb-2 font-black text-blue-900">
                Nosso Objetivo
              </h2>
              <p
                style={{ textAlign: "justify" }}
                className="text-sm font-medium"
              >
                Somos movidos pelo compromisso de fornecer energia que inspira e
                transforma. Reduzimos distâncias e promovemos conexões,
                abastecendo não apenas o tanque de combustível, mas também o
                bem-estar, a motivação e o espírito humano. Nosso espaço é
                dedicado a revitalizar tanto o corpo quanto a mente,
                incentivando interações significativas e oferecendo um ponto de
                encontro onde conforto, segurança e hospitalidade se unem para
                tornar cada parada memorável.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 mb-4 lg:items-start max-w-[500px]">
              <h2 className="text-3xl mb-2 font-black text-blue-900">
                Serviços e Produtos
              </h2>
              <p
                style={{ textAlign: "justify" }}
                className="text-sm font-medium"
              >
                Abastecimento, troca de óleo e lavagem de veículos Loja de
                conveniência: Aqui você encontra, bebidas, gelo, sorvetes,
                carvão, guloseimas, aditivos para todos os tipos de veículos e
                muito mais. Venha conhecer!
              </p>
              <Button className="bg-transparent font-semibold text-blue-900 border-2 rounded-full hover:bg-gray-200 w-28">
                Ver Mais
              </Button>
            </div>
          </div>

          <div className="lg:flex lg:gap-10 lg:justify-center lg:w-full">
            <div className="flex flex-col items-center gap-4 mb-4">
              <img
                src={logotipo}
                alt="Logo Posto de Gasolina"
                className="w-[250px] lg:hidden"
              />
              <img
                src={ImagemPosto}
                alt="Imagem Posto de Gasolina"
                className="w-[400px] rounded-md"
              />

              <p
                style={{ textAlign: "justify" }}
                className="text-sm font-medium max-w-[400px]"
              >
                Conheça a Iargas! Com mais de 25 anos de experiência no
                mercado de combustíveis, somos reconhecidos por nosso
                compromisso com a excelência e dedicação ao cliente. Oferecemos
                serviços de alta qualidade que têm conquistado a confiança de
                milhares de clientes, que recomendam e aprovam a Iargas como uma
                referência no setor. Nosso objetivo é superar suas expectativas
                e proporcionar uma experiência de atendimento que você merece.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 mb-4">
              <h2 className="text-3xl mb-2 font-black text-blue-900">
                Nossos Valores
              </h2>
              <div className="text-xl flex flex-col gap-2">
                <p>1° Excelência</p>
                <p>2° Transparência</p>
                <p> 3° Comprometimento</p>
                <p>4° Confiança</p>
                <p>5° Ética</p>
                <p>6° Bem Estar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
