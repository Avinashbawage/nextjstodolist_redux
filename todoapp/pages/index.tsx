import React, { useState } from "react"; 
import Header from "../components/headers/header";
import InputSec from "../components/inputs/input";
import Listscontent from "../components/contentlists/listscontent";
import "font-awesome/css/font-awesome.min.css";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';


function Home() {
 /*  const [value, setInputValue] = useState("");
  const [items, setItems] = useState<any[]>([]);  */

 
 

  //Adding the items
/*   const onAddTask = () => {
    if (!value) {
      alert("fill the data");
    } else {
      const mynewData = {
        id: new Date().getTime().toString(),
        name: value,
        done: false,
      };

      setItems([...items, mynewData]);
      setInputValue(" ");
    }
  };
 */
  // deleting the items
 /*  const onDeleteItem = (index: number) => {
    const updatedList = items.filter((item) => {
      return item.id != index;
    });

    setItems(updatedList);
  };

  const handleClick = (index: number) => {
    const updatedList1 = items.filter((item) => {
      return (item.id = index);
    });

    setItems(updatedList1);
  };

  const onChangeTaskCheck = (item: any) => {
    setItems((items) => {
      const newItemsArr = [...items].map((o) => {s
        if (o.id == item.id) {
          return {
            ...o,
            checked: !item.checked,
          };
        }
        return o;
      });
      return newItemsArr;
    });
  };
 */
  return (
    <>
     
     <Navbar/>
      <div className="mytodolist">
        <div className="container">
          <Header />
          <InputSec />
          
          
            
           

      
 {/* 
          <ContentLists
            items={items}
            onDeleteItem={onDeleteItem}
            onChangeTaskCheck={onChangeTaskCheck}
          />   */}

  
         <Listscontent/>
       
    
           
        </div>
      </div>
    </>
  );
}

export default Home;
