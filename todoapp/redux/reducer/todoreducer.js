import { Add_Todo, Remove_Todo,Check_Todo } from "../action";

const initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {       
        
        case Add_Todo:
            const { data, id , checked } = action.payload
           
            console.log("state", {...state, list:[...state.list , {id:id, data:data}]} )

            return {
                ...state,
                list: [
                    ...state.list, { id:id, data:data , Checked: false }
                ]
            }
                    
        case Remove_Todo:
            let newList = state.list.filter((newItem) => newItem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case Check_Todo:
            console.log("Hii", state.list)
            const newItemsArr = state.list.map((o) => {
                if (o.id == action.payload.id) {
                  return {
                    ...o,
                    Checked: !o.Checked,
                  };
                }
                return o;
              });
             
               
            return {
                ...state,
                list:  newItemsArr
            }

        default: return state
    }
}
