import { AlignJustify } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

import logo from "@/assets/logo-iargas.png";
import { Link } from "react-router-dom";

interface Link {
  label: string;
  path: string;
}

function Navbar() {
  const links: Link[] = [
    { label: "Início", path: "/" },
    { label: "Sobre Nós", path: "/about" },
    { label: "Produtos e Serviços", path: "/products-services" },
  ];

  function navigateToSection(page: string, sectionId: string) {
    // Verifica se já está na rota correta
    if (window.location.pathname !== page) {
      // Navega para a página desejada com o ID
      window.location.href = `${page}#${sectionId}`;
    } else {
      // Caso já esteja na página, só rola até o elemento
      document
        .getElementById(sectionId)!
        .scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="flex flex-col w-full h-auto bg-yellow-300 fixed top-0 z-10">
      <div className="h-auto w-full flex justify-between py-2 px-4 md:px-10 relative">
        <img
          src={logo}
          alt="logo do posto"
          className="h-[45px] w-auto"
          loading="lazy"
        />
        <NavigationMenu className="w-full">
          <NavigationMenuList className="gap-7">
            {links.map((link) =>
              link.label === "Início" ? (
                <NavigationMenuItem className="hidden md:flex">
                  <NavigationMenuTrigger className="bg-transparent text-blue-900 font-semibold text-lg">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="px-10 py-4 bg-yellow-300 border-none">
                    <ul className="flex flex-col gap-3">
                      <li>
                        <a
                          href="javascript:void(0);"
                          onClick={() => navigateToSection("/", "local")}
                          className="text-blue-900 font-semibold hidden md:block"
                        >
                          Localização
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          onClick={() => navigateToSection("/", "depoimento")}
                          className="text-blue-900 font-semibold hidden md:block"
                        >
                          Depoimentos
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          onClick={() => navigateToSection("/", "contato")}
                          className="text-blue-900 font-semibold hidden md:block"
                        >
                          Contato
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                  <a
                    className="text-blue-900 font-semibold hidden md:block transition-all hover:scale-110"
                    href={link.path}
                  >
                    {link.label}
                  </a>
                </NavigationMenuItem>
              )
            )}
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
                  <a href={link.path} className="w-full">
                    <Button className="text-yellow-300 font-semibold bg-blue-900 w-full">
                      {link.label}
                    </Button>
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </NavigationMenu>
      </div>
      <div className="bg-blue-800 h-[15px] w-full"></div>
    </header>
  );
}

export default Navbar;
