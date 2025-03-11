
export function Todos({todos}){


    return <div>
        {todos.map(todo => <div key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
        </div>)}
    </div>
}