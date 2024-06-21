import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { HomePage } from './Layouts/HomePage/HomePage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { ProgramsAndServicesPage } from './Layouts/ProgramsAndServicesPage/ProgramsAndServicesPage';
import { ContactPage } from './Layouts/ContactPage/ContactPage';
import { AboutPage } from './Layouts/AboutPage/AboutPage';
import { GetInvolvedPage } from './Layouts/GetInvolvedPage/GetInvolvedPage';
import { Team } from './Layouts/AboutPage/Team';
import { Story } from './Layouts/AboutPage/Story';

 
function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route path="/" exact>
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" component={HomePage} />
                <Route path="/programsandservices" component={ProgramsAndServicesPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/team" component={Team} />
                <Route path="/story" component={Story} />
                <Route path="/getinvolved" component={GetInvolvedPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
      <Footer />
    </div>
  );
}

export default App;



/*
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
*/
