import React from 'react';
import { searchPokemon } from '../../redux/accion/accion';
import { useDispatch } from 'react-redux';
//import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './search.css';

export default function Searhs() {
  let buscarpokemon = useSelector((state) => state.buscar);
  const handleChange = ({ target }) => {
    dispatch(searchPokemon(target.value));
  };
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* <Link to={'/buscar'}> */}
      <input
        type="text"
        placeholder="Buscar pokemon"
        value={buscarpokemon}
        onChange={handleChange}
      />
      {/*  </Link> */}
      {/* <Route path="/buscar"> */}
      {/* <CardPokemon name={buscarPokemon} /> */}
      {/* </Route> */}
    </form>
  );
}
