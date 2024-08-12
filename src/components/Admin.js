import React from "react";
import { Routes, Route,  } from "react-router-dom";

// components

import AdminNavbar from "../navbars/AdminNavbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import HeaderStats from "../Headers/HeaderStats.js";
import FooterAdmin from "../Footers/FooterAdmin.js";

// views

import Dashboard from "./Dashboard.js";








export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route exact path="/admin/dashboard"  element={<Dashboard/>} />
            
            
            
          </Routes>
          <FooterAdmin />
          
        </div>
      </div>
    </>
  );
}
