import React from "react";
import Link from 'next/link';

const Restaurantes: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="inline-flex mt-6 pl-4 items-end justify-between gap-4 w-auto h-full">
                <div className="font-sans justify-start items-baseline w-auto">
                    <div className="float-left">
                        <h2 className="text-red-600 m-0">Restaurante Katon Haisekisho</h2>
                        <h4 className="text-gray-500 m-auto">Rua Napoleão Bonaparte, 32, Boa Vista - Garanhuns-PE</h4>
                    </div>
                </div>
                <div className="align-baseline">
                    <span className="font-sans text-lg font-bold text-red-600 float-right ml-auto">(87)99909-0001</span>
                </div>
                <div className="m-auto">
                    <button className="w-36 h-10 bg-red-600 hover:bg-red-900 text-white rounded-md text-lg">
                        <Link href="/fazer-reserva">Fazer Reserva</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Restaurantes;
