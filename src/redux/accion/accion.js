import axios from 'axios';
export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
/* export const getAllpokemon = () => {
  return async function (dispatch) {
    return fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_ALL_POKEMON, payload: json.results });
      });
  };
}; */

// ?usando la ruta con axios practicando
export const getAllpokemon = () => {
  return async function (dispatch) {
    return axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
      .then(async (res) => {
        let pokemons = [];
        return (
          await axios.all(
            res.data.results.map(async (pokemon) => {
              const res = await axios.get(pokemon.url);
              pokemons.push({
                id: res.data.id,
                nombre: res.data.name,
                img: res.data.sprites.other.dream_world.front_default,
                tipo: res.data.types[0].type.name,
                poder: res.data.stats[0].base_stat,
              });

              //dispatch({ type: GET_ALL_POKEMON, payload: res.data });
            })
          ),
          dispatch({ type: GET_ALL_POKEMON, payload: pokemons })
        );
      });
  };
};

/* FUNCION PARA BUSCAR UN POKEMON */

export function searchPokemon(name) {
  return (dispatch) => {
    dispatch({
      type: 'SEARCH_POKEMON',
      payload: name,
    });
  };
}

/* codigo con all promise */

/* export function getPokemon() {

  return function (dispatch) {
      return axios
          .get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
          .then((response) => {
              const pokemons = response.data.results
              return Promise.all(
                  pokemons.map((poke) => {
                      return axios.get(poke.url)
                          .then((res) => ({
                              // pokemons.push({
                                id: res.data.id,
                                nombre: res.data.name,
                                img: res.data.sprites.other.dream_world.front_default,
                                tipo: res.data.types[0].type.name,
                                poder: res.data.stats[0].base_stat,
                              // })
                          }))

                  })
              )
          })
          .then(data => { dispatch({ type: GET_POKEMON, payload: data }) })
          .catch(error => { console.log(error) })
  }
}
 */
