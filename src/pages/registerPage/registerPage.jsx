import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./registerPage.css"
import Button from "../../components/buttons/button.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    ///// constants /////
    const [registerState , setRegisterState] = useState({
        name: "",
        email: "",
        password: "",
    })
    const apiKey = "fiveecenter:QYuQLy403EpdOrbx1jfl"
    const navigate = useNavigate()



    ///// functions /////
    function handleChange(event){
        const changedFieldName = event.target.name

        setRegisterState( registerState => ({
            ...registerState,
            [changedFieldName]: event.target.value,
        }))
    }

    function onSubmit(e) {
        e.preventDefault()
        void registerUser()
    }
    async function registerUser() {
        try {
            const response = await axios.post(
                `https://api.datavortex.nl/fiveecenter/users`, {
                    "username": registerState.name,
                    "email": registerState.email,
                    "password": registerState.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': apiKey
                    }
                })
            navigate("/login")
        } catch (e) {
            console.error(e)
        }
        }


    return (
        <>
            <BasicDragonBackground>
                <p>Register</p>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input type="text" name="name" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="">Password:</label>
                        <input type="password" name="password" onChange={handleChange}/>
                    </div>
                <Button type="submit" className="yellow">Submit login</Button>
            </form>
            </BasicDragonBackground>
        </>
    );
}

export default RegisterPage;