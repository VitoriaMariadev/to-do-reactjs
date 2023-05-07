import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './Inicio'
import Tarefas from './Tarefas'

const RoutesExistentes = props => (
    <main>
        <Routes>
            <Route  exact path="/to-do-reactjs/to-do" element={<Inicio/>}></Route>
            <Route  exact path="/to-do-reactjs/to-do/tarefas" element={<Tarefas/>}></Route>
        </Routes>
    </main>
)

export default RoutesExistentes