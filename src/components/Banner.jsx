import React from 'react';
import PropTypes from 'prop-types';
import logo from "../assets/img/cl_logo.png";

const Banner = function(props) {
  return (
    <div className="banner">
      <img className="logo" src={logo} alt="Convergence"/>
      <span className="title">Convergence Code Editor</span>
      <div className="tray">
        <i className="user-icon fa fa-user" />
        <span className="username">{props.username}</span>
        <i className="close-icon fa fa-sign-out" title="close" onClick={props.onClose} />
        <i className="logout-icon fa fa-power-off" title="logout" onClick={props.onLogout} />
      </div>
    </div>
  );
};

Banner.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string
};

export default Banner;
