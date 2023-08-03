import './styles/App.css';
import './styles/navbar.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/navbar';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home'  element={<Home/>}/>
        <Route path='/side'  element={<Sidebar/>}/>
        <Route path='/Navbar'  element={<Navbar/>}/>
        <Route path='/About-me'  element={<Aboutme/>}/>
        <Route path='/Projects'  element={<Projects/>}/>
        <Route path='/Roadmap'  element={<Roadmap/>}/>
      </Routes>
      <Navbar/>
      
      <div className="contii">

         <Sidebar />
  <Home />
 
</div>

  
 
    </BrowserRouter>
  );
}

export default App;