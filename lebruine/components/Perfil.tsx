import React from "react";
import Link from 'next/link';
import Image from "next/image";
import empresa from '../assets/imagem-empresa.jpg';
import pessoa from '../assets/imagem-pessoa.jpg';

const Perfil: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center justify-center gap-24">
                <div className="flex flex-col items-center">
                    <Image src={empresa} alt="empresa" className="mb-4" />
                    <Link href='cadastroCNPJ' className="border-2 border-red-600 rounded-lg p-2 items-center justify-center pb-3 hover:bg-red-600 hover:text-white hover:border-black">Sou uma empresa</Link>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={pessoa} alt="pessoa" className="mb-4" />
                    <Link href='cadastroCPF' className="border-2 border-red-600 rounded-lg p-2 items-center justify-center pb-3 hover:bg-red-600 hover:text-white hover:border-black">Sou uma pessoa</Link>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
