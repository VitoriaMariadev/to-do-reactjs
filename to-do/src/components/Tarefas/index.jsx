import { TarefasLista } from '../TarefasListas'
import { useState } from 'react'
import './style.css'

const Tarefas = () =>{

    const [addTarefa, setAddTarefa] = useState([])

    const add = () =>{
        return(
            setAddTarefa([<TarefasLista/>].concat(addTarefa))
        )
    }

    return(
        <main className='main-tarefas'>
            <div className='conteiner'>
                
                <div className="adicionar">
                    <button className="mais" onClick={add}>+</button>
                </div>

                <div className="conteiner-tarefas">
                <div className="dias">
                    <div className="dia">
                        <button className="btn-dias" >Seg</button>
                    </div>
                    <div className="resumo">
                        <input type="text" className="resumo-input"/>
                    </div>
                </div>

                <div className="tarefas" id="tarefas">

                    {addTarefa}

                </div>

            </div>

            </div>
        </main>
    )
}

export default Tarefas