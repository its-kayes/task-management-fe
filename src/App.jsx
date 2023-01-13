import { Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./shared/Loader";
import { lazy } from "react";
import SideNavbar from "./shared/nav/SideNavbar";
import Test from "./pages/Test";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SideNavbar />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
