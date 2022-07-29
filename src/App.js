
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsHolder from './components/NewsHolder';
import {
   BrowserRouter as Router,
 
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  let pagesize=3;
  return (
    <>
    
    <Router>
    <Navbar title="MyNews"/>
      <Routes>
      <Route exact path='/'element={ <NewsHolder key="india" pagesize={pagesize} country='in' cotegory="general"/>}/>    
   <Route exact path='/technology'element={ <NewsHolder key="technology" pagesize={pagesize} country='in' cotegory="technology"/>}/>
   <Route exact path='/business'element={ <NewsHolder key="bussiness" pagesize={pagesize} country='in' cotegory="business"/>}/>
   <Route exact path='/sports'element={ <NewsHolder key="sport" pagesize={pagesize} country='in' cotegory="sports"/>}/>
   <Route exact path='/science'element={ <NewsHolder key="science" pagesize={pagesize} country='in' cotegory="science"/>}/>
    </Routes>
    
    </Router>
    <Footer/>
    
    
    </>
  );
}

export default App;
