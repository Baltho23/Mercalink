'use client'
import './login.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from '@nextui-org/link';
import { useState } from 'react';


export default function Login() {

    const[currentForm, setCurrentForm]= useState(0) 


    function cambioFormulario(idForm:number){
        setCurrentForm(idForm)
    }
    

    function LoginForm(){
        return(
        <section className="login-main">
            <div className="login-container">
                <h1 className="mb-5 text-xl font-bold text-center">Bienvenido</h1>
                <form className="login-form">
                    <Input 
                        name='usuario'
                        type="text" 
                        label="Usuario" 
                        required
                    ></Input>
                    <Input 
                        name='clave'
                        type="password" 
                        label="Contraseña" 
                        required
                    ></Input>
                    <Checkbox>Recordarme</Checkbox>
                    <div className='flex justify-between'>
                      <Link  href='#' onPress={()=>cambioFormulario(1)}>Registrate</Link>
                      <Link href='#' onPress={()=>cambioFormulario(2)}>Recuperar Contraseña</Link>
                    </div>
                    <Button color="primary">Ingresar</Button>
                </form>
            </div>
        </section>
    )
        
    }

    function RegisterForm(){
        return (
          <section className="login-main">
            <div className="login-container">
              <h1 className="mb-3 text-xl font-bold text-center">Bienvenido</h1>
              <form className="login-form">
                <Input
                  name="usuario"
                  type="text"
                  label="Nombre Completo"
                  required
                ></Input>
                <Input 
                  name="clave" 
                  type="texto" 
                  label="NIT" 
                  required
                ></Input>
                <Input
                  name="clave"
                  type="email"
                  label="Correo"
                  required
                ></Input>
                <Input
                  name="clave"
                  type="tel"
                  label="Telefono"
                  required
                ></Input>
                <Input
                  name="clave"
                  type="password"
                  label="Contraseña"
                  required
                ></Input>
                <Input
                  name="clave"
                  type="password"
                  label="Confirmar Contraseña"
                  required
                ></Input>
                <p>
                  ¿Ya tienes cuenta?{" "}
                  <Link href="#" onPress={()=>cambioFormulario(0)}>
                    Inicia Sesion
                  </Link>
                </p>
                <Button color="primary">Registrarse</Button>
              </form>
            </div>
          </section>
        );
    }

    function RecuperarContraCorreo(){
      return(
      <section className="login-main">
          <div className="login-container">
              <h1 className="mb-5 text-xl font-bold text-center">Recuperar Contraseña</h1>
              <form className="login-form">
                  <Input 
                      name='Correo'
                      type="email" 
                      label="Correo electronico" 
                      required
                  ></Input>
                  <p>
                  ¿Recordaste la Contraseña?{" "}
                  <Link href="#" onPress={()=>cambioFormulario(5)}>
                    Volver
                  </Link>
                </p>
                  <Button onPress={()=>cambioFormulario(3)} color="primary">Enviar Codigo</Button>
              </form>
          </div>
      </section>
  )
      
  }

  function RecuperarContraCodigo(){
    return(
    <section className="login-main">
        <div className="login-container">
            <h1 className="mb-5 text-xl font-bold text-center">Recuperar Contraseña</h1>
            <form className="login-form">
                <Input 
                    name='Correo'
                    type="text" 
                    label="Codigo de verificacion" 
                    required
                ></Input>
                <p>
                  ¿Te equivocaste de correo?{" "}
                  <Link href="#" onPress={()=>cambioFormulario(4)}>
                    Volver
                  </Link>
                </p>
                <Button color="primary">Enviar Codigo</Button>
            </form>
        </div>
    </section>
)
    
}

switch (currentForm) {
  case 0:
    return <LoginForm></LoginForm>;
  
  case 1:
    return(<RegisterForm></RegisterForm>)

  case 2:
    return(<RecuperarContraCorreo></RecuperarContraCorreo>)

  case 3:
    return(<RecuperarContraCodigo></RecuperarContraCodigo>)
  
  case 4:
    return(<RecuperarContraCorreo></RecuperarContraCorreo>)

  case 5:
      return <LoginForm></LoginForm>;
}

} 