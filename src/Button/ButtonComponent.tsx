export function Buttons({ setPage }) {
  return (
    <>
      <div>
        <p>Selecione uma página</p>
      </div>
      <div className="butn">
        <button onClick={() => setPage("home")}>Pagina inicial</button>
        <button onClick={() => setPage("quiz")}>Quiz</button>
      </div>
    </>
  );
}
