import React from 'react';
import logo from '../../resources/image/logo-nav.png';
import Searhs from '../Search/Searhs';
import { Link } from 'react-router-dom';
import './nav.css';
const Nav = ({ name }) => {
  return (
    <div className="container-nav">
      <div className="logo-nav">
        <Link to="/">
          <img src={logo} alt="Logo Nav" />
        </Link>
      </div>
      <div className="buscador-nav">
        <Searhs name={name} />
      </div>
      <div className="fovoritos-nav">
        <Link to="favorito">
          <h4>Pokemones Favoritos</h4>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
