import { FaTimes } from 'react-icons/fa';
import logo from '../assets/logo192.png';

export default function Sidebar({ handleClose }) {
  return (

      <div className='fixed left-0 top-0 w-full h-screen z-30 flex'>
        <div className='bg-white w-2/3 h-full p-4 relative'>
          <div>
            <img src={logo} alt="logo" className="h-10 mb-8" />
          </div>

          <div className='w-full gap-4 flex flex-col text-gray-700 font-medium'>
            <a onClick={handleClose} className="underline" href="/home">Home</a>
            <a onClick={handleClose} className="underline" href="/sobre">Sobre</a>
            <a onClick={handleClose} className="underline" href="/servicos">Serviços</a>
            <a onClick={handleClose} className="underline" href="/contato">Contato</a>
            <a onClick={handleClose} className="underline" href="/faq">FAQ</a>
            <a onClick={handleClose} className="underline" href="/site-barato">Site por 1.199</a>
          </div>

          <div className="text-gray-900 text-xs self-end py-4 absolute bottom-0 left-0 text-center">
            <p className="mb-2">© 2024 Kumo Tecnologia. Todos os direitos reservados.</p>
            <p>Desenvolvido por Kumo Tecnologia</p>
          </div>
        </div>

        <div className='w-1/3 h-full bg-gray-800 bg-opacity-80'>
          <FaTimes className='text-white absolute top-4 right-4' size={24} onClick={handleClose} />
        </div>

      </div>
  )
};
