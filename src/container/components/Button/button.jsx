import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <button
      className="w-20 pl-9 pr-4 py-2 group rounded-full bg-[#FCCF47] shadow-lg"
      onClick={onClick}
      type="button"
    >
      <BsFillArrowRightCircleFill className="text-2xl text-white duration-300 ease-in-out group-hover:translate-x-3" />

    </button>
  );
}

Button.propTypes = {
  // children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
