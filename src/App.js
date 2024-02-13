import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

// import Header from './components/Header/Header';
import LogOut from './pages/LogOut';
import Registration from './pages/Registration';
import YourOpinion from './pages/YourOpinions';


function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/logout" element={<LogOut/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/youropinion" element={<YourOpinion/>} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
