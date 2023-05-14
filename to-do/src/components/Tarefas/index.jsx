import { TarefasLista } from '../TarefasListas'
import { useState, useEffect } from 'react'
import './style.css'
import { api } from "../../Services/api"

const Tarefas = () =>{

    const [addTarefa, setAddTarefa] = useState([])

    const add = () =>{
        return(
            setAddTarefa([<TarefasLista/>].concat(addTarefa))
        )
    }

    const [dia, setDia] = useState('Seg')

    const mudarDia = () => {
        if (dia === 'Seg'){
            setDia('Ter')
        }

        else if (dia === 'Ter'){
            setDia('Qua')
        }

        else if (dia === 'Qua'){
            setDia('Qui')
        }

        else if (dia === 'Qui'){
            setDia('Sex')
        }

        else if (dia === 'Sex'){
            setDia('Sab')
        }

        else if (dia === 'Sab'){
            setDia('Dom')
        }

        else if (dia === 'Dom'){
            setDia('Seg')
        }
    }

    const [carregando, setCarregando] = useState(false)
    const [pegarLista, setPegarLista] = useState('')

    const pegarTarefas = async () => {
        try {
            
            const res = await api.get("/to-do")
            setPegarLista(res.data)
            setCarregando(true)
        }
        catch (erro){
            console.log(erro)
        }
    }

    useEffect(() => {
        pegarTarefas()
    }, [])

    return(
        <main className='main-tarefas'>
            <div className='conteiner'>
                
                <div className="adicionar">
                    <button className="mais" onClick={add}>+</button>
                </div>

                <div className="conteiner-tarefas">
                <div className="dias">
                    <div className="dia">
                        <button className="btn-dias" onClick={mudarDia}>{dia}</button>
                    </div>
                    <div className="resumo">
                        <input type="text" className="resumo-input"/>
                    </div>
                </div>

                <div className="tarefas" id="tarefas">
                    {addTarefa}

                    {
                        carregando === true ?(
                            <>
                            
                            {pegarLista.map((items, index) => (                            
                                <div className="espacos">
                                    <div className="checar">
                                        <input type="checkbox" className="tarefas-checar"/>
                                    </div>
                                        <input type="text" className="tarefas-input" placeholder={items.tarefas}></input>
                                </div>
                            ))}

                            </>
                        ):(
                            <h1>Carregando...</h1>
                        )
                    }

                </div>

            </div>

            </div>
        </main>
    )
}

export default Tarefas