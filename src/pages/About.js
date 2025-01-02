import { useEffect } from "react";
import AboutItem from "../components/AboutItem";
import Banner from "../components/Banner";

const aboutItensList = [
  {
    title: "Quem somos",
    description: `Fundada em 2024, a Kumo Tecnologia é uma empresa brasileira criada para transformar ideias em soluções digitais reais. Desde o início, nosso propósito tem sido ajudar empresas e empreendedores a alcançar um lugar dentro do mundo digital. Trabalhamos com tecnologias de ponta, e uma abordagem personalizada, para garantir que cada cliente receba soluções sob medida, que atendam às suas necessidades e objetivos, o que nos torna o parceiro ideal para impulsionar seu crescimento.`,
  },
  {
    title: "Nossa missão",
    description: `Nossa missão é entregar soluções com tecnologia que atendam às suas demandas, e que também transformem negócios e ideias em verdadeiros cases de sucesso. Acreditamos que a tecnologia é uma ferramenta poderosa para superar desafios e alcançar resultados extraordinários. Por isso, nos dedicamos a tornar a transformação digital acessível, eficiente e inovadora para empreendedores e empresas de todos os portes e setores.`,
  },
  {
    title: "O que nos move",
    description: `Nossa paixão por inovação é o que nos impulsiona a entregar sempre o melhor. Estamos constantemente atualizados com as mais recentes tendências e tecnologias para garantir que nossos clientes estejam sempre um passo à frente. Além disso, prezamos pela:\n
    - **Excelência em Atendimento**: Cada projeto é tratado com atenção aos mínimos detalhes, desde o primeiro contato até a entrega final.\n
    - **Compromisso com Resultados**: Buscamos desenvolver soluções que gerem impacto real, otimizem processos e aumentem a eficiência.\n
    - **Parceria e Confiança**: Acreditamos que construir uma relação sólida com nossos clientes é essencial para alcançar o sucesso em conjunto.`,
  },
  {
    title: "Nossa Equipe",
    description: `Na Kumo, contamos com uma equipe composta por especialistas apaixonados por tecnologia e comprometidos em entregar excelência em cada projeto. Nosso time reúne profissionais experientes, criativos e motivados, prontos para superar desafios e criar soluções personalizadas que se alinhem às metas dos nossos clientes. Trabalhamos de forma colaborativa, garantindo inovação, qualidade e um atendimento diferenciado em todas as etapas do desenvolvimento.`,
  },
  {
    title: "Nosso Propósito",
    description: `Nosso maior propósito é ser mais do que um fornecedor de tecnologia; queremos ser parceiros estratégicos no crescimento do seu negócio. Estamos aqui para oferecer soluções digitais que acompanhem o ritmo das suas ideias e que permitam que você explore todo o seu potencial no ambiente online. Nosso objetivo é criar uma ponte entre a sua visão e o mundo digital, ajudando você a conquistar novos mercados, otimizar processos e alcançar resultados que realmente fazem a diferença.`,
  },
];


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 only-fade-in-up">

      <div className="w-full">
        <Banner title="Sobre" showlogo={false} />
      </div>

      <h1 className="w-full max-w-6xl text-4xl text-gray-700 px-8 md:px-0">Sobre a Kumo</h1>

      <div className="flex flex-col gap-12 max-w-6xl mb-12 px-8 md:px-0">
        {aboutItensList.map((item, index) => (
          <AboutItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
};



