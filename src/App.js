import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import CounterExample from './Components/CounterExample'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'


function App() {
  return (
    <div className="relative pb-10 min-h-screen">

      <Router>
        <Header/>

        <div className="p-3">
          <Routes>

            <Route exact path="/" element={<Home/>}/>

            <Route exact path="/about" element={<About/>}/>

            <Route exact path="/products/:id" element={<Product/>}/>

          </Routes>
        </div>


      </Router>



      <Footer/>
      {/* <CounterExample/> */}
     {/* <div> https://www.youtube.com/watch?v=o7c_RRUTQHo&list=PL41lfR-6DnOoTiHU4Ub6efP-p3xAq3eiV&index=9 </div> */}
    </div>
  );
}

export default App;
