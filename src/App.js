

import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContainer from './components/UserContainer';
import MyNotesContainer from './components/MyNotesContainer';


function App() {
  
  return (
    <Router>
    <div className="main">
      <Navbar />

     <div className="main-container">
       <Switch>
     <Route exact path="/">
       <Home />
       </Route>
       <Route path="/UserContainer">
       <UserContainer />
       </Route>
       <Route path="/MyNotesContainer">
         <MyNotesContainer />
       </Route>
      </Switch>
     </div>

    </div>
    </Router>
  );
}

export default App;
