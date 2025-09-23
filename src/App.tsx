import NavItem from './components/navbar/navItem';
import ScreenSizeIndicator from './components/ScreenSizeIndicator';
import Home from './pages/Home/index'
import Footer from './components/navbar/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/ContactUS/sections/Contact'
function App() {
  return (
    <>
  <Router>
    <div>
      <NavItem />

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/abc" element={<Contact />} />
      </Routes>
      <ScreenSizeIndicator />
      
      <Footer />
    </div>
  </Router>
    </>
  );
}

export default App;
