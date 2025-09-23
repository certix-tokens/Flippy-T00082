import NavItem from './components/navbar/navItem';
import ScreenSizeIndicator from './components/ScreenSizeIndicator';
import Home from './pages/Home/index'
import Footer from './components/navbar/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/ContactUS/sections/Contact';
import Htb from './pages/Howtobuy/sections/Howtobuy';
import Roadmap from './pages/RoadMap/Sections/Roadmap';
import Tokebg from './pages/Token/sections/Token';
import Join from './pages/Join/sections/join';
function App() {
  return (
    <>
  <Router>
    <div>
      <NavItem />

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about_us" element={<Contact />} />
       <Route path="/how-to-buy" element={<Htb />} />
       <Route path="/road-map" element={<Roadmap />} />
       <Route path="/toke" element={<Tokebg />} />
       <Route path="/join" element={<Join />} />
      </Routes>
      <ScreenSizeIndicator />
      
      <Footer />
    </div>
  </Router>
    </>
  );
}

export default App;
