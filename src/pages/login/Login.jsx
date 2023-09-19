import { useState } from "react";
import "./styles.css";
import Form from "../../components/form/Form";
import useUser from "../../hooks/UseUser";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function Login() {
  const { setUser, user } = useUser();
  const [usuario, setUsuario] = useState("");
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const history = useNavigate();

  const loginData = [
    {
      id: 1,
      inputValue: usuario,
      setData: setUsuario,
      placehold: "usuario",
      required: "required",
    },
    {
      id: 2,
      inputValue: password,
      setData: setPassword,
      inputType: "password",
      placehold: "contrasena",
      required: "required",
    },
  ];

  const registerData = [
    {
      id: 1,
      inputValue: usuario,
      setData: setUsuario,
      placehold: "Nombre usuario",
      required: "required",
    },
    {
      id: 2,
      inputValue: password,
      setData: setPassword,
      inputType: "password",
      placehold: "Contrasena",
      required: "required",
    },
    {
      id: 3,
      setData: setPasswordConfirm,
      inputValue: passwordConfirm,
      inputType: "password",
      placehold: "Repetir contrasena",
      required: "required",
      valid: !isValidPassword ? "Contrasena no coincide" : undefined,
    },
  ];

  const handleLogIn = () => {
    setUser(usuario);
    history("/inicio");
  };

  const newAccount = () => {
    if (password === passwordConfirm) {
      setIsValidPassword(true);
      setIsNewAccount(false);
    } else {
      setIsValidPassword(false);
    }
  };

  return (
    <div className="login">
      <div className="login_logo"></div>
      <div className="login_form_container">
        <div className="login_card">
          {user ? (
            <>
              <h2 style={{ textAlign: "center" }}>Ya has iniciado sesion!</h2>
              <figure style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{ width: "200px" }}
                  src="src\assets\fma.webp"
                  alt="FMA Edward Elrich"
                />
              </figure>
              <Button
                text={"Continuar explorando"}
                customButton={"form"}
                linkRef={"/inicio"}
              />
            </>
          ) : (
            <>
              <div>
                <span>
                  {isNewAccount ? "Bienvenido" : "Bienvenido de nuevo"}
                </span>
                <h2>{isNewAccount ? "Registrate!" : "Ingrese a su cuenta!"}</h2>
              </div>
              {isNewAccount ? (
                <div>
                  <Form
                    formType={registerData}
                    submitEvent={newAccount}
                    textButton={"Crear cuenta"}
                  />
                  <span>
                    Ya tengo una cuenta
                    <Button
                      customButton={"create_account"}
                      text={"Log In"}
                      comesFromForm={true}
                      onClickEvent={() => setIsNewAccount(false)}
                    />
                  </span>
                </div>
              ) : (
                <div>
                  <Form
                    formType={loginData}
                    submitEvent={handleLogIn}
                    textButton={"Iniciar sesion"}
                  />
                  <span>
                    No tienes cuenta?
                    <Button
                      customButton={"create_account"}
                      text={"Clik aqui"}
                      comesFromForm={true}
                      onClickEvent={() => setIsNewAccount(true)}
                    />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
