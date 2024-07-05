import {ChangeEvent, ChangeEventHandler, MouseEvent} from 'react';

const callback = (): number => {
    return 12;
}
window.setTimeout (callback, 1000) //функция, которая вызовется через 1 секунду

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert (e.currentTarget.name)
    }

    const saveUser = () => {
        alert ('user have been saved')
    }

    const onNameChanged = () => {
        console.log ('name changed')
    }

    const focusLostHandler = () => {
        console.log ('focus lost')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed: ${e.currentTarget.value}`)
    }

    return <>
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Elizabeth</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name="delete" onClick={deleteUser}>delete</button>
            <button name="save" onClick={deleteUser}>save</button>
        </div>
    </>
}