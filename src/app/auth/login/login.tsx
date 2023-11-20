import { EmptyLogin, LoginDTO } from "@/app/models/auth.model";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

export function LoginForm({changeForm}: {changeForm: Function}){

    const [loginForm, setLoginForm]: [LoginDTO, Function] = useState(EmptyLogin);

    function handleLoginForm(event: any) {;
        const {name, value} = event.target;
        console.log(name,value);
        setLoginForm((prevFormData: LoginDTO) => ({
            ...prevFormData,
            [name]: value,
        }));
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
                <Button color="primary">Ingresar</Button>
            </form>
        </div>
      </section>
    );
  }