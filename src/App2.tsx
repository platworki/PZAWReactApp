import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface TaskInterface {
    id: number,
    body: string,
    checked: boolean
}

function Task(props: TaskInterface) {
    let taskBody = props.body;
    return (
        <div className="d-flex justify-content-between align-items-center w-100">
            <span>{taskBody}</span>
        </div>
    );
}

interface TaskList {
    taskList: React.ReactElement<TaskInterface>[]
}

function TaskList() {
    const [tasks, setTasks] = React.useState<TaskInterface[]>([
        { id:1, body: "zadanie 1", checked: false },
        { id:2, body: "zadanie 2", checked: false }
    ]);

    function toggleChecked(id: number) : TaskInterface[]{
        let taskCopy = [...tasks];
        return taskCopy.map(task => {
            if(task.id == id){
                task.checked = !task.checked;
            }
            else{
                return task;
            }
        })
    }

    return (
        <div>
            <div style={{margin:"10px"}}>
                <input type="button" value={"wszystkie"}/>
                <input type="button" value={"wykonane"}/>
                <input type="button" value={"niewykonane"}/>
            </div>
            {tasks.length > 0 ? (
                <table className="table table-striped table-hover mb-0">
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr onClick={() => setTasks(toggleChecked(task.id))} style={!task.checked ? {cursor:"pointer" } : {cursor:"pointer", textDecoration:"line-through"}}>
                                <input type="checkbox" checked={task.checked} />
                                <td>{index + 1}.</td>
                                <td>{task.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) :
                (
                    <div className="alert alert-warning mb-0" role="alert">
                        Brak zadań do wykonania
                    </div>
                )}
        </div>
    )
}

function App2() {
    return (
        <div className="container py-4">
            <TaskList />
        </div>
    );
}

export default App2;
