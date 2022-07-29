import React from 'react'

const Home = (props) => {
    return (
        <div id="/">
            <>
                <props.AddTodo addTodo={props.addTodo} />
                <props.Todos todos={props.todos} onDelete={props.onDelete} />
            </>
        </div>
    )
}

export default Home
