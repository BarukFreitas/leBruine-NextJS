import React from 'react';
import Image from 'next/image';
import logo from '../assets/le-Bruine-logo.png';
import lupa from '../assets/lupa.svg';
import loginIcon from '../assets/login-ico.svg';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="bg-red-600 text-white h-24 flex items-center justify-between px-4">
      <Link href="/" passHref>
        <div className="flex-shrink-0 cursor-pointer">
          <Image src={logo} alt="logo" width={120} height={80} />
        </div>
      </Link>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Busque por restaurante, comida, cidade..."
          className="w-96 h-12 bg-white text-black text-base px-2 mr-4 rounded-md focus:outline-none"
          id="searchBar"
        />
        <button className="w-16 h-12 bg-red-800 rounded-md hover:bg-red-900 flex justify-center">
          <Image src={lupa} alt="lupa" />
        </button>
      </div>
      <div className="flex gap-4">
        <Link href="#" passHref>
          <div className="text-white font-semibold w-32 h-12 flex justify-center rounded-md items-center hover:bg-red-900">Fazer Reserva</div>
        </Link>
        <Link href="#" passHref>
          <div className="text-white font-semibold w-32 h-12 flex justify-center rounded-md items-center hover:bg-red-900">Minhas Reservas</div>
        </Link>
        <Link href="#" passHref>
          <div className="text-white font-semibold w-32 h-12 flex justify-center rounded-md items-center hover:bg-red-900">Restaurantes</div>
        </Link>
      </div>
      <Link href="/Contact" passHref>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-red-900 w-20 h-12 rounded-md">
          <Image src={loginIcon} alt="icone de login" width={24} height={24} />
          <p className="text-base font-semibold">Login</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
