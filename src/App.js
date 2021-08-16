

import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserContainer from './components/UserContainer';

function App() {
  
  return (
    <Router>
    <div className="main">
      <Navbar />
     <div className="main-container">
     <Route exact path="/">
       <Home />
       </Route>
       <Route path="/UserContainer"></Route>
       <UserContainer />
      
     </div>

    </div>
    </Router>
  );
}

export default App;
