import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SideIcons from './components/SideIcons';
import IntroMedia from './components/IntroMedia';

function App() {
  return (
 <BrowserRouter>
 <ScrollToTop/>
 <Header/>
 <Routes>
  <Route path='/' element={<LandingPage/>}/>
 </Routes>
 <SideIcons/>
 <IntroMedia/>
 <Footer/>
 </BrowserRouter>   

  );
}

export default App;
