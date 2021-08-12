// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  return (
    <div className="main">
       <h1 className="main-header">CREATE MY DAY</h1>
      <p>Just testing the font to see how it looks</p>
      <div>
        <CreateUser />
      </div>
    </div>
  );
}

export default App;
