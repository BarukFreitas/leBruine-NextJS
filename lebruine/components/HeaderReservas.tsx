import React from 'react';
import Image from 'next/image';
import logo from '../assets/le-Bruine-logo.png';
import Link from 'next/link';

const HeaderReservas: React.FC = () => {
  return (
    <div className="bg-red-600 text-white w-auto h-24 flex items-center justify-between px-20 gap-2">
      <div>
        <div className="invisible">
          <Image src={logo} alt="logo" width={120} height={80} />
        </div>
      </div>
      <Link href="/" passHref>
        <div className="">
          <Image src={logo} alt="logo" width={120} height={80} />
        </div>
      </Link>
      <div className="flex gap-4">
        <Link href="/" passHref>
          <div className=" text-red-600 font-semibold w-auto p-3 h-12 flex justify-center  bg-white rounded-md border-2 border-transparent hover:text-white hover:bg-red-600 hover:border-white items-center">
            Sair
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderReservas;
