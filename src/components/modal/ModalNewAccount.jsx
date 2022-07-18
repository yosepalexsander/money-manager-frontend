import { memo, useCallback, useContext, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const ModalNewAccount = memo(({ show, onClose }) => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
  });
  const { name } = form;

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

      const response = await API.post("/accounts", body, config);

      if (response?.status === 200) {
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

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
        navigate("/");
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
        <Modal.Title>Create new account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && message}
        <form id="formAddAccount" onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="form d-flex align-items-center">
            <p style={{ flex: 0.5 }}>Name</p>
            <input
              type="text"
              placeholder="e.g Cash"
              value={name}
              name="name"
              onChange={handleChange}
              className="px-3 py-2"
              style={{ flex: 1.5 }}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="formAddAccount" className="px-5">
          Login
        </Button>
        <Button variant="outline-primary" className="px-5" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
