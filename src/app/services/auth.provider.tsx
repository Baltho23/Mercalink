'use client'
import { useRouter } from "next/navigation";
import { Context, createContext, useContext, useEffect, useState } from "react"

const AuthContext: Context<any> = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: any) => {
    
    const router = useRouter();
    const [ user, setUser ]: any = useState(null);
    const [ protectedRoute, setProtectedRoute]: [boolean, Function] = useState(false);
    const [ loading, setLoading]: [boolean, Function] = useState(true);

    useEffect(() => {
        const superUser = {usuario: 'admin', clave: 'admin'};
        const token = localStorage.getItem('token');
        if (token) {
            setUser(superUser);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [])
    

    const login = (user: any) => {
        setUser(user);
        localStorage.setItem('token', 'ADMIN');
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    if (!loading) {
        if (protectedRoute && !user.token) {
            return router.push('/login');
        } else {
            return (
                <AuthContext.Provider value={{user, login, logout}}>
                    { children }
                </AuthContext.Provider>
            )
        }
    }
}

