import { Link, Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Головна</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Про компанію</a>
          </li>
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Продукти
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Лабораторна пивоварня</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Новини</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Рецепти</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Контакти</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};
export default Header;
