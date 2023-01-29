import { Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./shared/Loader";
import { lazy } from "react";
import SideNavbar from "./shared/nav/SideNavbar";

const Home = lazy(() => import("./pages/Home"));
const Calender = lazy(() => import("./pages/Calender"));
const Task = lazy(() => import("./pages/Task"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SideNavbar />}>
          <Route index element={<Home />} />
          <Route path="task" element={<Task />} />
          <Route path="calender" element={<Calender />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
