import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

export default function ModalComponent({
  isModalOpen,
  toggleModal,
  headerText = '',
  children,
}) {
  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{headerText}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
}
