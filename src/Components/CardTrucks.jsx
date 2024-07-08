import React from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CardTrucks = ({ id, nome, cpf, carga, placa, data, liberacao, tipo }) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/trucks/${id}`, {
      method: 'DELETE',
    });
  };
  return (
    <div className="w-96 bg-white border-solid border-black border-4 h-56 rounded-lg p-2 flex items-center justify-between">
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold">{nome}</h1>
        <h2 className="font-semibold">CPF: {cpf}</h2>
        <span className="italic font-medium">Transportadora: {carga}</span>
        <span className="italic font-medium">
          Data da {tipo}: {data}
        </span>
        <span className="italic font-medium">
          {tipo} - {liberacao}
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <button>
          <Link to={`/edit/${id}`}>
            <MdOutlineEdit size={25} />
          </Link>
        </button>
        <button onClick={handleDelete}>
          <IoMdTrash size={25} />
        </button>
      </div>
    </div>
  );
};

export default CardTrucks;
