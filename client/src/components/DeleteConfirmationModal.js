import React from "react"
import { Modal, Button } from "react-bootstrap"
const DeleteConfirmationModal = props => {
  const { type, func, show, setShow, isLoading, target } = props

  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => show(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Body>
        <p className="text-center py-4">
          Are you sure you wanto to{" "}
          <span className="font-weight-bold">permanently</span> delete this{" "}
          {type}?
        </p>
        <div className="d-flex justify-content-around">
          <Button variant="light" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            disabled={isLoading}
            variant="danger"
            onClick={() => func(target)}
          >
            Yes, delete it
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DeleteConfirmationModal
