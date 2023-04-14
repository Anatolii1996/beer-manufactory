import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
// import { Route, Routes } from 'react-router-dom';
import Header from "./component/header";
import Home from "./component/home";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
      </div>
    </div>
  );
}

export default App;
