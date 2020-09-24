import React, { useState } from 'react';

import FormComponent from './FormComponent';
import NavbarComponent from './NavbarComponent';
import JumbotronComponent from './JumbotronComponent';
import ModalComponent from './ModalComponent';
export default function Header() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <JumbotronComponent />

      <NavbarComponent
        isNavOpen={isNavOpen}
        toggleModal={toggleModal}
        toggleNav={toggleNav}
      />
      <ModalComponent isModalOpen={isModalOpen} toggleModal={toggleModal}>
        <FormComponent toggleModal={toggleModal} />
      </ModalComponent>
    </>
  );
}
