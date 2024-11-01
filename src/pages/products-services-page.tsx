import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import imagemGasolina from "../assets/gasolina-imagem.jpg";
import imagemLubrificante from "../assets/foto-lubrificantes.png";
import imagemLavagemCarro from "../assets/foto-lavagem.png";
import imagemConveniencia from "../assets/foto-conveniencia.jpeg";
import imagemTrocaOleo from "../assets/foto-troca-oleo.jpg";

function ProductsAndServicesPage() {
  return (
    <>
      <section className=" flex flex-col gap-10 px-4 py-28  md:p-10 lg:px-40 lg:py-24">
        <div className="flex items-center justify-between">
          <h2 className="lg:text-4xl text-sm font-bold text-blue-900">
            Produtos e Serviços
          </h2>
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
                  Produtos e Serviços
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col gap-10 border-b-2 pb-10">
          <div className="lg:w-[600px] flex flex-col gap-4">
            <h2 className="text-3xl font-black text-blue-900">Produtos</h2>
            <p style={{ textAlign: "justify" }} className="text-sm font-medium">
              A Iargas atua com excelência nos quesitos qualidade e variedade de
              produtos oferecidos, além de almejar constantemente o
              aprimoramento dos serviços. Tudo pela satisfação de seus clientes.
            </p>
          </div>

          <div className="flex flex-col gap-2 items-start lg:flex-row lg:gap-8">
            <div className="lg:flex lg:gap-10">
              <img
                src={imagemGasolina}
                alt="Imagem Bomba de Combustível"
                className="mb-4 rounded-md lg:w-[500px] lg:h-[280px] shadow-lg"
              />
              <div>
                <p className="text-md font-black text-blue-900">
                  Combustíveis:
                </p>
                <div className="text-start">
                  <p className="font-medium">Gasolina</p>
                  <p className="font-medium">Gasolina Aditivada</p>
                  <p className="font-medium">Etanol</p>
                  <p className="font-medium">Diesel</p>
                  <p className="font-medium">Gás GLP</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={imagemLubrificante}
                  alt="Imagem Lubrificante"
                  className="rounded-md lg:w-[500px] lg:h-[280px] shadow-lg"
                />
                <p className="font-medium text-xl">Lubrificantes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-black text-blue-900">Serviços</h2>
            <p style={{ textAlign: "justify" }} className="text-sm font-medium">
              Confira os nossos serviços disponíveis abaixo.
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="flex flex-col items-center gap-2">
              <img
                src={imagemConveniencia}
                alt="Imagem Conveniência"
                className="rounded-md w-[400px] h-[250px] shadow-lg"
              />
              <p className="font-medium text-xl">Conveniência</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={imagemTrocaOleo}
                alt="Imagem Troca de óleo"
                className="rounded-md w-[400px] h-[250px] shadow-lg"
              />
              <p className="font-medium text-xl">Troca de Óleo</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={imagemLavagemCarro}
                alt="Imagem Lavagem de Carro"
                className="rounded-md w-[400px] h-[250px] shadow-lg"
              />
              <p className="font-medium text-xl">Lavagem de Carro</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsAndServicesPage;
