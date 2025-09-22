import NavItem from './components/navbar/navItem';
import ScreenSizeIndicator from './components/ScreenSizeIndicator';
import Home from './pages/pageA/index'
import Footer from './components/navbar/footer'
function App() {
  return (
    <>
    <div>
      <NavItem />
      <ScreenSizeIndicator />
      <Home />
      <Footer />
    </div>
    </>
  );
}

export default App;
