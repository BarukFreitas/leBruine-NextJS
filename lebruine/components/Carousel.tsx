import React from "react";
import Image from "next/image";
import hamburguer from '../assets/hamburger.png';
import sushi from '../assets/sushi.png';
import massas from '../assets/massas.png';
import pizza from '../assets/pizza.png';
import Link from "next/link";

interface CardProps {
  image: any;
  alt: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, alt, title }) => {
  return (
    <div className="relative w-96 h-64 rounded-lg overflow-hidden m-2">
      <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-70 hover:bg-opacity-20">
        <span>{title}</span>
      </div>
    </div>
  );
}

const Carousel: React.FC = () => {
  return (
    <div className="flex justify-center flex-wrap mt-6">
      <Link href='#'><Card image={hamburguer} alt="Hamburguer" title="Hamburguer" /></Link>
      <Link href='#'><Card image={sushi} alt="Sushi" title="Sushi" /></Link>
      <Link href='#'><Card image={massas} alt="Massas" title="Massas" /></Link>
      <Link href='#'><Card image={pizza} alt="Pizza" title="Pizza" /></Link>
    </div>
  );
}

export default Carousel;
