import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from 'bootstrap'
import './App.scss';
import Header from "./component/header";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path='/'  element={<Header />}>
            <Route path='/' element={<Home />}/>
          </Route>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
