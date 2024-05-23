import React from "react";
import Image from "next/image";
import logoInstagram from '../assets/instagram-ico.svg';
import logoFacebook from '../assets/facebook-ico.svg';
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-red-600 text-white p-2 flex flex-col items-center">
            <p className="text-base mb-2">Acompanhe as redes sociais do Le Bruine:</p>
            <div className="flex items-center justify-center gap-3">
                <Link href='https://www.instagram.com/' target="blank" passHref>
                    <div className="cursor-pointer">
                        <Image src={logoInstagram} alt="logo instagram" width={24} height={24} />
                    </div>
                </Link>
                <Link href='https://www.facebook.com/' target="blank" passHref>
                    <div className="cursor-pointer">
                        <Image src={logoFacebook} alt="logo facebook" width={24} height={24} />
                    </div>
                </Link>
            </div>
            <p className="text-base my-2">Rua Francisco Carraca de Freitas, 270, Boa Vista, Garanhuns-PE</p>
            <p className="text-base">Le Bruine © 2024 - Todos os direitos reservados / Desenvolvido por: F.A Soluções Tecnológicas - Yuri Baruk Freitas | Thiago Anízio Miranda</p>
        </footer>
    );
}

export default Footer;
