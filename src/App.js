import './App.css';
import API from './Components/API/API';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Suggestion from './Components/Suggestion/Suggestion';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={API} />
        <Route path='/suggestion' component={Suggestion} />
        <API />
      </Switch>
    </div>
  );
}

export default App;
