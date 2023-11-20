'use client'
import { redirect } from "next/navigation";
import { Context, createContext, useContext, useEffect, useState } from "react"
import { API_URL } from "./fetch.service";

const AuthContext: Context<any> = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    
    const [ user, setUser ]: [any | null, Function] = useState(null);
    const [ protectedRoute, setProtectedRoute]: [boolean, Function] = useState(false);
    const [ loading, setLoading]: [boolean, Function] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${API_URL}/token/` + token)
            .then((response) => response.json())
            .then((usuario) => {
                setUser(usuario)
                setLoading(false);
            })
            .catch(
            (error) => console.log(error)
            );
        } else {
            setLoading(false);
        }
    }, [])

    const login = (user: any) => {
        setUser(user);
    }

    const logout = () => {
        if (user) {
            const token = localStorage.getItem('token');
            fetch(`${API_URL}/logout`, {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                localStorage.removeItem('token');
                setUser(null);
            })
            .catch(
                (error) => console.log(error)
            );
        }
        
    }

    if (!loading) {
        if (protectedRoute && user) {
            redirect('/auth');
        } else {
            return (
                <AuthContext.Provider value={{user, login, logout}}>
                    { children }
                </AuthContext.Provider>
            )
        }
    }
}

