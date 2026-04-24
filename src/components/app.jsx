function App() {
  return (
    <div className="container">
      <h1 className="title">TipsForm</h1>
      <form action="">
        <div>
          <input
            className="form"
            type="text"
            id="name"
            placeholder="Nome de Usuário"
          />
        </div>
        <div>
          <input
            className="form"
            type="password"
            id="password"
            placeholder="senha"
          />
        </div>
        <div>
          <button className="button" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
