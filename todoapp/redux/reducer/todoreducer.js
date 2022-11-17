import { Add_Todo, Remove_Todo,Check_Todo } from "../action";

const initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {       
        
        case Add_Todo: 
            const { data, id ,timing, checked } = action.payload
           
            console.log("state", {...state, list:[...state.list , {id:id, data:data, timing:timing}]} )

            return {
                ...state,
                list: [
                    ...state.list, { id:id, data:data , Checked: false , timing:timing }
                ]
            }
                    
        case Remove_Todo:              
 
            const newItemsArr1 = state.list.map((o) => {                 
            
                if (o.id == action.payload.id) {  
                  return {
                    ...o,
                    deleted: !o.deleted,
                    timing:action.payload.timing,                   
                    
                  
                  };
                }
                return o;
              });
             
               
            return {
                ...state,
                list:  newItemsArr1
            }


        case Check_Todo:
             
            console.log("Hii", state.list)
            const newItemsArr = state.list.map((o) => {
                if (o.id == action.payload.id) {
                  return {
                    ...o,
                    Checked: !o.Checked,
                    timing:action.payload.timing,
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
