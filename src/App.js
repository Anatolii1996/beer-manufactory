import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from 'bootstrap'
import './App.scss';
import Header from "./component/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Labs from "./pages/labs";
import News from "./pages/news";
import Recepie from "./pages/recepie";
import Contacts from "./pages/contacts";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path='/'  element={<Header />}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/labs' element={<Labs />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/recepie' element={<Recepie />}/>
            <Route path='/contacts' element={<Contacts />}/>
          </Route>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
