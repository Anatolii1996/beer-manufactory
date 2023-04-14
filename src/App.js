import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from 'bootstrap'
import './App.scss';
// import { Route, Routes } from 'react-router-dom';
import Header from "./component/header";
import Home from "./component/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/' element={<Home />}/>
          </Route>
        </Routes>
        <Header/>
      </div>
    </div>
  );
}

export default App;
