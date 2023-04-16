/* eslint-disable */
import React , { useState, useEffect } from "react"; 
import { Outlet, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item key="hops">Хміль</Menu.Item>
    <Menu.Item key="malt">Солод</Menu.Item>
    <SubMenu key="yeast" title="Пивні дріжжі">
      <Menu.Item key="item3">3rd menu item</Menu.Item>
      <Menu.Item key="item4">4th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const Header = () => {

  const [step, setStep] = useState(0);
  const sprites = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ];

const changeSprite=()=>{
  setStep(prev=>prev + 1);
  if (step >= 7) {
    setStep(0);
  }
}

useEffect(() => {
  const intervalId = setInterval(changeSprite, 1000);
  return () => {
    clearInterval(intervalId);
  };
}, [step]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>

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
                <NavLink className="nav-link" to="/">
                  Головна
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Про компанію
                </NavLink>
              </li>

              <li className="nav-item ">
                <Dropdown overlay={menu}>
                  <NavLink className="nav-link" to="/products">
                    Продукти{" "}
                    <DownOutlined
                      type="down"
                      style={{ verticalAlign: "middle" }}
                    />
                  </NavLink>
                </Dropdown>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/labs">
                  Лабораторна пивоварня
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/news">
                  Новини
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/recepie" className="nav-link">
                  Рецепти
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Контакти
                </NavLink>
              </li>
            </ul>
          </div>
          <div class={`barmen ${sprites[step]}`}></div>
          <FaFacebook className="header_icons" />
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
