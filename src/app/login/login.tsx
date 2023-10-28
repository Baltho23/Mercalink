'use client'
import './login.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from '@nextui-org/link';
import { useState } from 'react';


export default function Login() {

    const[isLoginForm, setIsLoginForm]= useState(true) 


    function cambioFormulario(){
        setIsLoginForm(!isLoginForm)
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
                    <p>¿Aun no tienes cuenta? <Link href='#' onPress={cambioFormulario}>Registrate</Link></p>
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
                  <Link href="#" onPress={cambioFormulario}>
                    Inicia Sesion
                  </Link>
                </p>
                <Button color="primary">Registrarse</Button>
              </form>
            </div>
          </section>
        );
    }

    return (
        <>
        {isLoginForm ? <LoginForm/> : <RegisterForm/>}
        </>
    );
} 