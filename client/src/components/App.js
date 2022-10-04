import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,} from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import MovieDetail from "./views/MovieDetail/MovieDetail";
import NavBar from './views/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element = {<LoginPage/>}/>
        <Route exact path="/register" element = {<RegisterPage/>}/>
        <Route exact path="/movie/:movieId" element = {<MovieDetail/>}/>

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
