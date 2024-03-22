import "./todo.css"

function Todoapp() {
    return ( 
        <>
        let Task=[
            "Buy Iphone "
            "Buy car"
            "Learn guitar"
        ]
        <div className="todo">
        <h1> MY Todo App</h1>
            <input type="text"/>
          <button>Add Task</button>
          Task.map((value,index)=>(
            <ul>
            <li>{value}</li>
            </ul>
          ))
        </div>

       
            
        </>
     );
}

export default Todoapp;