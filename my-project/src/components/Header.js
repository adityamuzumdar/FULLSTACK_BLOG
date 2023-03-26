import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="mb-5">
      <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
        <Link className="text-3xl font-bold" to="/">
          MyBlog
        </Link>
        <div className="text-xl flex flex-col md:flex-row items-center">
          <Link className="px-4" to="/login">
            Login
          </Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}
