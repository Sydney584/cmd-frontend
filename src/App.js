

import Navbar from './components/Navbar';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <div className="main">
      <Navbar />
     <div className="main-container">
     <Route exact path="/">
       <Home />
       </Route>
       <Route path="/UserDetails"></Route>
       <UserDetails />
      
     </div>

    </div>
    </Router>
  );
}

export default App;
