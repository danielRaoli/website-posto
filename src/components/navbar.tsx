import { AlignJustify } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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

import logo from "@/assets/logoposto.png";

interface Link {
  label: string;
  path: string;
}

function Navbar() {
  const links: Link[] = [
    { label: "Sobre Nós", path: "/about" },
    { label: "Produtos e Serviços", path: "/produtcs" },
    { label: "Conveniência", path: "/store" },
  ];

  return (
    <header className="flex flex-col w-full h-auto bg-yellow-300">
      <div className="h-auto w-full flex justify-end py-3 px-4 relative">
        <img
          src={logo}
          alt=""
          className="h-[60px] w-auto absolute left-4 top-[0]"
        />
        <NavigationMenu className="w-full">
          <NavigationMenuList className="gap-3">
            {links.map((link) => (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink asChild>
                  <a
                    href={link.path}
                    className="text-blue-900 font-semibold hidden"
                  >
                    {link.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <AlignJustify className="text-blue-900" />
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
                  <Button
                    key={link.path}
                    className="text-yellow-300 font-semibold bg-blue-900"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </NavigationMenu>
      </div>
      <div className="bg-blue-800 h-[20px] w-full"></div>
    </header>
  );
}

export default Navbar;
