import Link from "next/link";
import {useEffect} from 'react'
import { useRouter } from 'next/router'

const index = () => {
 
  const router = useRouter();

  

  return (
    <>
      <h1>This is a Blog page</h1>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>      
          <li>
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
      </div>
    </>
  );
};

export default index;
