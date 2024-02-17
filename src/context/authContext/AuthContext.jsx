import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({})


const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Context wordt gerefresht!")
        if(localStorage.getItem("token")){
            const decoded = jwtDecode(localStorage.getItem("token"))
            const token = localStorage.getItem("token")
            void fetchUserData(decoded, token)
            console.log("er is een token", token)
        }else{
            setIsAuth({isAuth: false,
                user:"",
                status: "done",
            })
            console.log("er is geen token")
        }
    }, []);

    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: {
            email: "",
            id: "",
        },
        status: `pending`
    })

    async function loginRequest(loginData) {
        try {
            const response = await axios.post('https://api.datavortex.nl/fiveecenter/info', loginData);

            localStorage.setItem("token", response.data.accessToken)

            const decoded = jwtDecode(localStorage.getItem("token"))
            console.log(decoded)
            setIsAuth({
                ...isAuth,
                isAuthenticated: true,
                user: {
                    id: decoded.sub,
                    email: decoded.email,
                }
            })
        } catch (error) {
            console.error('Error:', error);
        } finally {
            navigate("/profile")
        }
    }

    useEffect(() => {
        console.log(isAuth)
    }, [isAuth]);

    function logOut() {
        localStorage.removeItem("token")
        setIsAuth({
            isAuthenticated: false,
            user: "",
        })
        navigate("/")
    }

    const data = {
        ...isAuth,
        logOut : logOut,
        loginRequest: loginRequest,
    }

    return (
        <>
            <AuthContext.Provider value={data}>
                {isAuth.status === "done" ? children : <p>Loading...</p>}
            </AuthContext.Provider>
        </>
    );
}

export default AuthContextProvider