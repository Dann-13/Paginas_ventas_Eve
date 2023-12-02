// Importa los módulos necesarios de React y la función de solicitud de registro desde un archivo de autenticación externo.
import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth";
import Cookies from 'js-cookie';

// Crea un contexto de autenticación utilizando createContext.
export const AuthContext = createContext();

// Hook personalizado que utiliza el contexto de autenticación.
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// Componente AuthProvider que gestiona el estado de autenticación y proporciona el contexto a sus hijos.
export const AuthProvider = ({ children }) => {
    // Define estados para el usuario, estado de autenticación y errores.
    const [user, setUser] = useState();
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [isAdmin, setisAdmin] = useState(false)
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);


    // Función asincrónica para el registro de usuarios.
    const signup = async (user) => {
        try {
            // Realiza una solicitud de registro utilizando la función registerRequest.
            const res = await registerRequest(user)
            // Establece el usuario, marca como autenticado.
            setUser(res.data)
            setisAuthenticated(true);
        } catch (error) {
            // En caso de error, establece los errores en el estado.
            setErrors(error.response.data);
        }
    }
    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setisAuthenticated(true);
            setUser(res.data);
            setisAdmin(res.data.isAdmin)
            
        } catch (error) {
            setErrors(error.response.data)
        }


    }
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [errors])

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setisAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                console.log(res);
                if (!res.data) return setisAuthenticated(false);
                setisAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setisAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);

    //  Función para cerrar la sesión del usuario.
    const logout = async () => {
        try{
            // Realiza una solicitud de logout utilizando la función logoutRequest.
            await logoutRequest();
            // Limpia las cookies y actualiza el estado de autenticación.
            Cookies.remove('token');
            setisAuthenticated(false);
            setUser(null);
            setisAdmin(null)
        }catch(error){
            console.error("Error during logout:", error);
        }
    }

    // Proporciona el contexto y sus valores a los componentes secundarios.
    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                logout,
                user,
                loading,
                isAuthenticated,
                errors,
                isAdmin

            }}>
            {children}
        </AuthContext.Provider>
    )
}
