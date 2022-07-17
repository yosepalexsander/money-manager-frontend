import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useMutation } from "react-query";

import { API } from "../../config/api";

export const AddCategory = ({ show, handleClose }) => {
  const title = "Register";
  document.title = "DumbMerch | " + title;

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);
      const response = await API.post("/register", body, config);

      if (response.data.status === "success...") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <Modal show={show} onHide={handleClose} centered style={{ width: "24%", marginLeft: "38%" }}>
      <Modal.Body className="text-dark">
        <div
          style={{ fontSize: "22px", lineHeight: "49px", fontWeight: "600", borderBottom: "solid" }}
          className="mt-3 mb-5">
          Create new category
        </div>
        {message && message}
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="mt-3 form d-flex">
            <h5 className="me-5 mt-1">Name</h5>
            <input
              type="text"
              placeholder="e.g Electricity"
              value={email}
              name="email"
              onChange={handleChange}
              className="px-3 py-2 ms-1"
              style={{ color: "#000000", backgroundColor: "#ffffff" }}
            />
          </div>

          <div className="mt-1 form d-flex" s>
            <h5 className="me-5 mt-4">Group</h5>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange}
              value={form?.gender}
              name="gender"
              className="mt-3">
              <option>Select group</option>
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </Form.Select>
          </div>

          <div className="d-flex gap-2 mt-4 float-end">
            <Button variant="warning ps-5 pe-5 mt-2 me-2 w-40" className="btn px-5 ">
              Save
            </Button>
            <Button variant="outline-warning ps-5 pe-5 mt-2 me-2 w-40" className="btn px-5">
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
