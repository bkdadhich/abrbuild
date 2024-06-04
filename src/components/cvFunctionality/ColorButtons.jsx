import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';

const ColorButtons = ({ setBoxBgColor }) => (
  <div className="flex justify-around border-x-2 border-b-2 pb-2 rounded-b border-black ">
    <button
      className="bg-gray-300 hover:bg-gray-100 text-white font-bold p-6 rounded-full text-xs"
      onClick={() => setBoxBgColor('lightgray') }
    ></button>
    <button
      className="bg-green-200 hover:bg-green-100 text-white font-bold p-6 rounded-full"
      onClick={() => setBoxBgColor('#F0FFF0')}
    ></button>
    <button
      className="bg-yellow-100 hover:bg-yellow-200 text-white font-bold p-6 rounded-full"
      onClick={() => setBoxBgColor('#FFFACD')}
    ></button>
    <button
      className="bg-pink-300 hover:bg-pink-200 text-white font-bold p-6 rounded-full"
      onClick={() => setBoxBgColor('#FFEBEF')}
    ></button>
  </div>
);

export default ColorButtons;
