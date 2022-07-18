import { memo, useCallback, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useMutation } from "react-query";

import { API } from "../../config/api";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const ModalNewCategory = memo(({ show, onClose }) => {
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    type: "",
  });
  const { name, type } = form;

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
          type: "",
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
    setForm({ name: "", type: "" });
  }, [onClose]);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Create new category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message && message}
        <form id="formAddCategory" onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="form d-flex align-items-center mt-3">
            <p style={{ flex: 0.5 }}>Name</p>
            <input
              placeholder="e.g Electricity"
              value={name}
              name="name"
              className="px-3 py-2"
              style={{ flex: 1.5 }}
              onChange={handleChange}
            />
          </div>
          <div className="form d-flex align-items-center mt-3">
            <p style={{ flex: 0.5 }}>type</p>
            <Form.Select
              aria-label="select category type"
              value={type}
              name="type"
              className="px-3 py-2"
              style={{ flex: 1.5 }}
              onChange={handleChange}>
              <option value="" disabled selected hidden>
                Select type
              </option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Form.Select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="formAddCategory" className="px-5">
          Save
        </Button>
        <Button variant="outline-primary" className="px-5" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
