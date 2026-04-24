import Login from "./Login";

let isRegistred = false;

function App() {
  return (
    <div className="container">
      <h1 className="title">TipsForm</h1>
      <Login register={isRegistred} />
    </div>
  );
}

export default App;
