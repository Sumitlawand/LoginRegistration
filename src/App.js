import './App.css';
import Home from './Components/Homepage/Home';
import Register from './Components/register/Register';
import Login from './Components/Login/Login';
import { BrowserRouter as Router,Route,  Switch, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route  exact path="/"><Home/></Route>
        <Route path="/Login"><Login/></Route>
        <Route path="/Register"><Register/></Route>
      </Switch>
     </Router>

      {/* <Home/>  */}
        {/* <Login/> */}
      {/* <Register/> */}
    
    </div>
  );
}

export default App;
