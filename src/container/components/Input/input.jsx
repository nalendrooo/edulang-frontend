import React, { useState } from 'react';
import {
  BsFillEyeFill, BsFillEyeSlashFill,
} from 'react-icons/bs';
import PropTypes from 'prop-types';

const Input = (
  {
    icon, type, placeholder, name, autoComplete, onChange, value,
  },
) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      {icon && <span className="absolute text-white -translate-y-1/2 top-1/2 left-4">{icon}</span>}
      <input
        type={type === 'password' && isPasswordVisible ? 'text' : type}
        className="w-full pl-12 text-sm pr-8 py-3 mx-auto my-1 text-white rounded-full shadow-lg focus:text-white focus:text-sm focus:outline-none bg-primary placeholder:text-sm placeholder:text-slate-200"
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        onChange={onChange}
        value={value}
      />
      {type === 'password' && (
        <button onClick={togglePasswordVisibility} type="button">
          {isPasswordVisible ? (
            <BsFillEyeFill className="absolute text-white -translate-y-1/2 cursor-pointer top-1/2 right-4" />
          ) : (
            <BsFillEyeSlashFill className="absolute text-white -translate-y-1/2 cursor-pointer top-1/2 right-4" />
          )}
        </button>
      )}
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
