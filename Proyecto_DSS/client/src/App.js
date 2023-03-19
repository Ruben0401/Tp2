import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Principal from './components/Principal'
import Patients from './components/Patients'
import Messages from './components/Messages'
import Notifications from './components/Notifications'
import NotificationDetail from './components/NotificationDetail'
import InfectedLocation from './components/InfectedLocation'
import InfectedLocationDetail from './components/InfectedLocationDetail'

const App = () => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Principal/>} />
      <Route path='/pacientes' element={<Patients/>} />
      <Route path='/mensajes' element={<Messages/>} />
      <Route path='/notificaciones' element={<Notifications/>} />
      <Route path='/notificaciones/id' element={<NotificationDetail/>} />
      <Route path='/infectados' element={<InfectedLocation/>} />
      <Route path='/infectados/id' element={<InfectedLocationDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
