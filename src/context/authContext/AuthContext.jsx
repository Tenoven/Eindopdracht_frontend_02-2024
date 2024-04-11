import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({})


const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: {
            email: "",
            password: "",
            username: "",
        },
        status: "pending",
    });

    useEffect(() => {
        if(localStorage.getItem("token")){
            const decoded = jwtDecode(localStorage.getItem("token"))
            const token = localStorage.getItem("token")
            void fetchUserData(decoded, token)
        }else{
            setIsAuth({
                isAuth: false,
                user:"",
                status: "done",
            })
        }
    }, []);


    function loginRequest(token, passWord) {
        const decoded = jwtDecode(token)

        setIsAuth((isAuth) => ({
            ...isAuth,
            isAuth: true,
            user: {...isAuth.user, username: decoded.sub, password: passWord, token: token}
        }));
        localStorage.setItem("token", token)

        void fetchUserData(decoded, token)
    }

    async function fetchUserData(decoded, token) {
        const id = decoded.sub
        try {
            const response = await axios.get(`https://api.datavortex.nl/fiveecenter/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setIsAuth({
                isAuth: true, user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done",
            })

        } catch (e) {
            console.error(e)
        }

    }

    useEffect(() => {
    }, [isAuth]);

    function logOut() {
        setIsAuth({
            isAuth: false,
            user: "",
            status: "done",
        })
        localStorage.removeItem("token")
        navigate('/login')
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