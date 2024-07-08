import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center flex-col gap-4">
      <section>
        <h1 className="font-bebas text-9xl text-blue text-center">XYZ</h1>
        <p className="font-poppins font-semibold text-xl text-center">
          Seja bem vindo à gestão de caminhões
        </p>
      </section>
      <Link to="home">
        <Button>Acessar</Button>
      </Link>
    </div>
  );
};

export default Index;
