import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPopup from "../components/popup/errorPopup";
import Loader from "../components/loader";
import { useSelector } from "react-redux";
import Layout from "../components/layout";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import VisitPlace from "../pages/dashboard/visitPlace";

const ProtectedRoutes = () => {
  const errorMessage = useSelector((state) => state.loader.errorMessage);
  const loader = useSelector((state) => state.loader.isLoading);
  return (
    <>
      {errorMessage && <ErrorPopup isOpen={true} errorMessage={errorMessage} />}
      {/* {errorMessage && <ErrorPop isOpen={true} errorMessage={errorMessage} />} */}

      {loader && <Loader />}

      <Layout>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/places" element={<Dashboard />} />
          <Route path="/places/:id" element={<VisitPlace />} />
        </Routes>
      </Layout>
    </>
  );
};

export default ProtectedRoutes;