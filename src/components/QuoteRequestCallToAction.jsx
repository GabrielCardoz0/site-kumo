import orcamentoImg from "../assets/orcamento.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function QuoteRequestCallToAction() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-20 py-20 w-full justify-center p-8">
      <img src={orcamentoImg} alt="orcamento" className="md:h-[400px]" />

      <div className="flex flex-col items-center gap-10">
        <p className="text-3xl font-medium text-orange-500">Solicite um orçamento</p>

        <p className="text-center max-w-[500px]  text-gray-600">Nós queremos fazer parte do seu crescimento com soluções inovadores e te ajudar a atingir o potencial máximo de suas ideias dentro do mundo digital. Clique abaixo e saiba como podemos contribuir para o seu objetivo.</p>

        <Link to="/contato" className="bg-orange-500 rounded-sm py-2 px-6 text-white font-medium">Solicitar agora</Link>
      </div>

    </div>
  );
}

