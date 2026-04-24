import Login from "./Login";

let isLoggedIn = false;

function App() {
  return (
    <div className="container">
      <h1 className="title">TipsForm</h1>
      {isLoggedIn ? <h1>Bem-vindo ao curso</h1> : <Login />}
    </div>
  );
}

export default App;
