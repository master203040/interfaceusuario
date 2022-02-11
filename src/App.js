import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Home from './components/Home';



function App() {
  return (

    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
      </Routes>
    </BrowserRouter>
</div>

  );
}

export default App;
