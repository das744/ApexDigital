
import './scss/css/App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App=()=> {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <footer>©2023-2077 React Router.</footer>
    </Router>
  );
}

export default App;
