import React, { useState } from "react";
import Header from "../components/headers/header";
import InputSec from "../components/inputs/input";
import Listscontent from "../components/contentlists/listscontent";
import "font-awesome/css/font-awesome.min.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar/index";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>

        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="AB" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className="mytodolist">
        <div className="container">
          <Header />
          <InputSec />
          <Listscontent />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
