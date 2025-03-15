import { useEffect } from "react";
import Tarea from "./Tarea"
import tasksData from "./logic/aleatoryData";
import Form from "./Form";
import { generateTaskId } from "./logic/logic";
import { useState } from "react";


function Tareas() {
    let [tasks, setTasks] = useState([])


    /**
     * 
     * @param {String} title of the task
     */
    function addTask(title) {
        const newTask = {
            title: title,
            isTaskDone: false,
            id: generateTaskId(title)
        }
        /* Try to find a task with the same id */
        const isAreadyExist = tasks.find((taks) => {
            if (taks.id == newTask.id) return taks
        });

        /* check if the variable contains something */
        if (isAreadyExist) {
            alert('The task has alreay exist')

        } else {
            setTasks((prevTask) => [newTask, ...prevTask]);
        }

    }

    /**
     * That function remove a spesific task amogn all the task
     * @param {string} id is the hash of the task that allow to find it
     */
    function removeTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }


    /**
     * Load the task
     */
    useEffect(() => {
        function loadTask() {
            const  currentTask = []
            for (const task of tasksData.tasks){/* TEMPORAL!! this for is because i need to generate the id of the task */
                const newTask = {
                    title: task.title,
                    isTaskDone: task.isTaskDone,
                    id: generateTaskId(task.title)
                }
                currentTask.push(newTask)
            }
            setTasks(currentTask)/* Loads the task in task's array */
        }
        loadTask();
    }, [tasksData.tasks])

    /**
     * Update de task
     */
    useEffect(() => {
        if (tasks.length == 0) return;
        console.log('The tasks has been updated correctly');
        console.log(tasks);

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
                                key={tarea.id}
                                id={tarea.id}
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