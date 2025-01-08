
import { useEffect } from "react";
import site399img from "../assets/site399.png";
import Button from "../components/Button";
import { redirectToWhatsapp } from "../utils";

const steps = [
  {
    title: "NEGOCIAÇÃO / DÚVIDAS",
    description: `Legal, você nos encontrou na internet ou foi indicado por um amigo. Aqui esclarecemos suas dúvidas sobre o site, recursos disponíveis, prazo de entrega e formas de pagamento que poderá ser em até 12x no cartão de crédito.`,
  },
  {
    title: "CONTRATAÇÃO / ENVIO DE DADOS",
    description: `Agora você já se decidiu e vai iniciar o processo rumo ao sucesso na internet. Aqui você já sabe exatamente qual produto vai contratar, terá acesso ao contrato de prestação de serviços, meios de pagamento e poderá enviar os dados da sua empresa por meio do briefing que é um formulário de cadastro.`,
  },
  {
    title: "DESIGN / DESENVOLVIMENTO",
    description: `Agora que já contratou seu projeto é só esperar a prévia! Nosso time de desenvolvedores e designers especializados vão te surpreender em breve com um lindo projeto.`,
  },
  {
    title: "APRESENTAÇÃO / CUSTOMIZAÇÃO",
    description: `Pronto! Você recebeu o link prévio do seu projeto e agora pode analisar com calma e sugerir mudanças de textos, fotos, telefones, endereço, etc. Não tenha pressa e analise tudo com calma, pois esse é o início do seu sucesso na internet.`,
  },
  {
    title: "APROVAÇÃO / PUBLICAÇÃO",
    description: `Olha que notícia boa. Seu projeto está aprovado e agora será publicado / entregue no seu domínio: "www.suaempresa.com.br". Agora basta esperar que logo publicaremos seu site e você poderá alavancar suas vendas online o mais breve possível.`,
  },
  {
    title: "AGORA É SÓ APROVEITAR",
    description: `Agora é só curtir o seu novo site totalmente responsivo, e 100% otimizado para o SEO do Google. Parabéns e sucesso! Espero que tenha gostado da experiência e nos indique para seus amigos.`,
  },
]

export default function Site399() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 text-gray-600 only-fade-in-up">

      <div className="w-full h-[700px] flex items-center bg-orange-500">
        <Design />

        <div className="w-full h-full relative hidden md:block">
          <Image />
        </div>
      </div>
      
      <div className="my-12 flex flex-col items-center gap-8 max-w-6xl px-8 md:px-0">
        <h1 className="text-2xl font-medium text-center">Criação de site profissional com benefícios exclusivos feitos para você economizar.</h1>

        <div className="flex gap-4 md:gap-12 md:flex-row flex-col">
          <ul className="list-disc md:text-lg flex flex-col gap-4">
            <li>Design moderno e responsivo</li>
            <li>Otimizado para SEO do Google</li>
            <li>Entrega rápida em 5 dias</li>
          </ul>
          <ul className="list-disc md:text-lg flex flex-col gap-4">
            <li>Parcelamento em até 12x no cartão</li>
            <li>Entrega rápida e garantida</li>
            <li>Suporte técnico gratuito por 1 mês</li>
          </ul>


        </div>

        <h1 className="text-2xl font-medium">É muito simples contratar um site com a gente:</h1>

        <ul className="md:grid md:grid-cols-3 gap-4 flex flex-col">
        {steps.map((step, index) => (
          <StepItem key={index} index={index} title={step.title} description={step.description} />
        ))}
      </ul>

      <div className="py-8">
        <Button
          onClick={() => redirectToWhatsapp("Olá, eu gostaria de um site profissional!")}
        >Contrate agora!</Button>
      </div>

        <h1 className="text-2xl font-medium text-center">São diversas vantagens por um preço exclusivo.</h1>
      </div>

    </div>
  )
};

function StepItem({ title, description, index }) {
  return (
    <li className="py-4 px-8 h-[300px] md:h-[270px] rounded-md bg-gray-400 text-white">
      <h2 className="text-lg lowercase font-medium mb-4">{index+1}. {title}</h2>
      <p className="">{description}</p> 
    </li>
  ) 
}


function Design(params) {
  return (
    <div className="w-full flex flex-col justify-center items-center px-10 gap-8">

      <h1 className="text-5xl md:text-7xl font-semibold text-white text-center">
        Criação de site profissional
      </h1>

      <div className="flex text-white gap-1">
        <p className="text-xl font-semibold text-white">R$</p>
        <p className="text-7xl md:text-9xl font-semibold text-white">1.199</p>
        <p className="self-end text-justify text-xl">parcelado <br/><b> em até 12x.</b></p>
      </div>

      <h3 className="text-2xl md:text-4xl text-center max-w-xl font-light text-white">
        <b className="font-medium">Entrega em 5 dias</b> totalmente otimizado para o Google, com <b className="font-medium">design moderno, responsivo e profissional</b>
      </h3>

    </div>
  )
}

function Image() {
  return (
    <>
      <div
        className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${site399img})`,
          backgroundSize: 'cover'
        }}
      ></div>
    </>
  )
}