import React from 'react';
import './App.css';
import {Navigation} from './components/Navigation'
import {Main} from './components/Main'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import {Search} from './components/Search'


function App() {
  return (
    <Router>
    <Container fluid>
     <Switch>
       <Route path='/' exact>
     <Navigation />
     <div className="button d-flex justify-content-center">
    <button className="btn btn-primary" onClick={() => window.location='/home'}>Get Started</button>
   </div>
   </Route>
   <Route path='/home'>
     <Main />
   </Route>
   <Route exact path='/search' component={Search} />

   </Switch>
    </Container>
    </Router>

  );
}

export default App;
