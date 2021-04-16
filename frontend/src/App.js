import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/signup" component={Register}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/" component={Login}/>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
