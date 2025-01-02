import { FaFacebook, FaInstagram } from "react-icons/fa";
import Line from "./Line";
import Banner from "./Banner";
import { servicesList } from "../data";
import footerImage from "../assets/banner_footer.jpg";
import { Link } from "react-router-dom";

export default 
function Footer() {
  return (
    <div>
      <div className="w-full h-[50px]"></div>

      <Banner bannerImage={footerImage} />

      <div className="w-full flex justify-center">

        <div className="text-gray-500 py-8 flex flex-col md:flex-row md:justify-between w-full max-w-6xl gap-16 md:gap-0">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl">Institucional</p>

            <Line />

            <ul style={{ listStyle: "initial" }}>
              <li className="underline"><Link to="/home">Home</Link></li>
              <li className="underline"><Link to="/sobre">Sobre</Link></li>
              <li className="underline"><Link to="/servicos">Serviços</Link></li>
              <li className="underline"><Link to="/contato">Contato</Link></li>
              <li className="underline"><Link to="/faq">FAQ</Link></li>
              <li className="underline"><Link to="/site-barato">Site por 1.199</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <p className="text-2xl">Serviços</p>

            <Line />

            <ul style={{ listStyle: "initial" }}>
              {
                servicesList.map((item, index) => (<li key={index} >{item.title}</li>))
              }
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 ">
            <p className="text-2xl">Contato</p>

            <Line />

            <ul style={{ listStyle: "initial" }}>
              <li>(11) 99467-8867</li>
              <li>contato@kumotecnologia.com</li>
              <li>
                Redes sociais
                <ol>
                  <li className="flex gap-2 items-center"> <FaInstagram /> @kumotecnologia</li>
                  <li className="flex gap-2 items-center"> <FaFacebook /> kumo tecnologia</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>


      </div>

      <div className="bg-orange-500 text-white py-12 text-sm">
        <p className="text-center mb-2">© 2024 Kumo Tecnologia. Todos os direitos reservados.</p>
        <p className="text-center">Desenvolvido por Kumo Tecnologia</p>
      </div>
    </div>
  )
}
