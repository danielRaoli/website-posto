import { BannerSection } from "@/components/bannersection";
import { LocalSection } from "@/components/localsection";

import { HomeSobre } from "@/components/homesobresection";
import { DepoimentosSection } from "@/components/depoimentosection";
import { HomeServico } from "@/components/homeservico";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Posto Iargas, Abastecimento e Conveniência</title>
        <meta
          name="description"
          content="Conheça os serviços e produtos do grupo Iargas, abastecimento convêniencia e muito mais"
        />
        <meta
          name="keywords"
          content="posto, produtos, conveniência, serviços"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.grupoiargas.com.br/" />

        <meta property="og:title" content="Home | Posto Iargas" />
        <meta
          property="og:description"
          content="Conheça os serviços e produtos do grupo Iargas"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grupoiargas.com.br/" />
        <meta
          property="og:image"
          content="https://www.grupoiargas.com.br/src/assets/logo-iargas.png"
        />
      </Helmet>
      <main className="w-full h-full mt-14">
        <BannerSection />
        <LocalSection />
        <HomeSobre />
        <DepoimentosSection />
        <HomeServico />
      </main>
    </>
  );
}

export default HomePage;
