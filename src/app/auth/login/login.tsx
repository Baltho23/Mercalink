import { EmptyLogin, LoginDTO } from "@/app/models/auth.model";
import { useAuth } from "@/app/services/auth.provider";
import { API_URL, POST } from "@/app/services/fetch.service";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

export function LoginForm({changeForm}: {changeForm: Function}){

  const {user: currentUser, login, logout} = useAuth();
  const [loginForm, setLoginForm]: [LoginDTO, Function] = useState(EmptyLogin);
  const [loading, setLoading]: [boolean, Function] = useState(false);

  function handleLoginForm(event: any) {;
    const {name, value} = event.target;
    setLoginForm((prevFormData: LoginDTO) => ({
        ...prevFormData,
        [name]: value,
    }));
  }

  function submitForm() {
    setLoading(true);
    const body = JSON.stringify(loginForm);
    fetch(`${API_URL}/login`, {...POST, body})
    .then((response) => response.json())
    .then((resp) => {
      const token = resp.access_token;
      const user = resp.user;
      localStorage.setItem('token', token);
      login(user);
      setLoading(false);
    })
    .catch(
      (error) => console.log(error)
    );
  }
  
  return(
    <section className="login-main">
      <div className="login-container">
          <h1 className="mb-5 text-xl font-bold text-center">Bienvenido</h1>
          <form className="login-form">
              <Input 
                  name='email'
                  type="email" 
                  label="Correo" 
                  value={loginForm.email}
                  onChange={handleLoginForm}
              ></Input>
              <Input 
                  name='password'
                  type="password" 
                  label="Contraseña" 
                  value={loginForm.password}
                  onChange={handleLoginForm}
              ></Input>
              <div className='flex justify-between'>
                <Link  href='#' onPress={()=>changeForm(1)}>Registrate</Link>
                <Link href='#' onPress={()=>changeForm(2)}>Recuperar Contraseña</Link>
              </div>
              <Button isLoading={loading} color="primary" onPress={submitForm}>Ingresar</Button>
          </form>
      </div>
    </section>
  );
}