import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tour-du-lich" component={Tours} />
        <Route exact path="/tour-du-lich/:slug" component={TourDetail} />
        <Route exact path="/lien-he" component={Contact} />
        <Route path="/" component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
