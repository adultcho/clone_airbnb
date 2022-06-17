import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const Main = () => {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate("/detail");
  };

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main">
      <h1>main page</h1>
      <button onClick={moveToDetail}>move detail page</button>
      <button onClick={openModal}>모달팝업</button>

      <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
    </div>
  );
};

export default Main;
