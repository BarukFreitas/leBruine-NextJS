import React from "react";
import Link from 'next/link';

const Reservas: React.FC = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col mt-6 pl-4 items-end justify-center gap-4 w-full mx-8 h-full">
                <div className="w-full flex justify-center">
                    <span className="font-sans text-2xl font-bold text-red-600">Reservas agendadas</span>
                </div>
                <div className="w-full flex gap-16 border-b border-gray-500 p-2">
                    <span className="font-sans font-bold text-red-600 float-right ml-auto">Yuri Baruk de Freitas</span>
                    <button className="w-auto p-1 h-auto bg-red-600 hover:bg-red-900 text-white rounded-md text-xs">
                        <Link href="/fazer-reserva">Ver mais</Link>
                    </button>
                </div>
                {/* <div className="m-auto">
                    <button className="w-auto p-1 h-auto bg-red-600 hover:bg-red-900 text-white rounded-md text-xs">
                        <Link href="/fazer-reserva">Ver mais</Link>
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Reservas;
