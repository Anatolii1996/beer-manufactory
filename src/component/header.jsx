import { Link, Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Головна</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Про компанію</a>
          </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Продукти
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Лабораторна пивоварня</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Новини</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Рецепти</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Контакти</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      
  );
};
export default Header;
