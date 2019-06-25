import { RECEIVE_TODOS } from '../actions/todo_actions.js';
import { RECEIVE_TODO } from '../actions/todo_actions.js'

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };

const  todosReducer = (state = {}, action)=>{
  Object.freeze(state)

  let newState = Object.assign({},state)
  switch (action.type){
    case'RECEIVE TODOS':
      // newState=action.todos.reduce((acc,el)=>acc[el.id]=el,{})

      
      for(let i =0;i < action.todos.length;i++){
        newState[action.todos.id] = action.todos;
        
      };
      return newState;
    case 'RECEIVE TODO':
      newState[action.todo.id]=action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
