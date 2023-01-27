import React from "react";
import { useState } from "react";
import "../Styles/NavBar.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "./Movies";
import Series from "./Series";
import Trending from "./Trending";
import Pricing from "./Pricing";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

export const Context = React.createContext();

function NavBar() {
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <Context.Provider value={{ toggle, inputValue }}>
      <>
        <Navbar expand="lg" variant="dark">
          <Container fluid className="container-box">
            <div className="nav-box"></div>
            <NavLink to="/">
              <h1 className={toggle ? "heading" : "heading-light"}>
                TrailerAddict
              </h1>
            </NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    let color;
                    if (isActive) color = "#fff";
                    if (!isActive && toggle) color = "#EE9B00";
                    if (!isActive && !toggle) color = "#ff206e";

                    return { color: color };
                  }}
                >
                  <span
                    className={
                      toggle ? "movies text-sm-center" : "movies-light"
                    }
                  >
                    Movies
                  </span>
                </NavLink>
                <NavLink
                  to="/Series"
                  style={({ isActive }) => {
                    let color;
                    if (isActive) color = "#fff";
                    if (!isActive && toggle) color = "#EE9B00";
                    if (!isActive && !toggle) color = "#ff206e";

                    return { color: color };
                  }}
                >
                  <span className={toggle ? "movies" : "movies-light"}>
                    Series
                  </span>
                </NavLink>
                <NavLink
                  to="/Trending"
                  style={({ isActive }) => {
                    let color;
                    if (isActive) color = "#fff";
                    if (!isActive && toggle) color = "#EE9B00";
                    if (!isActive && !toggle) color = "#ff206e";

                    return { color: color };
                  }}
                >
                  <span className={toggle ? "movies" : "movies-light"}>
                    Trending
                  </span>
                </NavLink>
                <NavLink
                  to="/Pricing"
                  style={({ isActive }) => {
                    let color;
                    if (isActive) color = "#fff";
                    if (!isActive && toggle) color = "#EE9B00";
                    if (!isActive && !toggle) color = "#ff206e";

                    return { color: color };
                  }}
                >
                  <span className={toggle ? "movies" : "movies-light"}>
                    Pricing
                  </span>
                </NavLink>
              </Nav>

              <Form className="d-sm-block d-lg-flex">
                <Form.Control
                  type="search"
                  placeholder={"Search something..."}
                  className="search-input"
                  aria-label="Search"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="switch-container">
                  <BsMoonFill fill="#aaa" className="ms-2" size={20}/>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={() => setToggle(!toggle)}
                    className="color-switcher"
                  />
                  <BsFillSunFill fill="#aaa" className="me-2" size={25}/>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/Series" element={<Series />}></Route>
          <Route path="/Trending" element={<Trending />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
        </Routes>
      </>
    </Context.Provider>
  );
}

export default NavBar;
