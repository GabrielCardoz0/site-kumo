import { Link } from "react-router-dom";
import ImageHover from "./ImageHover";

export default function ServiceItem({ img_url, title, description }) {

  return (
    <div className="bg-white rounded-md md:w-[350px] flex flex-col gap-4 md:h-[450px] items-center relative">
      <ImageHover url={img_url} className={"rounded-none cursor-pointer h-40 md:h-[180px] w-full rounded-t-md"} />
      
      <p className="text-gray-700 font-medium text-xl md:text-2xl text-center">{title}</p>

      <div className="w-20 h-0.5 bg-orange-500"></div>

      <div className="px-4">
        <p className="text-gray-600 text-start max-w-full text-sm">{description}</p>
      </div>

      <Link to="/servicos" className="bg-orange-500 rounded-sm py-2 px-6 text-white hover:opacity-80 md:absolute md:bottom-4 mb-4 md:mb-0">Saiba mais</Link>
    </div>
  )
}
