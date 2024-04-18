import './App.css'
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import HomePage from "./pages/homePage/homepage.jsx";
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage.jsx";
import RegisterPage from "./pages/registerPage/registerPage.jsx";
import CharacterCreator from "./pages/characterCreator/characterCreator.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import EncyclopediaPage from "./pages/encyclopediaPage/encyclopediaPage.jsx";
import BackgroundPage from "./pages/encyclopediaPage/backgrounds/BackgroundPage.jsx";
import ClassesPage from "./pages/encyclopediaPage/classes/ClassesPage.jsx";
import FeatsPage from "./pages/encyclopediaPage/feats/FeatsPage.jsx";
import ItemPage from "./pages/encyclopediaPage/items/itemPage.jsx";
import MonsterPage from "./pages/encyclopediaPage/monsters/monsterPage.jsx";
import SpellPage from "./pages/encyclopediaPage/spells/spellPage.jsx";
import WeaponPage from "./pages/encyclopediaPage/items/WeaponPage/WeaponPage.jsx";
import ArmorPage from "./pages/encyclopediaPage/items/armor/ArmorPage.jsx";
import MagicItemPage from "./pages/encyclopediaPage/items/MagicitemsPage/MagicItemPage.jsx";
import RacePage from "./pages/encyclopediaPage/races/racePage.jsx";
import CharacterSheet from "./pages/characterCreator/character sheet/characterSheet.jsx";
import ProfilePage from "./pages/profilePage/profilePage.jsx";
import ProfileCharacterSheet from "./pages/profilePage/charactersheet/ProfilecharacterSheet.jsx"
import {AuthContext} from "./context/authContext/AuthContext.jsx";
import {useContext} from "react";


function App() {
    const {isAuthenticated} = useContext(AuthContext);

  return (
    <>
        <Header></Header>
        <div className="appBody">
            <Routes>
              <Route path="/" element={<HomePage/>} />

              <Route path="*" element={<ErrorPage/>} />

              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/profile" element={isAuthenticated ? <ProfilePage/> : <Navigate to={"/login"}/>}/>
                <Route path="/profile/charactersheet" element={isAuthenticated ? <ProfileCharacterSheet/> : <Navigate to={"/login"}/>} />

              <Route path="/encyclopedia" element={<EncyclopediaPage/>} />
                <Route path="/encyclopedia/races" element={<RacePage/>} />
                <Route path="/encyclopedia/classes" element={<ClassesPage/>} />
                <Route path="/encyclopedia/backgrounds" element={<BackgroundPage/>} />
                <Route path="/encyclopedia/feats" element={<FeatsPage/>} />
                <Route path="/encyclopedia/items" element={<ItemPage/>} />
                  <Route path="/encyclopedia/items/weapons" element={<WeaponPage/>} />
                  <Route path="/encyclopedia/items/armor" element={<ArmorPage/>} />
                  <Route path="/encyclopedia/items/magicitems" element={<MagicItemPage/>} />
                <Route path="/encyclopedia/spells" element={<SpellPage/>} />
                <Route path="/encyclopedia/monsters" element={<MonsterPage/>} />

              <Route path="/charactercreator" element={isAuthenticated ? <CharacterCreator/> : <Navigate to={"/login"}/> } />
                <Route path="/charactercreator/charactersheet" element={isAuthenticated ? <CharacterSheet/> : <Navigate to={"/login"}/>}/>

            </Routes>
        </div>
          <Footer></Footer>

    </>
  )
}

export default App
