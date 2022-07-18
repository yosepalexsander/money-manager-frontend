import { Button, Modal } from "react-bootstrap";

export const DeleteData = ({ show, onClose, onDelete }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header>
        <Modal.Title>Confirmation Dialog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mt-2 fw-bold">Are you sure you want to delete?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
        <Button variant="outline-danger" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
