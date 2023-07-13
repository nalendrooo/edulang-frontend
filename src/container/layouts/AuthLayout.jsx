import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../public/logo.png';

function AuthLayout(props) {
  const { children } = props;
  return (
    <div className="container flex flex-col justify-between w-full min-h-screen mx-auto overflow-y-hidden ">
      <div className="w-full h-[160px] rounded-b-[40px] bg-primary relative ">
        <div className="absolute w-24 h-24 -translate-x-1/2 rounded-full overflow-hidden border-4 border-primary cursor-pointer bg-slate-300 -bottom-10 left-1/2">
          <img src={Logo} alt="" />
        </div>
      </div>
      {children}
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
