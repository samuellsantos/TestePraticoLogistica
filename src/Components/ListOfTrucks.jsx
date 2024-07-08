import React, { useEffect, useState } from 'react';
import CardTrucks from './CardTrucks';
import gif from '../assets/Nodata.gif';

const ListOfTrucks = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/trucks')
      .then((response) => response.json())
      .then((data) => {
        setTrucks(data);
      })
      .catch((error) => console.log('Error:', error));
  }, [trucks]);

  return (
    <div className="w-full h-screen ">
      <div className="flex gap-4 flex-wrap">
        {trucks.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-start flex-col mt-8">
            <h1 className="text-2xl font-bold">
              Não há informações no momento!
            </h1>
            <div>
              <img src={gif} alt="Sem dados no momento" />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-evenly gap-4 flex-wrap">
            {trucks.map((truck) => {
              return (
                <CardTrucks
                  key={truck.id}
                  id={truck.id}
                  nome={truck.nome}
                  cpf={truck.cpf}
                  carga={truck.carga}
                  placa={truck.placa}
                  data={truck.data}
                  liberacao={truck.liberacao}
                  tipo={truck.tipo}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOfTrucks;
