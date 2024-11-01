import icon from "@/assets/whatsapp-svgrepo-com.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function ButtonWhatsApp() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="fixed bottom-10 right-10">
            <a href="https://api.whatsapp.com/send?phone=5541987225498&text=Ola">
              <img
                src={icon}
                alt="logo whatsapp"
                className="max-h-[40px] z-10"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <p>Nosso Contato</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
