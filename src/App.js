import React from 'react';
// import View from 'react-native';
import './App.css';
// import {NativeRouter,Route,Link} from "react-router-native";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import NewProject from './pages/NewProject';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <h2 className="App">Project Manager</h2>
      {/* <div>
        <button onClick={new_project}>New Project</button>
        <button>View Projects</button>
      </div> */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/new/project">New Project</Link>
              </li>
              <li>
                <Link to="/projects">View Projects</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            < Route path = "/new/project" >
              <NewProject/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
          </Switch>

        </div>
      </Router>

      {/* <NativeRouter>
        <View>
          <View>
            <Link to="/new/project">
              <NewProject/>
            </Link>
            <Link to="/projects">
              <Projects/>
            </Link>          
          </View>

          <Route exact path="/new/project" component={NewProject} />
          <Route path="/projects" component={Projects} />

        </View>
      </NativeRouter> */}

    </div>
  );
}

// function new_project(){
//   return(
//     <div>
      
//     </div>
//   );
// }

// function get_projects() {
//   return (dispatchEvent) => {
//     return axios.get()
//   }
// }

export default App;
