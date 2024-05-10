/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

export const ModalComponent = ({textButton, children, size }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="btn-primary" onClick={() => setOpenModal(true)}>
        {textButton}
      </button>
      <Modal show={openModal} className="bg-black" size={size} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-black p-2"></Modal.Header>
        <Modal.Body className="bg-black">
          { children }
        </Modal.Body>
        <Modal.Footer className="bg-black"></Modal.Footer>
      </Modal>
    </>
  );
};
