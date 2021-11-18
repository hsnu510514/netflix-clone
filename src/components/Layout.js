import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "../components/Modal/Modal";

const Layout = ({
  isModalOpen,
  setModalOpen,
  modalDetail,
  favoriteList,
  children,
  handleFavorite,
}) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Nav></Nav>
      {children}(
      <Modal
        isOpen={isModalOpen}
        handleModal={setModalOpen}
        modalDetail={modalDetail}
        handleFavorite={handleFavorite}
        favoriteList={favoriteList}
      ></Modal>
      )<Footer></Footer>
    </div>
  );
};

export default Layout;
