import React from 'react';
import {
  BsStack,
  BsMessenger,
  BsFillHouseDoorFill,
  BsFillClockFill,
  BsPersonLinesFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="fixed bottom-0 flex justify-center w-full bg-primary rounded-t-2xl">
    <ul className="flex items-center w-full py-3 text-white justify-evenly">
      <Link to="/" className="flex flex-col items-center cursor-pointer">
        <BsFillHouseDoorFill size={25} />
      </Link>
      <li className="flex flex-col items-center cursor-pointer">
        <BsMessenger size={25} />
      </li>
      <li />
      <li className="flex flex-col items-center cursor-pointer">
        <BsFillClockFill size={25} />
      </li>
      <Link to="/profile" className="flex flex-col items-center cursor-pointer">
        <BsPersonLinesFill size={25} />
      </Link>
    </ul>
    <Link
      className="absolute -top-5 bg-white p-2 rounded-full border-4 border-[#1795AB] cursor-pointer"
      to="/recomendation"
    >
      <BsStack size={27} color="#1795AB" />
    </Link>
  </div>
);

export default Menu;
