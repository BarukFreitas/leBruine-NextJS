import React from "react";
import Link from 'next/link';

const VerMais: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col mt-6 pl-4 items-end justify-center gap-4 w-full mx-8 h-full">
                <div className="w-full flex flex-col justify-center items-center">
                    <span className="font-sans text-2xl font-bold text-red-600 justify-center">Reservas agendadas</span>
                    <span className="font-sans text-lg font-bold text-red-600">Yuri Baruk de Freitas</span>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-start items-start gap-2">
                        <span className="font-sans text-lg font-bold text-red-600">CPF:</span>
                        <span className="font-sans text-lg font-bold text-red-800">123.456.789-00</span>
                    </div>
                    <div className="flex flex-row justify-start items-start gap-2">
                        <span className="font-sans text-lg font-bold text-red-600">Contato:</span>
                        <span className="font-sans text-lg font-bold text-red-800">(87) 98767-0988</span>
                    </div>
                    <div className="flex flex-row justify-start gap-2">
                        <span className="font-sans text-lg font-bold text-red-600">Tipo de reserva:</span>
                        <span className="font-sans text-lg font-bold text-red-800">Mesa para duas pessoas</span>
                    </div>
                    <div className="flex flex-row justify-start gap-2">
                        <span className="font-sans text-lg font-bold text-red-600">Código da reserva:</span>
                        <span className="font-sans text-lg font-bold text-red-800">#198772</span>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-2 items-center">
                    <button className="w-32 h-10 rounded-lg bg-green-600 text-white font-bold">Confirmar</button>
                    <button className="w-32 h-10 rounded-lg bg-red-600 text-white font-bold">Excluir</button>
                </div>
            </div>
        </div>
    );
}

export default VerMais;
