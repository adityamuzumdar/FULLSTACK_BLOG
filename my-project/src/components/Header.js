import React from "react";
import { Link } from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";
export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;

  return (
    <header className="mb-5">
      
      {username &&(
        <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
        <Link className="text-3xl font-bold" to="/">
          MyBlog
        </Link>
        <div className="text-xl flex flex-col md:flex-row items-center">
          <Link className="px-4" to="/create">
            Create New Post
          </Link>
          <a onClick={logout}>Logout</a>
        </div>
      </div>
      )}
      {!username &&(
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
      )}
    </header>
  );
}
