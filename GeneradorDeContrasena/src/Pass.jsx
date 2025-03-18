import { useState, useEffect, useInsertionEffect } from 'react'
import caracteres from './characteres'

import './App.css'

function Pass() {
  const [pass, setPass] = useState(null);
  let [characters, setCharacters] = useState([]);

  let classPass = (pass) ? 'd-block' : 'd-none'; /* Hay que aplicar estilso en funcion de si tenemos contraseñas o no */
  console.log(classPass);
  

  /* Load the characters */
  useEffect(() => {
    function loadCharacteres() {
      /* In production when i change something in the code the state characters obtains the double of caracteres constant  */
      if (characters) {
        setCharacters([])
        setCharacters(prevChar => [...prevChar, ...caracteres]);
      } else {
        setCharacters(prevChar => [...prevChar, ...caracteres]);
      }
    }
    loadCharacteres();
  }, [])

  /* when the characters is load correctly shows that mensage */
  useEffect(() => {
    console.log('Caracteres cargados correctamente');
  }, [characters])


  /**
   * 
   * @param {number} length of the pass that you want, his length can be maximum of 32 characters
   * @returns the pass
   */
  function generatePass(lenght) {
    const aleatoryPass = [];
    for (let i = 0; i < lenght; i++) {
      let random = Math.floor(Math.random() * characters.length);
      aleatoryPass.push(characters[random]);
    }
    return aleatoryPass.join('');
  }

  /**
   * Get the pass and set it in the state
   */
  function updatePass() {
    let length = 0;
    while (length < 8) {
      length = Math.floor(Math.random() * 32)
    }
    let pass = generatePass(length);
    setPass(pass)
    console.log(pass);

  }

  return (
    <>
      <h1>Pass Generator</h1>
      <div className={classPass}>{pass}</div>
      <button onClick={() => updatePass()}>Gerenate Pass</button>
    </>
  )
}

export default Pass
