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

  return (
    <>
    <div></div>
     
    </>
  )
}

export default App
