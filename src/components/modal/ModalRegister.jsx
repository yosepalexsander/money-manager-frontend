import { memo, useCallback, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useMutation } from "react-query";

import { API } from "../../config/api";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const ModalRegister = memo(({ show, onClose }) => {
  document.title = "Money Manager | Register";

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = form;

  const handleChange = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useMutation(async (e) => {
    e.preventDefault();

    try {
      const body = JSON.stringify(form);
      const response = await API.post("/register", body, config);

      if (response.status === 200) {
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

  const handleClose = useCallback(() => {
    onClose();
    setMessage();
  }, [onClose]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && message}
        <form id="formRegister" onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="form d-flex align-items-center">
            <p style={{ flex: 0.5 }}>Name</p>
            <input
              type="text"
              placeholder="e.g Jhon Doe"
              value={name}
              name="name"
              className="px-3 py-2"
              style={{ flex: 1.5 }}
              onChange={handleChange}
            />
          </div>
          <div className="form d-flex align-items-center mt-3">
            <p style={{ flex: 0.5 }}>Email</p>
            <input
              type="email"
              placeholder="e.g Johndoe@example.com"
              value={email}
              name="email"
              className="px-3 py-2"
              style={{ flex: 1.5 }}
              onChange={handleChange}
            />
          </div>
          <div className="form d-flex align-items-center mt-3">
            <p style={{ flex: 0.5 }}>Password</p>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              name="password"
              className="px-3 py-2"
              style={{ flex: 1.5 }}
              onChange={handleChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="formRegister" className="px-5">
          Sign up
        </Button>
        <Button variant="outline-primary" className="px-5" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
