import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const classTailwindActive =
    'bg-blue p-4 flex items-center justify-center opacity-100 rounded-sm hover:opacity-100 text-md font-bold underline';

  const classTailwindNotActive =
    'bg-blue p-4 flex items-center justify-center opacity-60 rounded-sm hover:opacity-100 text-md font-bold';

  return (
    <nav className="w-full flex items-center justify-center">
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classTailwindActive : classTailwindNotActive
            }
          >
            Página Inicial
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/entrada"
            className={({ isActive }) =>
              isActive ? classTailwindActive : classTailwindNotActive
            }
          >
            Cadastrar Entrada
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/saida"
            className={({ isActive }) =>
              isActive ? classTailwindActive : classTailwindNotActive
            }
          >
            Cadastrar Saída
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
