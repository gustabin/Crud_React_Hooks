import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

//Components
import Navbar from "./components/Navbar/Navbar";
import CompanyList from "./components/Company/CompanyList";
import CompanyForm from "./components/Company/CompanyForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={<CompanyList />} />
          <Route path="/companyForm" element={<CompanyForm />}></Route>
          <Route path="/updateCompany/:id" element={<CompanyForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
