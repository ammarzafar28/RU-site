import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { HomePage } from './Layouts/HomePage/HomePage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { ProgramsAndServicesPage } from './Layouts/ProgramsAndServicesPage/ProgramsAndServicesPage';
import { ContactPage } from './Layouts/ContactPage/ContactPage';
import { AboutPage } from './Layouts/AboutPage/AboutPage';
import { GetInvolvedPage } from './Layouts/GetInvolvedPage/GetInvolvedPage';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/programsandservices">
            <ProgramsAndServicesPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/getinvolved">
            <GetInvolvedPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
