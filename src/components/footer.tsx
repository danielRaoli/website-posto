import logotipo from "../assets/logo-iargas.png";
import logotipoFacebook from "../assets/logo-facebook.svg";
import logotipoInstagram from "../assets/logo-instagram.svg";
import smartphoneIcon from "../assets/smartphone-icon.svg";
import telephoneIcon from "../assets/telephone-icon.svg";
import ArrowRight from "../assets/arrow-right.svg";

function Footer() {
  return (
    <footer
      id="contato"
      className="flex flex-col items-center gap-4 bg-yellow-300 text-blue-900 "
    >
      <img
        src={logotipo}
        alt="Logotipo do Posto"
        className="mt-2 w-[200px] lg:w-[300px]"
      />

      <div className="flex flex-col gap-2 md:flex-row">
        <p className="font-black">ACESSO RÁPIDO</p>
        <div className="flex items-center gap-1 font-bold">
          <img src={ArrowRight} alt="Ícone de seta para a direita" />
          <a href="/" className="hover:translate-x-1 transition-all">
            Home
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <img src={ArrowRight} alt="Ícone de seta para a direita" />
          <a href="#" className="hover:translate-x-1 transition-all">
            Sobre Nós
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <img src={ArrowRight} alt="Ícone de seta para a direita" />
          <a href="#" className="hover:translate-x-1 transition-all">
            Serviços
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <img src={ArrowRight} alt="Ícone de seta para a direita" />
          <a href="#" className="hover:translate-x-1 transition-all">
            Conveniência
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center md:flex-row">
        <p className="font-black">FALE CONOSCO</p>
        <div className="flex items-center gap-1 font-bold">
          <img src={telephoneIcon} alt="Ícone telefone" />
          <p>(41) 3623-2259 | </p>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <img src={smartphoneIcon} alt="Ícone smartphone" />
          <p>(41) 98722-5498 |</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/iargas_posto_e_gas/"
            className="hover:scale-125 transition-all"
          >
            <img src={logotipoInstagram} alt="Logotipo do Instagram" />
          </a>
          <a
            href="https://www.facebook.com/p/Posto-Iargas-100084880777464/?locale=pt_BR"
            className="hover:scale-125 transition-all"
          >
            <img src={logotipoFacebook} alt="Logotipo do Facebook" />
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
