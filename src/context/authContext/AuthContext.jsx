import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext({})


const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: {
            email: "",
            password: "",
            username: "",
        },
        status: "pending",
    });
    const currentTime = Date.now()

    useEffect(() => {
        if(localStorage.getItem("token")){
            const decoded = jwtDecode(localStorage.getItem("token"))
            const token = localStorage.getItem("token")
            void fetchUserData(decoded, token, false)
            decoded.exp >= currentTime
        }else{
            setIsAuth({
                isAuthenticated: false,
                user:"",
                status: "done",
            })
        }


    }, []);


    function loginRequest(token, userName) {
        localStorage.setItem("token", token);
        const decoded = jwtDecode(token);
        console.log(decoded);

        void fetchUserData(userName, token, true);
    }

    async function fetchUserData(userName, token, redirect) {
        try {
            const response = await axios.get(`https://api.datavortex.nl/fiveecenter/users/${userName}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setIsAuth({
                isAuthenticated: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done",
            });

            if(redirect) {
                navigate("/user");
            }

        } catch (e) {
            console.error(e);
            setIsAuth({
                isAuthenticated: false,
                user:"",
                status: "done",
            })
        }

    }

    useEffect(() => {
    }, [isAuth.isAuthenticated]);

    function logOut() {
        setIsAuth({
            isAuthenticated: false,
            user: "",
            status: "done",
        })
        localStorage.removeItem("token")
        localStorage.removeItem("userName")
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