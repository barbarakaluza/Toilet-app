import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

// import Header from './components/Header/Header';
import LogOut from './pages/LogOut';
import Registration from './pages/Registration';
import YourOpinions from './pages/YourOpinions';


function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/youropinion" element={<YourOpinions/>} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="https://www.support-online.pl/" element={<LogOut/>}/>
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
