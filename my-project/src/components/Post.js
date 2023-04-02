import React from "react";

export default function Post() {
  return (
    <div className="flex mb-7">
      <div className="w-25 px-4">
        <img
          className=""
          src="https://techcrunch.com/wp-content/uploads/2023/03/BlueOval-City_March-2023-construction_01.jpg?w=1390&crop=1"
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold text-xl">
          Ford to build next-gen EV truck at $5.6B factory in 2025
        </h2>
        <p className="text-gray-400 text-sm mb-3 my-1">
          <a className="text-black font-bold" href="">Aditya Muzumdar</a>
          <time className="mx-2">01-03-2023 3:45</time>
        </p>
        <p>
          Ford said Friday that its $5.6 billion BlueOval City complex outside
          of Memphis, Tennessee will include a truck plant capable of producing
          500,000 electric vehicles a year.
        </p>
      </div>
    </div>
  );
}
