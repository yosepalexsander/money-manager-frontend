import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import Money from "../assets/Money.png";
import { Login } from "../components/modal/Login";
import { Register } from "../components/modal/Register";

export const Auth = () => {
  // const [state] = useContext(UserContext);
  // const checkAuth = () => {
  //   if (state.isLogin === true) {
  //     if(state.user.status == 'Customer'){
  //       navigate('/user')
  //     }else{
  //       navigate('/admin')
  //     }
  //   }
  // };

  // checkAuth();

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [, setIdRegister] = useState(null);
  const [, setIdLogin] = useState(null);
  const [, setConfirmRegister] = useState(null);
  const [, setConfirmLogin] = useState(null);

  const handleRegister = (id) => {
    setIdRegister(id);
    handleShowRegister();
  };

  const handleLogin = (id) => {
    setIdLogin(id);
    handleShowLogin();
  };

  return (
    <div className="">
      <Container>
        <Row className="vh-100 d-flex align-items-center">
          <div className="" style={{ textAlign: "center" }}>
            <div className="mb-4" style={{ textAlign: "center" }}>
              <img src={Money} style={{ width: "125px" }} alt="brand" />
            </div>
            <div className="mb-5">
              <h1 style={{ color: "#000000" }}>Be a Financial Manager for Yourself</h1>
            </div>
            <div className="mb-5">
              <h5 style={{ color: "#000000" }}>Record your every Income and Expense</h5>
              <h5 style={{ color: "#000000" }}>so you can easily monitor your financial flow and manage it</h5>
            </div>
            <Button
              variant="outline-danger ps-5 pe-5 mt-2 me-2 w-40"
              onClick={() => {
                handleLogin();
              }}
              className="btn px-5">
              Log In
            </Button>
            <Button
              variant="outline-danger ps-5 pe-5 mt-2 me-2 w-40"
              onClick={() => {
                handleRegister();
              }}
              className="btn px-5">
              Sign Up
            </Button>
          </div>
        </Row>
      </Container>

      <Register setConfirmRegister={setConfirmRegister} show={showRegister} handleClose={handleCloseRegister} />
      <Login setConfirmLogin={setConfirmLogin} show={showLogin} handleClose={handleCloseLogin} />
    </div>
  );
};
