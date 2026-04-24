import Login from "./Login";

function isLogged() {
  let isLoggedIn = false;

  if (isLoggedIn === true) {
    return <h1>Bem-vindo ao curso</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return (
    <div className="container">
      <h1 className="title">TipsForm</h1>
      {isLogged()}
    </div>
  );
}

export default App;
