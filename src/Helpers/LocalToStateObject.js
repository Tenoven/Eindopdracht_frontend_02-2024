import { useEffect, useState } from "react";

function LocalToStateObject() {
    const [formState, setFormstate] = useState({
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
    });

    useEffect(() => {
        const populateFormStateFromLocalStorage = () => {
            setFormstate(prevFormState => {
                const updatedFormState = { ...prevFormState };
                for (const key in updatedFormState) {
                    const storedValue = JSON.parse(localStorage.getItem(key));

                    if (storedValue !== null) {
                        updatedFormState[key] = storedValue;
                    }
                }

                return updatedFormState;
            });
        };

        populateFormStateFromLocalStorage();
    }, []);

    return formState;
}

export default LocalToStateObject;


