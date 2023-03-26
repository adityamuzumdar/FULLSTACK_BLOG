import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./components/IndexPage";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
  );
}
