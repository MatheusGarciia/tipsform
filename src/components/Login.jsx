import Input from "./Input";

function Login() {
  return (
    <form className="form" action="">
      <Input type="text" pH="Nome de Usuário" />
      <Input type="password" pH="Senha" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
