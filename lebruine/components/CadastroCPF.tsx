import React from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from '../assets/le-bruine-logo-vermelho.svg';

const CadastroCPF: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center pb-10 pt-32">
            <div className="flex flex-col justify-center items-center">
                <Image src={logo} alt="logo" className="h-12 w-48" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input className="flex-grow" type="text" name="nome" id="nome" maxLength={255} placeholder="Informe seu nome completo" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input className="flex-grow" type="text" name="cpf" id="cpf" maxLength={11} placeholder="Informe o CPF" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input className="flex-grow" type="email" name="email" id="email" maxLength={255} placeholder="Informe o e-mail" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input className="flex-grow" type="text" name="endereco" id="endereco" maxLength={255} placeholder="Informe o endereço" />
            </div>
            <div className="flex items-center gap-2 w-80 mt-8">
                <div className="w-2/3 border-2 border-red-600 rounded-lg">
                    <input className="flex items-center p-1 gap-2 w-full rounded-lg" type="text" maxLength={60} name="bairro" id="bairro" placeholder="Informe seu bairro" />
                </div>
                <div className="w-1/3 border-2 border-red-600 rounded-lg">
                    <input className="flex items-center p-1 gap-2 w-full rounded-lg" type="text" name="numero" maxLength={4} id="numero" placeholder="Número" />
                </div>
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input className="flex-grow" type="text" name="telefone" id="telefone" maxLength={11} placeholder="Informe o telefone" />
            </div>
            <Link href='/reservas' className="w-24 h-12 mt-8 pb-1 text-white font-semibold bg-red-800 rounded-md border-2 border-transparent hover:text-red-800 hover:bg-white hover:border-red-800 flex items-center justify-center">
                Cadastrar
            </Link>
        </div>
    );
}

export default CadastroCPF;
