import React from "react";
import {Link} from "react-router-dom";
export default function Post({_id,title,summary,cover,author}) {
  return (
    <div className="grid grid-cols-2 mb-7">
      <div className="max-w-sm px-4">
      <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div>
      <div>
      <Link to={`/post/${_id}`}>
      <h2 className="font-bold text-xl">
          {title}
        </h2>
        </Link>
        
        <p className="text-gray-400 text-sm mb-3 my-1">
          <a className="text-black font-bold" href="">{author}</a>
          <time className="mx-2">01-03-2023 3:45</time>
        </p>
        <p>
          {summary}
        </p>
      </div>
    </div>
  );
}
