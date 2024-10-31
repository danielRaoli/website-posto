import {
  ArrowRight,
  Phone,
  Smartphone,
} from "lucide-react";
import logotipo from "../assets/logo-iargas.png";
import logoInstagram  from "../assets/logo-instagram.svg";
import logoFacebook  from "../assets/logo-facebook.svg";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-yellow-300 text-blue-900 ">
      <img src={logotipo} alt="Logotipo do Posto" className="mt-2" />

      <p className="font-black">ACESSO RÁPIDO</p>
      <div>
        <div className="flex items-center gap-1 font-bold">
          <ArrowRight size={18} />
          <a href="/" className="hover:translate-x-1 transition-all">
            Home
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <ArrowRight size={18} />
          <a href="#" className="hover:translate-x-1 transition-all">
            Sobre Nós
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <ArrowRight size={18} />
          <a href="#" className="hover:translate-x-1 transition-all">
            Serviços
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <ArrowRight size={18} />
          <a href="#" className="hover:translate-x-1 transition-all">
            Conveniência
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <p className="font-black">FALE CONOSCO</p>
        <div className="flex items-center gap-1 font-bold">
          <Phone size={18} />
          <p>(41) 3623-2259</p>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <Smartphone size={18} />
          <p>(41) 98722-5498</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://www.instagram.com/iargas_posto_e_gas/">
           <img src={logoInstagram} alt="Logo Instagram"/>
          </a>
          <a href="https://www.facebook.com/p/Posto-Iargas-100084880777464/?locale=pt_BR">
            <img src={logoFacebook} alt="Logo Facebook" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center border-t-2 border-blue-900 w-full p-4 font-bold">
        <p>© 2024 Posto Iargas.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
