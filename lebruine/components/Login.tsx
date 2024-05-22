import React from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from '../assets/le-bruine-logo-vermelho.svg';
import user from '../assets/user-round.svg';
import login from '../assets/log-in.svg';
import key from '../assets/key-round.svg'

const Login: React.FC = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center pb-10 pt-32">
            <div className="flex flex-col justify-center items-center">
                <Image src={logo} alt="logo" className="h-12 w-48" />
                <Image src={user} alt="user-round" className="h-16 w-16 mt-16" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <Image src={login} alt="log-in" />
                <input className="flex-grow" type="email" name="email" id="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-4">
                <Image src={key} alt="log-in" />
                <input className="flex-grow" type="password" name="password" id="password" placeholder="Digite sua senha" />
            </div>
            <Link href='/' className="w-24 h-12 mt-8 pb-1 text-white font-semibold bg-red-800 rounded-md border-2 border-transparent hover:text-red-800 hover:bg-white hover:border-red-800 flex items-center justify-center">
                Entrar
            </Link>
        </div>
    );
}

export default Login;
