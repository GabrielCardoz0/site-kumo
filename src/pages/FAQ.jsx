import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FAQImage from "../assets/faq.svg";

const FAQList = [
  {
    title: "O que significa desenvolvimento sob demanda?",
    description: "Desenvolvimento sob demanda é a criação de soluções personalizadas para atender às necessidades específicas do seu negócio. Trabalhamos de forma colaborativa para entender seus objetivos e entregar uma aplicação que se alinha perfeitamente ao que você precisa.",
  },
  {
    title: "Que tipo de tecnologias vocês utilizam?",
    description: "Trabalhamos com tecnologias modernas e ágeis como React, Next, Nest, Typescript e tailwind  para desenvolvimento de aplicações web, postgresql para banco de dados escalável, Node para automações avançadas e outras ferramentas inovadoras que aceleram o desenvolvimento e garantem qualidade.",
  },
  {
    title: "É possível integrar as soluções desenvolvidas com outras ferramentas ou sistemas que já utilizamos?",
    description: "Sim! Especializamos em criar integrações com APIs e sistemas já existentes, garantindo que sua solução funcione perfeitamente com o que você já utiliza, seja ERP, CRM ou outras ferramentas.",
  },
  {
    title: "Vocês desenvolvem apenas aplicativos e sistemas ou oferecem suporte após o projeto?",
    description: "Além do desenvolvimento, oferecemos suporte e manutenção após a entrega para garantir o funcionamento contínuo da sua solução. Também podemos ajudar em atualizações ou melhorias futuras.",
  },
  {
    title: "Qual é o prazo médio para desenvolver uma solução personalizada?",
    description: "Sites profissionais personalizado em média 5 dias, mas o prazo para outras ideias depende da complexidade do projeto, mas trabalhamos para garantir entregas rápidas e eficientes. Em média, projetos simples podem ser concluídos em 4 a 8 semanas, enquanto projetos mais complexos podem levar mais tempo.",
  },
  {
    title: "O que diferencia a Kumo Tecnologia de outras empresas?",
    description: "Nosso foco está na qualidade, inovação, personalização e agilidade na entrega a um preço mais acessível. Com tecnologias eficientes e 100% customizáveis com fácil manutenção, entregamos soluções mais rápidas e acessíveis, sem abrir mão da qualidade. Além disso, atuamos como parceiros estratégicos, ajudando a encontrar a melhor abordagem para cada desafio.",
  },
  {
    title: "Como posso acompanhar o progresso do meu projeto?",
    description: "Mantemos uma comunicação transparente e frequente durante todo o desenvolvimento. Nosso time estará sempre em contato para que você possa acompanhar o andamento e fornecer feedback em tempo real.",
  },
];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 only-fade-in-up">

      <div className="w-full">
        <Banner title="FAQ - (Perguntas frequentes)" showlogo={false} />
      </div>

      <div className="flex gap-16 w-full max-w-7xl relative px-8 md:px-0 flex-col md:flex-row">
        <div className="w-full">
          <h1 className="w-full max-w-6xl text-4xl text-gray-700 mb-10">Perguntas frequentes</h1>

          <ul className="flex flex-col gap-4 max-w-6xl w-full">
            {FAQList.map((item, index) => (<FAQItem key={index} title={item.title} description={item.description} />))}
          </ul>
        </div>

        <div className="w-full max-w-xl h-auto">
          <img src={FAQImage} alt="Ilustração de perguntas frequentes" className="w-full" />
        </div>
      </div>

      
    </div>
  )
};


function FAQItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="border-b-2 py-2 flex flex-col gap-3">
      <div className="flex justify-between items-center cursor-pointer gap-4" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-gray-600 font-medium w-full">{title}</div>
          { isOpen ? <FaChevronUp size={16}/> : <FaChevronDown size={16} /> }
      </div>

      {isOpen && <p className="text-gray-600 text-sm">{description}</p>}
    </li>
  )
  
}