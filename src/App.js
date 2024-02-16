import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

// import Header from './components/Header/Header';
import LogOut from './pages/LogOut';
import Registration from './pages/Registration';
import YourOpinions from './pages/YourOpinions';
import FoundToilet from './pages/FoundToilet';


function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/foundtoilet" element={<FoundToilet/>} />
        <Route path="/youropinions" element={<YourOpinions/>} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="https://www.support-online.pl/" element={<LogOut/>}/>
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
