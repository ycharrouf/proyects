import { useRef } from 'react';
import './styles/From.css'

function Form({addTask}) {
    const inputRef = useRef(null);
    
    function handlesubmint(event){
        event.preventDefault();
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
            <form onSubmit={handlesubmint}>
                <label htmlFor="task">Add task</label>
                <input ref={inputRef} type="text" name="task" placeholder='Tile of the task'/>
                <button type='submit' >➕</button>
            </form>
        </>
    )

    
}

export default Form