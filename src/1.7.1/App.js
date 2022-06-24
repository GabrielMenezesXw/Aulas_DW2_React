import { filmes } from "./filmes.js";

//Faça um Component que irá renderizar todos os
//gêneros de filmes lançados depois dos anos 2000.

function Filmes() {
  function filtrarFilmeAnos(ano = 2000) {
    return filmes.filter((filme) => filme.lancamento > ano);
  }

  function mapearFilmes(filmes) {
    return filmes
      .map((filme) => filme.generos)
      .flat()
      .map((genero) => (
        <div>
          <p>{genero}</p>
          <br />
        </div>
      ));
  }

  return (
    <div>
      <h1>{mapearFilmes(filtrarFilmeAnos())}</h1>
    </div>
  );
}

export default function App() {
  return <Filmes />;
}
