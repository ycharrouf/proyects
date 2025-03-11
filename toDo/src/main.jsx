import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tarea from './Tarea'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="tabla">
      <div className="title">
        <h1>Lista de Tareas</h1>
      </div>
      <div className="tareas">
        <Tarea
          title={'Esta es la primera tarea'}
          isTaskDone={true}
        >

        </Tarea>
        <Tarea
          title={'Esta es la primera tarea'}
        >

        </Tarea>
        <Tarea
          title={'Esta es la primera tarea'}
        >

        </Tarea>
        <Tarea
          title={'Esta es la primera tarea'}
        >

        </Tarea>
        <Tarea
          title={'Esta es la primera tarea'}
        >

        </Tarea>
        <Tarea
          title={'Esta es la primera tarea'}
        >

        </Tarea>
        <Tarea
          title={'Esta es la primera tarea'}
          isTaskDone={true}
        >

        </Tarea>
      </div>
    </div>
  </StrictMode>,
)
