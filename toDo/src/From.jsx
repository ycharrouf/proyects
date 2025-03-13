function Form({ }) {
    return (
        <>
            <h3>Add task</h3>
            <form action="">
                <label htmlFor="task">Title of the task:</label>
                <input type="text" name="task" id="inputTask"/>
                <button>Añadir</button>
            </form>
        </>
    )
}

export default Form