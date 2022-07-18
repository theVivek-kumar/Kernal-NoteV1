import axios from "axios";
import { createContext, useContext, useReducer, } from "react";
const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);
const AuthReducer = (state, { type, payload }) => {
switch (type) {
    case "EMAIL":
    return { ...state, email: payload };

    case "PASSWORD":
    return { ...state, password: payload };

    case "CONFIRM_PASSWORD":
    return { ...state, confirmPassword: payload };

    case "FIRST_NAME":
    return { ...state, firstName: payload };

    case "LAST_NAME":
    return { ...state, lastname: payload };

    default:
    return state;
}
};
const AuthProvider = ({ children }) => {
const [authState, authDispatch] = useReducer(AuthReducer, {
    firstName: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
});
    async function signUp(firstName, lastname, email, pasword, navigate, location, encodedToken) {
        try {
            const regExForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            if (encodedToken) {
            }
            if (regExForEmail.test(email)) {
                const response = await axios({
                    method: "POST",
                    url: "/api/auth/signup",
                    data: {
                        email: email,
                        password: pasword,
                        someUserAttribute1: firstName,
                        someUserAttribute2: lastname,
                    },
                });
                if (response.status === 201) {
                    localStorage.setItem("token", response.data.encodedToken);
                    navigate(location?.state?.from?.pathname, { replace: true })
                }
            } else {
                console.log("Wrong Email format!!!")
            }
        } catch (error) {
            console.error(error);
        }
    }
    async function login(email, password, navigate, location, encodedToken) {
        console.log("login")
        try {
            if (encodedToken) {
                console.log("u are log in")
            }
            const response = await axios({
                method: "POST",
                url: "/api/auth/login",
                data: {
                    email: email,
                    password: password,
                },
            });
            if (true) {
                localStorage.setItem("token", response.data.encodedToken);
                navigate(location?.state?.from?.pathname, { replace: true })
            }
        } catch (error) {
            console.log(error);
        }
    }
return (
    <AuthContext.Provider value={{authState,authDispatch,login,signUp}}>
    {children}
    </AuthContext.Provider>
);
};
export { useAuthContext, AuthProvider };