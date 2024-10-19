import { useState } from 'react'
import './App.css'
import Sidebar from './component/sidebar/Sidebar'
import Main from './component/main/Main'
import ContextProvider from './context/Context'


function App() {

  return (
   <>
   <ContextProvider>
   <Sidebar />
   <Main />
   </ContextProvider>
   </>
  )
}

export default App
