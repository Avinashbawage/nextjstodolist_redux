export const Add_Todo = "Add_Todo"
export const Remove_Todo = "Remove_Todo"
export const Check_Todo = "Check_Todo"

export const addTodo = (data) => {
    return {
        type: Add_Todo,
        payload: {
            data: data,
            id: new Date().getTime().toString(),
            timing:" ",
       
        }
    }
}

export const removeTodo = (id) => {
    return {
 

        type: Remove_Todo,
        payload: {          
           id,
           timing: new Date(),

       
        }
   
    }
}


  
export const onChangeTaskCheck = (id) => {
    console.log(id)
    return {
        type: Check_Todo,
        payload: {          
           id,
       
        }
        
    }
}


