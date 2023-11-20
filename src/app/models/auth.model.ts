export interface LoginDTO {
    email: string;
    password: string;
}

export const EmptyLogin = () => {
    const body: LoginDTO = {
        email: '',
        password: ''
    }
    return body;
}

export interface RegistroDTO {
    name: string;
    lastName: string;
    direccion: string;
    razon_social: string;
    email: string;
    nit: string;
    password: string;
    confirmPassword: string;
}

export const EmptyRegistro = () => {
    const body: RegistroDTO = {
        name: '',
        lastName: '',
        confirmPassword: '',
        direccion: '',
        email: '',
        nit: '',
        password: '',
        razon_social: ''
    }
    return body;
}