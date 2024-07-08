import React from 'react';
import Nav from '../Nav';
import ListOfTrucks from '../ListOfTrucks';

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-white  flex items-center p-12 flex-col">
        <header>
          <Nav />
        </header>

        <main className="w-full p-4">
          <ListOfTrucks />
        </main>
      </div>
    </>
  );
};

export default Home;
