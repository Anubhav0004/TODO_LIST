import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  console.log("this",props)
  let myStyle = {
    minHeight: "70vh",
    margin: '40px auto'
  }
  return (
    <div className="container " style={myStyle}>
      <h3 className="m-3"> Todos List</h3>
      {props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todo) => {
          // console.log(todo.sno);
          return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}

export default Todos

