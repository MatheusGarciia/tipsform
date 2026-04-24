import Input from "./Input";

function Login(props) {
  return (
    <form className="form" action="">
      <Input type="text" pH="Nome de Usuário" />
      <Input type="password" pH="Senha" />
      {props.register === false && (
        <Input type="password" pH="Confirme a senha" />
      )}
      <button type="submit">{props.register ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
