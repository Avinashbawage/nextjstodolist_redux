import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const itemlist = useSelector((state) => state.todoReducer.list);
  console.log("This is new data", itemlist);

  const mynewarray5= itemlist.filter((item)=>item.deleted == true);
  console.log("Mynew5 array", mynewarray5)


  return (
    <>
   
     <h3 className="notification">Notification</h3>
     <ul>
     {mynewarray5.map((item, index) => (
            <li
              style={item.Checked ? { textDecoration: "line-through" } : null}
              key={item.id}
            >
              {index + 1} &nbsp;
              
              &nbsp;
              {item.data} &nbsp; {item.timing.toLocaleString() }{console.log("All items", item)}

              
            </li>
          ))}
    
     </ul>


    </>
  )
}

export default Sidebar;