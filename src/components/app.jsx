function App() {
  return (
    <div className="container">
      <h1 className="title">TipsForm</h1>
      <form className="form" action="">
        <input type="text" id="name" placeholder="Nome de Usuário" />
        <input type="password" id="password" placeholder="senha" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
