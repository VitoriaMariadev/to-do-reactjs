import Lista from "../Listas/index"
import { useState, useEffect } from 'react'
import './style.css'


const Inicio = () => {
    const [ListaAdd, setListaAdd] = useState([])
    const Add = () => {
        setListaAdd([<Lista/>].concat(ListaAdd))
    }

    return(
        <main>
            <div className="conteiner">
                <div className="adicionar">
                    <button className="mais" onClick={Add}>+</button>
                </div>
                    <div className="conteiner-listas">
                        {ListaAdd}
                    </div>
            </div>
        </main>
    )
}

export default Inicio