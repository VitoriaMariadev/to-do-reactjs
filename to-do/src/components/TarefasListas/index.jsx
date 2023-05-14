import './style.css'
import {TiPlus} from 'react-icons/ti'
import {GrCheckbox} from 'react-icons/gr'
import {GrCheckboxSelected} from 'react-icons/gr'
import { useState } from 'react'


export const TarefasLista = (props) =>{

    const [checkBox, setCheckBox] = useState(<GrCheckbox/>)
    const [completo, setCompleto] = useState(false)

    const set = props.set

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

    return(
        <div className="espacos">
            <div className="checar">
                <div onClick={check} className='check'>{checkBox}</div>
            </div>
            <input type="text" className="tarefas-input" onChange={(e) => set(e.target.value)}/>
            <button className='btnadd' onClick={props.addFuncao}><TiPlus/></button>
        </div>
    )
}