import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, onChangeTaskCheck } from "../../redux/action";
import styles from "../inputs/index.module.scss";

const Listscontent = () => {
  const dispatch = useDispatch();

  const itemlist = useSelector((state) => state.todoReducer.list);
  console.log("This is new data", itemlist);

   let mynewarray= itemlist.filter((item)=>!item.deleted);
   console.log("Mynew array", mynewarray)

  return (
    <div>   
      <div>
        <ul className={styles.allitem}>
 
        {}


          {mynewarray.map((item, index) => (
            <li
              style={item.Checked ? { textDecoration: "line-through" } : null}
              key={item.id}
            >
              {index + 1} &nbsp;
              <input
                type="checkbox"
                checked={item.Checked}
                onClick={() => dispatch(onChangeTaskCheck(item.id))}
              />
              &nbsp;
              {item.data} &nbsp; {console.log("All items", item)}
              <i
                className="fa fa-trash-o"
                aria-hidden="true"
                onClick={() => dispatch(removeTodo(item.id))}
              ></i>
            </li>
          ))}
        </ul>

        <div>
          There is {mynewarray.filter((o) => !o.Checked).length} pending tasks
        </div>
      </div>
    </div>
  );
};

export default Listscontent;
