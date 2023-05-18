import { TarefasLista } from '../TarefasListas'
import { useState, useEffect } from 'react'
import './style.css'
import { api } from "../../Services/api"
import {BsTrash3} from 'react-icons/bs'
import {GrCheckbox} from 'react-icons/gr'
import {GrCheckboxSelected} from 'react-icons/gr'

export const Tarefas = () =>{

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
    const [tarefas, setAdicionarTodo] = useState('')
    const [nome, setTitulo] = useState('')


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

    const deletar = async (idDeletar) => {
        try {
            const res = await api.delete('/' + idDeletar)
            console.log(res)
        }
        catch{
            console.log('Deu erro')
            console.log(idDeletar)
        }
    }

    const addToDo = async () => {
        console.log(tarefas)
        
        const data = {
            nome,
            dia,
            tarefas
        }

        console.log(data)

        try {
            const res = await api.post('/to-do', data)
            console.log(res)
        }
        catch{
            console.log('Deu errado')
        }

    }

    const [addTarefa, setAddTarefa] = useState([])

    const add = () =>{
        return(
            setAddTarefa([<TarefasLista addFuncao={addToDo} set={setAdicionarTodo}/>].concat(addTarefa))
        )
    }

    const [checkBox, setCheckBox] = useState(<GrCheckbox/>)
    const [completo, setCompleto] = useState(false)

    const check = () => {
        if (completo === false){
            setCheckBox(<GrCheckboxSelected/>)
            setCompleto(true)
        }
        else{
            setCheckBox(<GrCheckbox/>)
            setCompleto(false)
        }
        }
    useEffect(() => {
        pegarTarefas()
    }, [pegarLista])

    return(
        <main className='main-tarefas'>
            <div className='conteiner-tarefas'>
                
                <div className="adicionar">
                    <button className="mais" onClick={add}>+</button>
                </div>

                <div className="conteiner-tarefas-segunda">
                <div className="dias">
                    <div className="dia">
                        <button className="btn-dias" onClick={mudarDia}>{dia}</button>
                    </div>
                    <div className="resumo">
                        <input type="text" className="resumo-input" onChange={(e) => setTitulo(e.target.value)}/>
                    </div>
                </div>

                <div className="tarefas" id="tarefas">
                    <TarefasLista addFuncao={addToDo} set={setAdicionarTodo}/>

                    {
                        carregando === true ?(
                            <>
                            {pegarLista.map((items, index) => (                            
                                <div className="espacos" key={index}>
                                    <div className="checar">
                                        <div onClick={check} className='check'>{checkBox}</div>
                                    </div>
                                        <input type="text" className="tarefas-input" value={items.tarefas}></input>
                                        <button className='btndel' onClick={() => {deletar(items._id)}}><BsTrash3/></button>
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
