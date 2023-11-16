import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/pages/news';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import Comparison from './components/pages/Comparison';
import NirfRanking from './components/pages/NirfRanking';
import CoursesRanking from './components/pages/coursesRanking';
import Login from './NextAuth/Login';
import FeeRanking from './components/pages/FeeRanking';
import RecomendedUniversities from './components/pages/RecomendedUniversities';
import Loggedin from './NextAuth/LoggedIn';
import Universities from './components/pages/Universities';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Reviews from './components/pages/Reviews';
import Admissions from './components/pages/Admissions';
import Appy from './CompareModule/Components/App';


function App() { 
  return (
    <Router>
      <Navbar/>
      <Routes>  
        <Route path='/' exact element={<Home/>}/>
        <Route path='/placementranking' element={<Services/>}/>
        <Route path='/recomended' element={<RecomendedUniversities/>}/>
        <Route path='/contact-us' element={<Appy/>}/>
        <Route path='/nirfranking' element={<NirfRanking/>} />
        <Route path='/courseranking' element={<CoursesRanking/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/feeranking' element={<FeeRanking/>} />
        <Route path='/loggedin'  element={<Loggedin/>}/>
        <Route path='/services'  element={<Services/>}/>
        <Route path='/universities' element={<Universities/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/admissions' element={<Admissions/>} />
      </Routes>
    </Router>
  );
}

export default App;
