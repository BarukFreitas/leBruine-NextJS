import React from 'react';
import Image from 'next/image';
import logo from '../assets/le-Bruine-logo.png';
import lupa from '../assets/lupa.svg';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="bg-red-600 text-white w-auto h-24 flex items-center justify-between px-20 gap-2">
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
        <button className="w-16 h-12 bg-red-800 rounded-md hover:bg-red-900 flex justify-center items-center">
          <Image src={lupa} alt="lupa" />
        </button>
      </div>
      <div className="flex gap-4">
        <Link href="/selecionarPerfil" passHref>
          <div className=" text-red-600 font-semibold w-auto p-3 h-12 flex justify-center  bg-white rounded-md border-2 border-transparent hover:text-white hover:bg-red-600 hover:border-white items-center">Criar conta</div>
        </Link>
        <Link href="/login" passHref>
          <div className=" text-white font-semibold w-auto p-3 h-12 flex justify-center border-white border-2 bg-red-600 rounded-md hover:text-red-600 hover:bg-white hover:border-white items-center">Entrar</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
