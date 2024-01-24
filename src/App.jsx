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

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/encyclopedia" element={<EncyclopediaPage/>} />
        <Route path="/charactercreator" element={<CharacterCreator/>} />
        {/*<Route path="/" element={} />*/}
        {/*<Route path="/" element={} />*/}
        {/*<Route path="/" element={} />*/}
        {/*<Route path="/" element={} />*/}
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
