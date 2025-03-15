import { useState } from "react";
import './styles/Tarea.css'

function Tarea({ title, isTaskDone = false, id, removeTask }) {

    let [isDone, setIsDone] = useState(isTaskDone);
    let tileDone = (isDone) ? 'title done' : 'title';


    return (
        <div className='tarea' id={id}>
            <div className="remove">
                <button onClick={() => removeTask(id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M9 6V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                    </svg>
                </button>
            </div>
            <div className={tileDone} onClick={() => setIsDone(!isDone)}>
                {title}
            </div>
            <div className="chek">
                <input
                    type="checkbox"
                    name="isDone"
                    checked={isDone}
                    onChange={() => setIsDone(!isDone)}
                />
            </div>
        </div>
    )
}

export default Tarea;