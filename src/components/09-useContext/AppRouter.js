import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/login" element={<LoginScreen/>}/>
            <Route exact path="/"  element={<HomeScreen/>}/>
            <Route exact path="/about" element={<AboutScreen/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default AppRouter