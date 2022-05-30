const initialState = [{
  id: 1,
  todo: "Learn Hooks",
  done: false
}]

const todoReducer = (state = initialState, action) => {
  if(action?.type === "ADD_TODO") {
    return [...state, action.payload]
  }
  
  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: "Learn React",
  done: false
}

const addAction = {
  type: "ADD_TODO",
  payload: newTodo,
}

todos = todoReducer(todos, addAction)

console.log(todos)