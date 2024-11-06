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
        <title>Home | Posto Iargas</title>
        <meta
          name="description"
          content="Bem vindo ao início de tudo, conheça o grupo iargas."
        />
        <meta name="keywords" content="posto, grupo, conveniência" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />

        <meta property="og:title" content="Home | Posto Iargas" />
        <meta
          property="og:description"
          content="Bem vindo ao início de tudo, conheça o Grupo Iargas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.grupoiargas.com.br/" />
        <meta property="og:image" content="../assets/logo-iargas.png" />
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
