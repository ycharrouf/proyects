import { useState } from "react";
import './Tarea.css'



function Tarea ({title, isTaskDone}){
    let [isDone, setIsDone] = useState(!!isTaskDone);

    let tileDone = (isDone) ? 'title done' : 'title'
    return(
        <section className="tarea">
            <div className={tileDone}>
                {title}
            </div>
            <div className="chek">
                <input 
                    type="checkbox" 
                    name="isDone" 
                    checked={isDone}
                    onClick={() => setIsDone(!isDone)}
                    />
                <button>remove</button>
            </div>
        </section>
    )
}

export default Tarea;