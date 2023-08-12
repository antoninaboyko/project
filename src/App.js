import React from 'react';

import './style.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './components/Nav/nav';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Servises from './pages/Services/services';
import Blog from './pages/Blog/blog';
import Category from './pages/Category/category';
import Contact from './pages/Contact/contact';

function App() {

  

  return (
    <div className="App">
        <Router>
            <Navigation />
        
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/services' element= {<Servises/>} />
                <Route path='/blog' element= {<Blog/>} />
                <Route path='/contact' element= {<Contact/>} />
                <Route path='/category' element= {<Category/>} />
            </Routes>

            <Footer />
        </Router>
    </div>
  );
}

export default App;
