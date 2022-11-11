import React, { useState } from "react"; 
import Header from "../components/headers/header";
import InputSec from "../components/inputs/input";
import Listscontent from "../components/contentlists/listscontent";
import "font-awesome/css/font-awesome.min.css";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar/index'


function Home() {
 
  return (
    <>
     
     <Navbar/>
      <div className="mytodolist">
        <div className="container">
          <Header />
          <InputSec />
         <Listscontent/>
           
        </div>
        <div className="sidebar">
        <Sidebar/>
        </div>
      </div>
    </>
  );
}

export default Home;
