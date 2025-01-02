import ServiceItem from "../components/ServiceItem";
import QuoteRequestCallToAction from "../components/QuoteRequestCallToAction";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { servicesList, homeImages } from "../data/index";
import HomeImage from "../components/HomeImage";

export default function Home(params) {

  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: false,
    fade: true,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="only-fade-in-up">
      <Slider {...settings}>
        {
          homeImages.map((item, index) => <HomeImage key={index} item={item} index={index} activeIndex={activeIndex} />)
        }
      </Slider>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center p-8 md:px-24 my-10 md:my-16 gap-10 text-gray-600 max-w-6xl">
          <p>
          Somos a Kumo, uma empresa de tecnologia que te ajuda a transformar ideias em soluções digitais com <b>agilidade</b>, <b>inteligência</b> e <b>preços acessíveis</b>. Nossa paixão por inovação nos mantém sempre à frente, entregando resultados que fazem diferença, utilizando as melhores tecnologias do mercado. Queremos fazer parte do seu crescimento, te ajudando a atingir o potencial máximo de suas ideias dentro do mundo digital. Contamos com uma equipe altamente qualificada, pronta para oferecer uma experiência excepcional em todas as etapas do atendimento à entrega do projeto.
          </p>

          <p className="text-2xl md:text-3xl text-orange-500">Serviços</p>
        </div>

        <ServicesList services={servicesList} />

        <QuoteRequestCallToAction />
      </div>
    </div>
  );
};


function ServicesList({ services }) {
  return (
    <div className="flex flex-col items-center gap-10 bg-orange-500 md:px-10 px-8 py-12 w-full">
      <p className="text-2xl md:text-3xl text-white">Conheça nossos serviços</p>
      <div className="flex flex-col md:flex-row gap-10">
        {
          services.map((service, index) => <ServiceItem key={index} {...service} />)
        }
      </div>
    </div>
  )
};

