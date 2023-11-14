import { useState } from 'react'
//importar los modulos de firabase

import appFirabase from '../src/Credenciales'
import{getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(appFirabase)

//importar componentes

import Login from '../src/Componentes/Login'
import Home from '../src/Componentes/Home'

import './App.css'

function App() {

  const [usuario,setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirabase)=>{
    if (usuarioFirabase){
      setUsuario(usuarioFirabase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
    <>
    <div>
      {usuario ? <Home correoUsuario ={usuario.email}/> : <Login/>}
    </div>
     
    </>
  )
}

export default App
