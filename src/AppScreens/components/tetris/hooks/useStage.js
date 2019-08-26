import {useState} from 'react'
import {createStage} from '../GameHelpers'

export const useStage = () =>{
    const [stage,setStage] = useState(createStage());

    return[stage,setStage]
}