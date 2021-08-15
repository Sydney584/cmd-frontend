import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="main">
      <Navbar />
     <div className="content">
       <Home />
      
     </div>

    </div>
    
  );
}

export default App;
