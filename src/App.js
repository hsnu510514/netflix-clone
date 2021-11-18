import React, { useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  const [isModalOpen, setModalOpen] = useState({
    isOpen: false,
    scrollTop: 0,
  });
  const [modalDetail, setModalDetail] = useState({ id: "", type: "" });

  const [favoriteList, setFavoriteList] = useState({});

  return (
    <Router>
      <Layout
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        modalDetail={modalDetail}
        handleModalDetail={setModalDetail}
        handleFavorite={setFavoriteList}
        favoriteList={favoriteList}
      >
        <Switch>
          <Route path="/my-list">
            <Favorite
              handleModalOpen={setModalOpen}
              isModalOpen={isModalOpen.isOpen}
              handleModalDetail={setModalDetail}
              handleFavorite={setFavoriteList}
              favoriteList={favoriteList}
            />
          </Route>
          <Route path="/">
            <Home
              handleModalOpen={setModalOpen}
              isModalOpen={isModalOpen.isOpen}
              handleModalDetail={setModalDetail}
              handleFavorite={setFavoriteList}
              favoriteList={favoriteList}
            ></Home>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
