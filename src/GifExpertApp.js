
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import SeachAll from './components/pages/SeachAll';



export const GifExpertApp = () => {
  
 return (
    <>
      
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/searchall" element={<SeachAll/>} />

        </Routes>
      </Router> 
      




    </>
  )
}
