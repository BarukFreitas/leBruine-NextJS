import React from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from '../assets/le-bruine-logo-vermelho.svg';
import user from '../assets/user-round.svg';
import login from '../assets/log-in.svg';
import key from '../assets/key-round.svg';
import styles from '../styles/customcss.module.css'; // Importa o CSS Module

const Alteracao: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <div className={`border-2 border-red-600 mb-4 h-16 ${styles.customWidth}`}>
                    <select name="motivo" id="motivo" className={`w-full h-full border-none text-center ${styles.customSelect}`} defaultValue="">
                        <option value="" disabled selected hidden>Selecione o motivo da atualização</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                </div>
                <div className={`border-2 border-red-600 ${styles.customWidth} ${styles.customHeight}`}>
                    
                </div>
                <button className=" w-32 h-14 text-2xl text-white rounded-lg mt-4 bg-red-600 border-2 border-red-600 hover:bg-white hover:text-red-600">Enviar</button>
            </div>
        </div>
    );
}

export default Alteracao;
