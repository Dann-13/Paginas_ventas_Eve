// Importa los módulos necesarios de React y la función de solicitud de registro desde un archivo de autenticación externo.
import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth";
import Cookies from 'js-cookie';

// Creamos un contexto de autenticación utilizando createContext.
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

    // Función asincrónica para el inicio de sesión de usuarios.
    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setisAuthenticated(true);
            setUser(res.data);

            // Almacena isAdmin en localStorage
            localStorage.setItem('isAdmin', res.data.isAdmin);

        } catch (error) {
            setErrors(error.response.data)
        }
    }

    // Efecto para limpiar los errores después de un tiempo determinado.
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [errors])

    // Efecto para verificar el token al cargar la página.
    useEffect(() => {
        // Función asincrónica para verificar el estado de autenticación.
        const checkLogin = async () => {
            // Obtén las cookies del cliente.
            const cookies = Cookies.get();

            // Si no hay una cookie de token, el usuario no está autenticado.
            if (!cookies.token) {
                setisAuthenticated(false);
                setLoading(false); // Finaliza el estado de carga.
                return;
            }

            try {
                // Intenta verificar la validez del token haciendo una solicitud al servidor.
                const res = await verifyTokenRequest(cookies.token);

                // Registra la respuesta del servidor.
                console.log(res);

                // Si el servidor no devuelve datos, el token no es válido, y el usuario no está autenticado.
                if (!res.data) {
                    setisAuthenticated(false);
                } else {
                    // Si el servidor devuelve datos, el token es válido, y el usuario está autenticado.
                    setisAuthenticated(true);
                    setUser(res.data); // Establece la información del usuario.
                }

                setLoading(false); // Finaliza el estado de carga.
            } catch (error) {
                // En caso de error al verificar el token, el usuario no está autenticado.
                setisAuthenticated(false);
                setLoading(false); // Finaliza el estado de carga.
            }
        };

        // Llama a la función de verificación al cargar la página.
        checkLogin();

        // La dependencia del array vacío [] asegura que este efecto se ejecute solo una vez al montar el componente.
    }, []);

    // Función para cerrar la sesión del usuario.
    const logout = async () => {
        try {
            // Realiza una solicitud de logout utilizando la función logoutRequest.
            await logoutRequest();

            // Limpia las cookies y actualiza el estado de autenticación.
            Cookies.remove('token');
            setisAuthenticated(false);

            // Elimina isAdmin del localStorage
            localStorage.removeItem('isAdmin');

            setUser(null);
        } catch (error) {
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
            }}>
            {children}
        </AuthContext.Provider>
    )
}