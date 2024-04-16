import React, {useState} from 'react';
import "./searchBar.css"
import Button from "../buttons/button.jsx";

function SearchBar() {

    const [formState, setFormState] = useState({
        searchInput: ""
    })

    function handleChange(e){
        const changedFieldName = e.target.name
        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }

        function handleSubmit(e) {
            e.preventDefault()
            // console.log(formState)
        }

    return (
        <>
            <section className="searchbar">
                <form className="searchForm" onSubmit={handleSubmit}>
                    <input type="text" className="searchFormInput" onChange={handleChange} name="searchInput" />
                    <Button type="submit" className="searchbarButton">Search</Button>
                </form>
            </section>
        </>
    );
}

export default SearchBar;