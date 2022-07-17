import "../../style/Home.css";

import { faAnglesLeft, faAnglesRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import { AddTransaction } from "../modal/AddTransaction";

export const Transaction = () => {
  const title = "Home";
  document.title = "Hacketon | " + title;

  const [setConfirmAddTransaction] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTransaction = () => {
    handleShow();
  };

  return (
    <div className="user-container">
      <body className="border-home">
        <Container>
          <Row className="d-flex align-items-center">
            <div className="col-md-8">
              <Button variant="" className="btn px-4 mt-2">
                <FontAwesomeIcon icon={faAnglesLeft} style={{ color: "#000000", fontSize: "20px" }} />
                <b>July 2022</b>
                <FontAwesomeIcon icon={faAnglesRight} style={{ color: "#000000", fontSize: "20px" }} />
              </Button>
              <Button variant="" className="btn px-4 mt-2">
                <b>Daily</b>
              </Button>
              <Button variant="" className="btn px-4 mt-2">
                <b>Weekly</b>
              </Button>
              <Button variant="" className="btn px-4 mt-2">
                <b>Monthly</b>
              </Button>
              <Button
                variant=""
                className="float-end"
                onClick={() => {
                  handleAddTransaction();
                }}>
                <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#EB786B", fontSize: "45px" }} />
              </Button>
            </div>
          </Row>
        </Container>
      </body>

      <body />
      <AddTransaction setConfirmAddTransaction={setConfirmAddTransaction} show={show} handleClose={handleClose} />
    </div>
  );
};
