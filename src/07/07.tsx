import {useState} from 'react';

export type ManTypeDes = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType  = {
    title: string
    man: ManTypeDes
    food: Array<string>
    car: {model: string}

}

function useArrState (m: string){
    return [m, function (){}]
}

function useObjectState (m: string) {
    return {
        messageObj: m,
        setMessageObj: function (){}
    }
}


export const ManComponent = ({title, man, ...props}:PropsType)=> {

    const {messageObj, setMessageObj} = useObjectState("hello")
    const [messageArr, setMessageArr] = useArrState("hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}