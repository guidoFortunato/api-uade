import { useState } from "react";
import { Modal } from "flowbite-react";
import { Trailer } from "./Trailer";

export const ModalComponent = ({textButton, children, size }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="btn-primary" onClick={() => setOpenModal(true)}>
        {textButton}
      </button>
      <Modal show={openModal} className="bg-black" size={size} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          { children }
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
