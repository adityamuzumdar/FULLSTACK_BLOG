import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function Layout(){
    return(
        <main className="max-w-3xl p-3 m-auto">
            <Header />
            <Outlet />
        </main>
    )
}