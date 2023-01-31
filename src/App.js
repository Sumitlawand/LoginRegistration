import './App.css';
import Home from './Components/Homepage/Home';
import Register from './Components/register/Register';
import Login from './Components/Login/Login';
import { BrowserRouter as Router,Route,  Switch, } from 'react-router-dom';
import { useState } from 'react';


function App() {

 const [user, setLog] = useState({})
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route  exact path="/">
          {

            user && user._id
            ?
            // <Home setLog={setLog}/>
            <Home />
            :
            <Login setLog={setLog}/>
          }
          
     </Route>
        <Route path="/Login" ><Login setLog={setLog}/></Route>
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
