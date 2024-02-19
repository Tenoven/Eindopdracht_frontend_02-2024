import './App.css'
import Header from "./components/header/header.jsx";
// import NavButton from "./components/buttons/navButton/navButton.jsx";
import Footer from "./components/footer/footer.jsx";
// import SearchBar from "./components/SearchBar/searchBar.jsx";
import HomePage from "./pages/homePage/homepage.jsx";
import {Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/loginPage/loginPage.jsx";
import RegisterPage from "./pages/registerPage/registerPage.jsx";
import CharacterCreator from "./pages/characterCreator/characterCreator.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import EncyclopediaPage from "./pages/encyclopediaPage/encyclopediaPage.jsx";
import {statCalculator} from "./Helpers/stat-roller/statDiceRoller.js";
import SearchBar from "./components/SearchBar/searchBar.jsx";
import BackgroundPage from "./pages/encyclopediaPage/backgrounds/BackgroundPage.jsx";
import ClassesPage from "./pages/encyclopediaPage/classes/ClassesPage.jsx";
import FeatsPage from "./pages/encyclopediaPage/feats/FeatsPage.jsx";
import ItemPage from "./pages/encyclopediaPage/items/itemPage.jsx";
import MonsterPage from "./pages/encyclopediaPage/monsters/monsterPage.jsx";
import SpellPage from "./pages/encyclopediaPage/spells/spellPage.jsx";

function App() {
  return (
    <>
        <Header></Header>
        <SearchBar></SearchBar>
          <Routes>
            <Route path="/" element={<HomePage/>} />

            <Route path="*" element={<ErrorPage/>} />

            <Route path="/login" element={<LoginPage/>} />

            <Route path="/register" element={<RegisterPage/>} />

            <Route path="/encyclopedia" element={<EncyclopediaPage/>} />
              <Route path="/encyclopedia/races" element={<BackgroundPage/>} />
              <Route path="/encyclopedia/classes" element={<ClassesPage/>} />
              <Route path="/encyclopedia/backgrounds" element={<FeatsPage/>} />
              <Route path="/encyclopedia/feats" element={<FeatsPage/>} />
              <Route path="/encyclopedia/items" element={<ItemPage/>} />
                <Route path="/encyclopedia/items/weapons" element={} />
                <Route path="/encyclopedia/items/armor" element={} />
                <Route path="/encyclopedia/items/magicitems" element={} />
              <Route path="/encyclopedia/spells" element={<SpellPage/>} />
              <Route path="/encyclopedia/monsters" element={<MonsterPage/>} />

            <Route path="/charactercreator" element={<CharacterCreator/>} />

            {/*<Route path="/" element={} />*/}
            {/*<Route path="/" element={} />*/}
          </Routes>
          <Footer></Footer>

    </>
  )
}

export default App
