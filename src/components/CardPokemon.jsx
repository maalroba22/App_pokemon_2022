import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './styles/card-pokemon.css';
import Pokemon from './Pokemon';
import { getAllpokemon } from '../redux/accion/accion';

const CardPokemon = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllpokemon());
  }, [dispatch]);
  let search = useSelector((state) => state.buscar);
  const pokemons = useSelector((state) => state.pokemon);
  const pokemon = pokemons?.filter((e) => e.nombre.includes(search));
  console.log('Card: ', search);
  return (
    <>
      {!search.length ? (
        <Pokemon pokemons={pokemons} />
      ) : pokemon.length > 0 ? (
        <Pokemon pokemons={pokemon} />
      ) : (
        <h1> pokemon no Existe</h1>
      )}
    </>
  );
};
export default CardPokemon;
