import './styles/card-pokemon.css';

export default function Pokemon({ pokemons }) {
  return (
    <div className="container">
      {pokemons?.map((pokemon) => {
        return (
          <div key={pokemon.id} className="card">
            <div className="card-header">
              <h2>{pokemon.nombre}</h2>
            </div>
            <div className="card-body">
              <img src={pokemon.img} alt="IMG POKEMON" />
              <h4>Tipo: {pokemon.tipo}</h4>
            </div>
            <div className="card-footer">
              <div className="footer-texto">
                <span>Numero:{pokemon.id}</span>
                <span>Poder: {pokemon.poder}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
