import React from "react";
import Link from 'next/link';

const ListaReservas: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col mt-6 pl-4 items-center justify-center gap-4 w-auto h-full">
                <div className="font-sans text-4xl justify-start items-center w-auto">
                    <div className="flex justify-center">
                        <h1 className="text-red-600 m-0">Reservas agendadas</h1>
                    </div>
                </div>
                <div className="flex border-b pb-2 border-gray-500 w-full justify-around">
                    <span className="font-sans text-lg flex w-full justify-start font-bold text-red-600 ml-auto">Yuri Baruk de Freitas</span>
                    <button className="w-16 bg-red-600 hover:bg-red-900 text-white rounded-md text-xs">
                        <Link href="/verMaisPagina" passHref>Ver mais</Link>
                    </button>
                </div>
                <div className="flex border-b pb-2 border-gray-500 w-full justify-around">
                    <span className="font-sans text-lg flex w-full justify-start font-bold text-red-600 ml-auto">Thiago Anízio Miranda</span>
                    <button className="w-16 bg-red-600 hover:bg-red-900 text-white rounded-md text-xs">
                        <Link href="/verMaisPagina" passHref>Ver mais</Link>
                    </button>
                </div>
                <div className="flex border-b pb-2 border-gray-500 w-full justify-around">
                    <span className="font-sans text-lg flex w-full justify-start font-bold text-red-600 ml-auto">Madre Tereza de calcutá</span>
                    <button className="w-16 bg-red-600 hover:bg-red-900 text-white rounded-md text-xs">
                        <Link href="/verMaisPagina" passHref>Ver mais</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListaReservas;
