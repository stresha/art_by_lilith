import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Banner from './component/Banner/Banner';
import Gallery from './component/Gallery/Gallery';
import NavBar from './component/Navbar/Navbar';
import About from './component/About/About';
import Get from './component/Get/Get';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <NavBar/>
      <Routes>
     
       <Route path='/Gallery' element={<Gallery />} />
      <Route path='/About' element={<About />} />
      <Route path='/Get' element={<Get />} />
      </Routes>
      </BrowserRouter>
      <Banner/>
      
      </header>
    </div>
  );
}

export default App;
