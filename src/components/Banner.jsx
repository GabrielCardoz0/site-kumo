import logo from "../assets/logo192white.png";
import defaultBannerImage from "../assets/banner.jpg";
import { useEffect, useState } from "react";
import { classNames } from "../utils";

export default function Banner({ showlogo = true, title = "", bannerImage = defaultBannerImage }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500 opacity-35"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-45"></div>
      <div className="w-full flex flex-col justify-center items-center gap-6 px-8 h-[200px] md:h-auto" style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
        <div className="z-10 flex flex-col justify-center items-center gap-6 w-full max-w-6xl" >
          <p className="text-center">&nbsp;</p>
          <p className="text-center">&nbsp;</p>
          <p className="text-center">&nbsp;</p>
          {
            showlogo &&
            <p className="text-center">
              <img src={logo} className={classNames("z-10", isMobile ? "h-10" : "")} alt="" />
            </p>
          }
          <p className="text-center">&nbsp;</p>
          <p className="font-medium text-5xl text-gray-50 w-full">{title}</p>
          <p className="text-center">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}