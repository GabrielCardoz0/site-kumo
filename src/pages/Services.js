import { useEffect } from "react";
import Banner from "../components/Banner";
import ImageHover from "../components/ImageHover";
import { servicesList } from "../data/index";
import QuoteRequestCallToAction from "../components/QuoteRequestCallToAction";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 only-fade-in-up">

      <div className="w-full">
        <Banner title="Serviços" showlogo={false} />
      </div>

      <h1 className="w-full max-w-6xl text-4xl text-gray-700 px-8 md:px-0">Nossos serviços</h1>

      <div className="flex flex-col gap-8 max-w-6xl w-full px-8 md:px-0">
        {servicesList.map((item, index) => (
          <ServiceItem key={index} img_url={item.img_url} title={item.title} largeDescription={item.largeDescription} />
        ))}
      </div>

      <QuoteRequestCallToAction />

    </div>
  )
};


function ServiceItem({ img_url, title, largeDescription}) {

  return (
    <div className="flex gap-12 items-center py-8 border-b-[1px] flex-col md:flex-row ">

      <ImageHover url={img_url} className={"cursor-pointer h-44 w-[400px] rounded-none"} />

      <div className="flex flex-col gap-4"> 
        <h1 className="text-gray-700 font-medium text-xl md:text-2xl">{title}</h1>

        <p className="text-gray-600 max-w-[600px] text-sm">{largeDescription}</p>
      </div>
      
    </div>
  )
}