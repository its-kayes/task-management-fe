import { Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./shared/Loader";
import { lazy } from "react";

const Home = lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
