export function Todos({todos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <button>{todos.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}