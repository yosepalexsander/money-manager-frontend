import { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";

import Money from "../assets/Money.png";
import { ModalLogin } from "../components/modal/ModalLogin";
import { ModalRegister } from "../components/modal/ModalRegister";

export const Auth = () => {
  const [isModalRegisterShow, setIsModalRegisterShow] = useState(false);
  const handleCloseModalRegister = useCallback(() => setIsModalRegisterShow(false), []);
  const handleShowModalRegister = useCallback(() => setIsModalRegisterShow(true), []);

  const [isModalLoginShow, setIsModalLoginShow] = useState(false);
  const handleCloseModalLogin = useCallback(() => setIsModalLoginShow(false), []);
  const handleShowModalLogin = useCallback(() => setIsModalLoginShow(true), []);

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "85vh" }}>
        <div className="text-center">
          <img src={Money} style={{ width: "125px" }} alt="brand-logo" className="mb-3" />
          <h1 className="mb-3">Be a Financial Manager for Yourself</h1>
          <div className="mb-5">
            <h6>Record your every Income and Expense</h6>
            <h6>so you can easily monitor your financial flow and manage it</h6>
          </div>
          <Button variant="outline-primary" className="mx-2 px-5" onClick={handleShowModalLogin}>
            Log In
          </Button>
          <Button variant="primary" className="mx-2 px-5" onClick={handleShowModalRegister}>
            Sign Up
          </Button>
        </div>
      </Container>
      <ModalRegister show={isModalRegisterShow} onClose={handleCloseModalRegister} />
      <ModalLogin show={isModalLoginShow} onClose={handleCloseModalLogin} />
    </>
  );
};
