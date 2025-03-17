import { useState, useEffect, useInsertionEffect } from 'react'
import caracteres from './characteres'

import './App.css'

function App() {
  const [pass, setPass] = useState(null);
  let [characteres, setCharacteres] = useState([]);

  useEffect(() => {
    function loadCharacteres() {
      setCharacteres(prevChar => [...prevChar, ...caracteres]);
    }
    loadCharacteres();
  }, [])

  useEffect(() => {
    console.log('Caracteres cargados correctamente');
  }, [characteres])

  return (
    <>
      <h1>Pass Generator</h1>

    </>
  )
}

export default App
