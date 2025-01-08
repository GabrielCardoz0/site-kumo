import logo from '../assets/logo192.png';
import logoFullWhite from '../assets/logo192white.png';
import { classNames } from '../utils';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const pathIsHome = ["/home", "/", ""].includes(location.pathname);

  return (
    <div
      className={classNames("flex w-full py-6 items-center justify-center md:gap-80", pathIsHome ? "bg-transparent text-white absolute top-0 z-20" : "")}
    >

      {open && <Sidebar handleClose={() => setOpen(false)} />}

      <div className='flex md:hidden absolute left-4'>
        <FaBars className={classNames("md:text-black", pathIsHome ? "text-white" : "text-gray-500")} size={16} onClick={() => setOpen(true)}/>
      </div>

      <div>
        <img src={pathIsHome ? logoFullWhite : logo} alt="logo" className="h-10 md:h-16" />
      </div>

      <ul className="hidden md:flex gap-8 uppercase text-sm">
        <li className="hover:underline"><Link to="/home">Home</Link></li>
        <li className="hover:underline"><Link to="/site-profissional">Site profissional</Link></li>
        <li className="hover:underline"><Link to="/servicos">Serviços</Link></li>
        <li className="hover:underline"><Link to="/contato">Contato</Link></li>
        <li className="hover:underline"><Link to="/sobre">Sobre</Link></li>
        <li className="hover:underline"><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
  );
}


export default Header;