import { useEffect, useState } from "react";

function LocalToStateObject() {
    const baseForm = {
        name: "",
        age: "",
        height: "",
        weight: "",
        eyeColour: "",
        skinColour: "",
        hairColour: "",
        STR: "",
        DEX: "",
        CON: "",
        WIS: "",
        INT: "",
        CHA: "",
        race: "",
        class: "",
        background: "",
    };

    const [formState, setFormstate] = useState([]);

    useEffect(() => {
        const populateFormStateFromLocalStorage = () => {
            setFormstate(prevFormState => {
                const updatedFormState = { ...prevFormState };
                for (const key in baseForm) {
                    const storedValue = JSON.parse(localStorage.getItem(key));
                    updatedFormState[key] = storedValue;

                }

                return updatedFormState;
            });
        };

        populateFormStateFromLocalStorage();
    }, []);

    return formState;
}

export default LocalToStateObject;


