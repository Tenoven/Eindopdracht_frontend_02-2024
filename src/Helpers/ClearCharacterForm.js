export function ClearCharacterForm() {

        const keysToRemove = [
            "18",
            "CHA",
            "eyeColour",
            "background",
            "name",
            "WIS",
            "DEX",
            "INT",
            "CON",
            "height",
            "STR",
            "skinColour",
            "weight",
            "race",
            "class",
            "age",
            "hairColour"
        ];

        // Remove keys from local storage
        keysToRemove.forEach(key => {
            localStorage.removeItem(key);
        });
}

export default ClearCharacterForm;