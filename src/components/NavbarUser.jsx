import { faArrowRightFromBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useCallback, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

import Money from "../assets/Money.png";
import Profile from "../assets/Profile.png";
import { UserContext } from "../context/userContext";

export const NavbarUser = memo(() => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(UserContext);

  const logout = useCallback(() => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth");
  }, [dispatch, navigate]);

  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Money} style={{ maxWidth: "50px" }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle className="bg-transparent border-0">
              <img src={Profile} className="rounded-circle me-2 img-contact" alt="user avatar" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="me-5">
              <Dropdown.Item as={Link} to="/user/setting" className="py-2 d-flex gap-3 align-items-center">
                <FontAwesomeIcon icon={faGear} style={{ color: "#F3A871", fontSize: "25px" }} />
                <p>Settings</p>
              </Dropdown.Item>
              <Dropdown.Item className="py-2 d-flex gap-3 align-items-center" onClick={logout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#F3A871", fontSize: "25px" }} />{" "}
                <p>Logout</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
