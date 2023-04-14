import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./components/IndexPage";
import PostPage from "./components/PostPage";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
  );
}
