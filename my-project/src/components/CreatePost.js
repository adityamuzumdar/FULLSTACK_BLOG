import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        className="border-2 border-gray-400 p-2 rounded-md my-2"
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        className="border-2 border-gray-400 p-2 rounded-md my-2"
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
        className="my-2"
      />
      <ReactQuill
        value={content}
        onChange={setContent}
        className="border-2 border-gray-400 p-2 rounded-md my-2"
      />
      <button
        style={{ marginTop: "5px" }}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Create post
      </button>
    </form>
  );
}
