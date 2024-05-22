import React from "react";
import Link from 'next/link';
import Image from "next/image";
import empresa from '../assets/imagem-empresa.jpg';
import pessoa from '../assets/imagem-pessoa.jpg';

const Perfil: React.FC = () => {
    return (
            <div className="min-h-[70vh] flex items-center justify-center pt-64 gap-24">
                <div>
                    <Image src={empresa} alt="empresa" />
                    <Link href='cadastroCNPJ' className="border-2 border-red-600 rounded-lg p-2 items-center justify-center pb-3 hover:bg-red-600 hover:text-white hover:border-black">Sou uma empresa</Link>
                </div>
                <div>
                    <Image src={pessoa} alt="pessoa" />
                    <Link href='cadastroCPF' className="border-2 border-red-600 rounded-lg p-2 items-center justify-center pb-3 hover:bg-red-600 hover:text-white hover:border-black">Sou uma pessoa</Link>
                </div>
            </div>
    );
}

export default Perfil;
