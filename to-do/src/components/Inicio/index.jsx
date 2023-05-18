import Lista from "../Listas/index"
import { useState, useEffect} from 'react'
import './style.css'
import { api } from "../../Services/api"

const Inicio = () => {
    const [ListaAdd, setListaAdd] = useState([])
    const Add = () => {
        setListaAdd([<Lista/>].concat(ListaAdd))
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
    }, [pegarLista])

    return(
        <main>
            <div className="conteiner">
                <div className="adicionar">
                    <button className="mais-inicio" onClick={Add}>+</button>
                </div>
                    <div className="conteiner-listas">
                        {ListaAdd}
                    {
                        carregando === true ?(
                            <>
                            {pegarLista.map((items, index) => (                            
                                <div className='conteiner-separador'>
                                    <div className="lista">
                                        <div className="efeito">
                                            <a href= '/tarefas' className='titulo'>{items.nome}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            </>
                        ):(
                            <h1>Carregando...</h1>
                        )
                    }
                    </div>
            </div>
        </main>
    )
}

export default Inicio