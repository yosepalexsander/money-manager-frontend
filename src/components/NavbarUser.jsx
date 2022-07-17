import { faArrowRightFromBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import Money from "../assets/Money.png";
import Profile from "../assets/Profile.png";
import { UserContext } from "../context/userContext";

export const NavbarUser = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth");
  };
  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand as={Link} to="/user">
          <img src={Money} style={{ maxWidth: "50px" }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle className="bg-transparent border-0">
              <img src={Profile} className="rounded-circle me-2 img-contact" alt="user avatar" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="me-5">
              <Dropdown.Item as={Link} to="/user/setting" style={{ color: "#000000", fontSize: "20px" }}>
                <FontAwesomeIcon icon={faGear} style={{ color: "#F3A871", fontSize: "25px", paddingRight: "10px" }} />
                Settings
              </Dropdown.Item>
              <Dropdown.Item onClick={logout} style={{ color: "#000000", fontSize: "20px" }}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  style={{ color: "#F3A871", fontSize: "25px", paddingRight: "10px" }}
                />{" "}
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};