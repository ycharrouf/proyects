import { useRef } from 'react';
import './styles/From.css'

function Form({addTask}) {
    const inputRef = useRef(null);
    
    function handlesubmint(event){
        event.preventDefault();
        console.log('esto entra');
        
        if(!inputRef.current) return;

        const titleTaskAdd = inputRef.current.value;
        if(titleTaskAdd){
            addTask(titleTaskAdd);
        }else{
            alert('You need to add a title of the task');
        }
    }
    
    return (
        <>
            <h3>Add task</h3>
            <form onSubmit={handlesubmint}>
                <label htmlFor="task">Title of the task:</label>
                <input ref={inputRef} type="text" name="task" placeholder='Add a task'/>
                <button type='submit' >Add task</button>
            </form>
        </>
    )

    
}

export default Form