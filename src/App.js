import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './app.css'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
