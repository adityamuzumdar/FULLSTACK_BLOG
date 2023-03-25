import React from "react";


export default function App() {
  return (
    <main className="max-w-3xl p-3 m-auto">
      <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
        <a className="text-3xl font-bold" href="">MyBlog</a>
        <div className="text-xl flex flex-col md:flex-row items-center">
          <a className="px-4" href="">Login</a>
          <a href="">Register</a>
        </div>
      </div>
      <div className="flex mb-7">
        <div className="w-25 px-4">
          <img className="" src="https://techcrunch.com/wp-content/uploads/2023/03/BlueOval-City_March-2023-construction_01.jpg?w=1390&crop=1" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Ford to build next-gen EV truck at $5.6B factory in 2025</h2>
          <p>Ford said Friday that its $5.6 billion BlueOval City complex outside of Memphis, Tennessee will include a truck plant capable of producing 500,000 electric vehicles a year.</p>
        </div>
      </div>
      </header>
    </main>
      
  )
}
