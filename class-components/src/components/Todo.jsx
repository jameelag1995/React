import React from "react";

class Todo extends React.Component{
    constructor() {
        super();
        this.state = {
            todoList:[
                { name: "CSS", completed: true },
                { name: "JavaScript", completed: true },
                { name: "Learn React", completed: false },
                { name: "Learn mongoDB", completed: false },
                { name: "Learn Node JS", completed: false },
                ],
        };
    }
    handleClick = (index)=>{
        // console.log(e);
        const newTodoList = this.state.todoList.map((todo, i)=>{
           return i === index ? {...todo, completed: !todo.completed} : todo;
        })
        console.log(newTodoList);
        this.setState({todoList:newTodoList})
        // this.setState((prevState)=>{
        //     todo:prevState
        // })

    }

    render(){
        return <>
        <h1>Todo List</h1>
        <ul>
            {this.state.todoList.map((todo,index)=> <li className={todo.completed ? 'checked':''} onClick={()=>this.handleClick(index)} key={index}>{todo.name}{" "}{todo.completed ? <>&#10003;</> : <>&#9747;</>}</li>)}
        </ul>

        </>
    }
}
export default Todo;