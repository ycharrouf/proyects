import { useEffect } from "react";
import Tarea from "./Tarea"
import tasksData from "./logic/aleatoryData";
import Form from "./Form";
import { generateTaskId, removeTask } from "./logic/logic";
import { useState } from "react";


function Tareas() {
    let [tasks, setTasks] = useState([])


    /**
         *  Add the task to the list of tasks
         * @param {string} title of the task 
         */
    function addTask(title) {
        const newTask ={
            title: title,
            isTaskDone: false,
        }
        
        setTasks((prevTask) => [newTask, ...prevTask]);
        
    }

    useEffect(() => {
        function loadTask() {
            /* setTasks(tasksData.tasks)/* Loads the task in task's array */ 
        }
        loadTask();
    }, [tasksData.tasks])


    useEffect(() =>{
        if(tasks.length==0) return;
        console.log('The tasks has been updated correctly');
    }, [tasks])
    return (
        <div className="tabla">
            <div className="titlePage">
                <h1>Lista de Tareas</h1>
            </div>
            <div className="form">
                <Form
                    addTask={addTask}
                ></Form>
            </div>
            <div className="tareas">
                {
                    tasks.map((tarea, index) => {
                        return (
                            <Tarea
                                key={index}
                                id={index}
                                isTaskDone={tarea.isTaskDone}
                                title={tarea.title}
                                removeTask={removeTask}
                            ></Tarea>
                        )
                    })
                }
            </div>
        </div>
    )


}
export default Tareas