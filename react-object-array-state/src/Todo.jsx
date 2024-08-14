import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    let [todos,setTodos]=useState([{task : "sample-task" , id:uuidv4() , isDone:false}])
    let [inpVal,setInpVal]=useState("")
    let clickedAdd=()=>{
        // setInpVal(inpVal)
        console.log("Task Added");
        setTodos((prevtodos)=>{
            return[...prevtodos,{task:inpVal,id:uuidv4(),isDone:false}]
        })
        setInpVal("")
        
    }

    let updateInpValue=(event)=>{
        // console.log(event.target.value);
        setInpVal(event.target.value)

    }

    let deletTodo=(id)=>{
        console.log("Task To be deleted",id);
        setTodos(todos.filter((todo)=>todo.id!=id))        
    }


    let upperCaseAll=()=>{
        setTodos(todos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase()
            }
        }));   
    }

    let upperCaseOne=(id)=>{
        console.log("Upper One");
        setTodos(todos.map((todo)=>{
            if(todo.id===id){
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            }else{
                return todo;
            }
        }))
        
    }

    let TaskDone=(id)=>{
        console.log("Task Done");
        setTodos(todos.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    isDone:true

                }
            }
        }))
    }
    return(
        <>
             <h2>Todo List</h2>
             <br></br><br></br><br></br>
            <div>
                <input placeholder="Add a Task" style={{padding:"15px", borderRadius:"10px" , border:"1px solid white" , margin:"10px"}} value={inpVal} onChange={updateInpValue}/>
                <button onClick={clickedAdd}>Add Task</button>
                <br></br><br></br><br></br>
                <hr></hr>
                <h4>Task List</h4>
                <ul>
                    {
                        todos.map((todo)=>(
                            <li key={todo.id} >
                                <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>
                                {todo.task}
                                </span>
                                <button style={{margin:"5px", padding:"5px",color:"red"} } onClick={()=>deletTodo(todo.id)}>X</button>
                                <button style={{color:"green", padding:"5px"}} onClick={()=>upperCaseOne(todo.id)}>✒</button>
                                <button style={{ padding:"5px", margin:"5px"}} onClick={()=>TaskDone(todo.id)}>✅</button>
                            </li>
                        ))
                    }
                </ul>
                <button onClick={upperCaseAll}>Update</button>
            </div>
        </>
    )
}