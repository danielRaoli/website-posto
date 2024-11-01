import { AlignJustify } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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

interface Link {
  label: string;
  path: string;
}

function Navbar() {
  const links: Link[] = [
    { label: "Sobre Nós", path: "/about" },
    { label: "Produtos e Serviços", path: "/products-services" },
    { label: "Conveniência", path: "/store" },
  ];

  return (
    <header className="flex flex-col w-full h-auto bg-yellow-300 fixed top-0 z-10">
      <div className="h-auto w-full flex justify-between py-2 px-4 md:px-10 relative">
        <img src={logo} alt="" className="h-[45px] w-auto" />
        <NavigationMenu className="w-full">
          <NavigationMenuList className="gap-3">
            {links.map((link) => (
              <NavigationMenuItem>
                <a
                  className="text-blue-900 font-semibold hidden md:block"
                  href={link.path}
                >
                  {link.label}
                </a>
              </NavigationMenuItem>
            ))}
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
                  <Button className="text-yellow-300 font-semibold bg-blue-900">
                    {link.label}
                  </Button>
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
