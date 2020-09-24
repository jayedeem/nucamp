import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export default function ModalComponent({ isModalOpen, toggleModal, children }) {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Login</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
}
