import { EmptyRegistro, RegistroDTO } from "@/app/models/auth.model";
import { useAuth } from "@/app/services/auth.provider";
import { API_URL, POST } from "@/app/services/fetch.service";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

export function RegisterForm({changeForm}: {changeForm: Function}) {

    const {user: currentUser, login, logout} = useAuth();
    const [registroForm, setRegistroForm]: [RegistroDTO, Function] = useState(EmptyRegistro);

    function handleRegistroForm(event: any) {
      const {name, value} = event.target;
      setRegistroForm((prevFormData: RegistroDTO) => ({
          ...prevFormData,
          [name]: value,
      }));
    }

    function submitForm() {
      const body = JSON.stringify(registroForm);
      console.log(body);
      fetch(`${API_URL}/register`, {...POST, body})
      .then((response) => response.json())
      .then((resp) => {
        const token = resp.access_token;
        const user = resp.data;
        localStorage.setItem('token', token);
        login(user);
      })
      .catch(
        (error) => console.log(error)
      );
    }

    return (
      <section className="login-main">
        <div className="login-container">
          <h1 className="mb-3 text-xl font-bold text-center">Bienvenido</h1>
          <form className="login-form">
            <Input
              name="name"
              type="text"
              label="Nombre"
              value={registroForm.name}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input 
              name="lastName" 
              type="text" 
              label="Apellido" 
              value={registroForm.lastName}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input 
              name="nit" 
              type="text" 
              label="NIT" 
              value={registroForm.nit}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input 
              name="razon_social" 
              type="text" 
              label="Razon social" 
              value={registroForm.razon_social}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input 
              name="direccion" 
              type="text" 
              label="Dirección" 
              value={registroForm.direccion}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input
              name="email"
              type="email"
              label="Correo"
              value={registroForm.email}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input
              name="password"
              type="password"
              label="Contraseña"
              value={registroForm.password}
              onChange={handleRegistroForm}
              required
            ></Input>
            <Input
              name="confirmPassword"
              type="password"
              label="Confirmar Contraseña"
              value={registroForm.confirmPassword}
              onChange={handleRegistroForm}
              required
            ></Input>
            <p>
              ¿Ya tienes cuenta?{" "}
              <Link href="#" onPress={() => changeForm(0)}>
                Inicia Sesion
              </Link>
            </p> 
            <Button color="primary" onPress={submitForm}>Registrarse</Button>
          </form>
        </div>
      </section>
    );
  }