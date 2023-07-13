import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ iconLeft, iconRight, children }) => (
  <div className="sticky top-0 z-10">
    <div className="flex items-center justify-between w-full px-4 py-2 bg-primary">
      <Link to="/">
        { iconLeft && iconLeft }
      </Link>
      <p className="font-bold tracking-wide text-white">{children}</p>
      { iconRight ?? <p /> }
    </div>
  </div>
);

Header.propTypes = {
  iconLeft: PropTypes.element.isRequired,
  iconRight: PropTypes.element,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  iconRight: <p />,
};

export default Header;
