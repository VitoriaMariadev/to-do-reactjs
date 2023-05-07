import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './Inicio'
import Tarefas from './Tarefas'

const RoutesExistentes = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/tarefas" element={<Tarefas/>}></Route>
        </Routes>
    </main>
)

export default RoutesExistentes