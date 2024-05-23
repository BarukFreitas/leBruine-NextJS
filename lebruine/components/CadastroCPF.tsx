import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from '../assets/le-bruine-logo-vermelho.svg';

const CadastroCPF: React.FC = () => {
    const [formValues, setFormValues] = useState({
        nome: '',
        cpf: '',
        email: '',
        endereco: '',
        bairro: '',
        numero: '',
        telefone: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const allFieldsFilled = Object.values(formValues).every(value => value !== '');
        setIsFormValid(allFieldsFilled);
    }, [formValues]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    return (
        <form className="min-h-screen flex flex-col items-center justify-center pb-10 pt-32">
            <div className="flex flex-col justify-center items-center">
                <Image src={logo} alt="logo" className="h-12 w-48" />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input 
                    className="flex-grow" 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    maxLength={255} 
                    placeholder="Informe seu nome completo" 
                    value={formValues.nome}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input 
                    className="flex-grow" 
                    type="text" 
                    name="cpf" 
                    id="cpf" 
                    maxLength={11} 
                    placeholder="Informe o CPF" 
                    value={formValues.cpf}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input 
                    className="flex-grow" 
                    type="email" 
                    name="email" 
                    id="email" 
                    maxLength={255} 
                    placeholder="Informe o e-mail" 
                    value={formValues.email}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input 
                    className="flex-grow" 
                    type="text" 
                    name="endereco" 
                    id="endereco" 
                    maxLength={255} 
                    placeholder="Informe o endereço" 
                    value={formValues.endereco}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="flex items-center gap-2 w-80 mt-8">
                <div className="w-2/3 border-2 border-red-600 rounded-lg">
                    <input 
                        className="flex items-center p-1 gap-2 w-full rounded-lg" 
                        type="text" 
                        maxLength={60} 
                        name="bairro" 
                        id="bairro" 
                        placeholder="Informe seu bairro" 
                        value={formValues.bairro}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="w-1/3 border-2 border-red-600 rounded-lg">
                    <input 
                        className="flex items-center p-1 gap-2 w-full rounded-lg" 
                        type="text" 
                        name="numero" 
                        maxLength={4} 
                        id="numero" 
                        placeholder="Número" 
                        value={formValues.numero}
                        onChange={handleChange}
                        required 
                    />
                </div>
            </div>
            <div className="flex items-center border-2 border-red-600 rounded-lg p-1 gap-2 w-80 mt-8">
                <input 
                    className="flex-grow" 
                    type="text" 
                    name="telefone" 
                    id="telefone" 
                    maxLength={11} 
                    placeholder="Informe o telefone" 
                    value={formValues.telefone}
                    onChange={handleChange}
                    required 
                />
            </div>
            <button 
                type="submit"
                className={`w-24 h-12 mt-8 pb-1 text-white font-semibold bg-red-800 rounded-md border-2 flex items-center justify-center ${
                    isFormValid ? 'hover:text-red-800 hover:bg-white hover:border-red-800 border-transparent' : 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
            >
                Cadastrar
            </button>
        </form>
    );
}

export default CadastroCPF;
