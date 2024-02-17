import React from 'react';
import axios from "axios";

function ErrorPage(props) {

    async function loginRequest() {
        try {
            const response = await axios.get('https://api.datavortex.nl/fiveecenter/info');

            console.log(response)

        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div>error pagina</div>
            <button type="button" onClick={() => {loginRequest()}}>test</button>
        </>
    );
}

export default ErrorPage;