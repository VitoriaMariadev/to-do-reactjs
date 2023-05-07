import './style.css'

export const TarefasLista = () =>{
    return(
        <div className="espacos">
            <div className="checar">
                <input type="checkbox" className="tarefas-checar"/>
            </div>
            <input type="text" className="tarefas-input"/>
        </div>
    )
}