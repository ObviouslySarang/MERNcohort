
export function CreateTodo() {
    return <div>
        <input type="text"  placeholder="title" style={{ padding: '10px', margin: '5px' }}></input><br />
        <input type="text"  placeholder="description" style={{ padding: '10px', margin: '5px' }}></input><br />
        <button style={{ padding: '10px', margin: '5px' }}>Submit</button>
    </div>
}