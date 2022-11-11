import Link from "next/link";
import {useEffect} from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import style from '../navbar/index.module.css';

const Navbar = () => {
 
    const router = useRouter(); 

  return (
    <>
 
     <ul className={style.navbar}>
          <li>
            <Link href="/"> Home</Link>
          </li>      
          <li >
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog/contactus">Contact us</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Blog Post</Link>
          </li>
          <li>
          <a onClick={()=>{router.push("/")}}>
            Services
          </a>

          </li>
         
        
     </ul>   
    </>
  )
}

export default Navbar;