import './App.css';
import React from 'react'
import API from './Components/API/API';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Suggestion from './Components/Suggestion/Suggestion';
import {UserContext} from './Components/ContextFolder/UserContext';

function App() {
  return (
    <div>
      <Navbar />
      <UserContext.Provider value={<button>Context Button</button>}>
      <Switch>
        <Route path='/' exact component={API} />
        <Route path='/suggestion' component={Suggestion} /> 
        <API />
      </Switch>

      </UserContext.Provider>
    </div>
  );
}

export default App;
