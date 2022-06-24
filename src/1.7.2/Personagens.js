export const Personagens = (props) => {
  const personagens = [
    "Jill Valentine",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker"
  ];
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {EhUmRedfield(personagens, props.familia).map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );

  function EhUmRedfield(personagens, familia) {
    return personagens.filter((personagem) => {
      if (personagem.includes(familia)) {
        return true;
      }
      return false;
    });
  }
};

export default Personagens;
