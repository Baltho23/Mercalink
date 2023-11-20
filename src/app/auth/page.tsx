'use client'
import './auth.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Link } from '@nextui-org/link';
import { useState } from 'react';
import { RegisterForm } from './registro/registro';
import { LoginForm } from './login/login';
import { useAuth } from '../services/auth.provider';
import { redirect } from 'next/navigation';


export default function Login() {

  const [currentForm, setCurrentForm]= useState(0);
  const {user: currentUser, login, logout} = useAuth();

  function cambioFormulario(idForm:number){
    setCurrentForm(idForm)
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
                ¿Recordaste la Contraseña?
                <Link href="#" onPress={()=>cambioFormulario(0)}>
                  Volver
                </Link>
              </p>
                <Button onPress={()=>cambioFormulario(3)} color="primary">Enviar Codigo</Button>
            </form>
        </div>
      </section>
    );
  }

  function RecuperarContraCodigo(){
    return (
      <section className="login-main">
        <div className="login-container">
          <h1 className="mb-5 text-xl font-bold text-center">
            Recuperar Contraseña
          </h1>
          <form className="login-form">
            <Input
              name="Correo"
              type="text"
              label="Codigo de verificacion"
              required
            ></Input>
            <p>
              ¿Te equivocaste de correo?{" "}
              <Link href="#" onPress={() => cambioFormulario(2)}>
                Volver
              </Link>
            </p>
            <Button color="primary">Enviar Codigo</Button>
          </form>
        </div>
      </section>
    );
  }

  if (currentUser) {
    redirect("/");
  }
  switch (currentForm) {
    case 0:
      return <LoginForm changeForm={cambioFormulario}></LoginForm>
    case 1: 
      return <RegisterForm changeForm={cambioFormulario}></RegisterForm>
    case 2:
      return <RecuperarContraCorreo></RecuperarContraCorreo>
    case 3: 
      return <RecuperarContraCodigo></RecuperarContraCodigo>
  }

} 