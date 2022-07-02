import React from "react";
import "../styles.css";

function Tarefa() {
  const [tarefas, setTarefas] = React.useState(["conteudo"]);
  const [inputTarefa, setInputTarefa] = React.useState("");

  const handleOnSubmit = () => {};

  return (
    <div className="container">
      <div className="conteudo">
        <h1 className="titulo">Tarefas</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="tarefa_box">
            <lable htmlFor="tarefa"></lable>
            <div
              style={{
                display: "flex",
                gap: 10
              }}
            >
              <input id="tarefa" name="tarefa" placeholder="Minha tarefa" />
              <button className="btn btn_adicionar">Adicionar</button>
            </div>
          </div>
        </form>
        <section>
          <ul>
            {tarefas.map((tarefa) => (
              <li>
                <input className="tabela_conteudo" disabled value={tarefa} />
                <button className="btn btn_excluir">Excluir</button>
              </li>
            ))}

            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Tarefa;
