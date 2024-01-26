import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Home from './page/Home/Home';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
