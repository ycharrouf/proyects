import { useState, useEffect, useInsertionEffect } from 'react'
import caracteres from './characteres'

function Pass() {
  const [pass, setPass] = useState(null);
  let [characters, setCharacters] = useState([]);

  let classPass = (pass) ? 'd-block p-8 border-2 w-150 text-center rounded-3xl text-3xl' : 'hidden'; /* Hay que aplicar estilso en funcion de si tenemos contraseñas o no */
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
    for (let i = 0; i <= lenght; i++) {
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
    let pass = generatePass(32);
    setPass(pass)
    console.log(pass);

  }

  function copiPass() {
    if (pass) {
      navigator.clipboard.writeText(pass)
    }
  }
  return (
    <div className="flex flex-col items-center content-center text-black gap-4 font-sans">
      <h1 className='text-4xl md:text-6xl lg:text-9xl font-bold border-4 p-3 rounded-2xl'>Pass Generator</h1>
      <div className={classPass}>{pass}</div>
      <div className="buttons flex items-center gap-5">
        <button className='bg-gray-600 text-2xl lg:text-6xl  border-2 rounded-3xl p-4 hover:bg-gray-800 ' onClick={() => updatePass()}>Gerenate Pass</button>
        <button className='bg-gray-600 border-2 rounded-2xl p-3 hover:bg-gray-800' onClick={() => copiPass()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>

        </button>
      </div>

    </div>
  )
}

export default Pass
