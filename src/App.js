import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Error from './pages/Error';
import ScrollToTop from './components/ScrollToTop';

function App() {

  useEffect(() => {
    document.title = "UT Travel"
  }, [])
  
  return (
    <>
      <ScrollToTop>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tour-du-lich" component={Tours} />
            <Route exact path="/tour-du-lich/:slug" component={TourDetail} />
            <Route exact path="/lien-he" component={Contact} />
            <Route path="/" component={Error} />
          </Switch>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
