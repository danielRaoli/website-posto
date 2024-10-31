import { BannerSection } from "@/components/bannersection";
import { LocalSection } from "@/components/localsection";

import { HomeSobre } from "@/components/homesobresection";
import { DepoimentosSection } from "@/components/depoimentosection";
import { HomeServico } from "@/components/homeservico";

function HomePage() {
  return (
    <>
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
