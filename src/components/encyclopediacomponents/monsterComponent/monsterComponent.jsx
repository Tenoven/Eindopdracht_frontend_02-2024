///// imports /////
import {useState} from "react";
import Button from "../../buttons/button.jsx";
import "./monsterComponent.css"

///// main function /////
function MonsterComponent(props) {

///// constants /////
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

///// functions /////

///// return /////
    return (
        <div className="monsterCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>
                <p>{apiData.size +" "+ apiData.type +" , "+ apiData.alignment}</p>


                {showMore ? (
                    <>
                        <section>
                            {apiData.img_main != null ? (
                                <img src={apiData.img_main} alt=""/>
                            ) : null }
                        </section>


                        <section className="info_row">
                            <p>Armor class: {apiData.armor_class} ~ </p>
                            <p>Hit points: {apiData.hit_points} ({apiData.hit_dice}) ~ </p>
                            <p> <>Speed: </>
                                {Object.entries(apiData.speed).map(([key, value], index) => (
                                    <span key={index}>

                                        {key}: {value}
                                        {index !== Object.keys(apiData.speed).length - 1 && ", "}
                                    </span>
                                ))}
                                <> ~ </>
                            </p>
                            <p>CR: {apiData.cr}</p>
                        </section>

                        <section className="info_row">
                            <p>Str: {apiData.strength} ~</p>
                            <p>Dex: {apiData.dexterity} ~</p>
                            <p>Con: {apiData.constitution} ~</p>
                            <p>Int: {apiData.intelligence} ~</p>
                            <p>Wis: {apiData.wisdom} ~</p>
                            <p>Cha: {apiData.charisma}</p>
                        </section>


                        {apiData.strength_save != null && apiData.dexterity_save != null && apiData.constitution_save != null && apiData.intelligence_save != null && apiData.wisdom_save != null && apiData.charisma_save != null && (
                            <section className="info_row">
                                {apiData.strength_save != null ? (
                                    <p>Strength save: {apiData.strength_save}</p>
                                ) : null }

                                {apiData.dexterity_save != null ? (
                                    <p>Dex save: {apiData.dexterity_save}</p>
                                ) : null }

                                {apiData.constitution_save != null ? (
                                    <p>Con save: {apiData.constitution_save}</p>
                                ) : null }

                                {apiData.intelligence_save != null ? (
                                    <p>Int save: {apiData.intelligence_save}</p>
                                ) : null }

                                {apiData.wisdom_save != null ? (
                                    <p>Wis save: {apiData.wisdom_save}</p>
                                ) : null }

                                {apiData.charisma_save != null ? (
                                    <p>Cha save: {apiData.charisma_save}</p>
                                ) : null }
                            </section>
                        )}


                        <section className="info_column">
                            {apiData.skills != null ? (
                            <p><>Skills: </>
                            {Object.entries(apiData.skills).map(([key, value], index) => (
                                <span key={index}>
                                        {key}: {value}
                                    {index !== Object.keys(apiData.speed).length - 1 && ", "}
                                    </span>
                            ))} </p>
                            ) : null }
                            <p>Senses: {apiData.senses}</p>
                            <p>Languages: {apiData.languages}</p>
                        </section>

                        {apiData.special_abilities != null ? (
                            <section className="info_column">
                                {apiData.special_abilities.map((dat, index) => (
                                    <div key={index}>
                                        <p><b>{dat.name}:</b></p>
                                        <p>{dat.desc}</p>
                                    </div>
                                ))}
                            </section>
                        ) : null }



                        <section className="info_column">
                            <h3>Actions:</h3>
                            {apiData.actions.map((dat, index) => (
                                <div key={index}>
                                    <p><b>{dat.name}:</b></p>
                                    <p>{dat.desc}</p>
                                </div>
                            ))}
                        </section>

                        {apiData.legendary_actions != null ? (
                            <section>
                                    <>
                                        <h3>Legendary actions:</h3>
                                        <p><i>{apiData.legendary_desc}</i></p>
                                        {apiData.legendary_actions.map((dat, index) => (
                                            <div key={index}>
                                                <p><b>{dat.name}:</b></p>
                                                <p>{dat.desc}</p>
                                            </div>
                                        ))}
                                    </>
                            </section>
                            ) : null }


                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <>
                        <Button className="yellow" onClick={() => setShowMore(true)}>Show more</Button>
                    </>
                )}
            </fieldset>
        </div>
    );
}

export default MonsterComponent;