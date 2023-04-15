import { Link, Outlet, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { Menu, Dropdown, Icon } from "antd";
import { DownOutlined  } from "@ant-design/icons";


const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>Хміль</Menu.Item>
    <Menu.Item>Солод</Menu.Item>
    <SubMenu title="Пивні дріжжі">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
   
  </Menu>
);

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Головна
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Про компанію
                </a>
              </li>

              <li className="nav-item ">
                <Dropdown overlay={menu} >
                  <a className="ant-dropdown-link" href="#">
                    Продукти <DownOutlined type="down" />
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Лабораторна пивоварня
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Новини
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Рецепти
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          <FaFacebook className="header_icons" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
