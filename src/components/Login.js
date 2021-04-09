import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'


export default function Login() {

    let { user, logIn, logOut } = useContext(UserContext)
    const [userSigin, setUserSigin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div id="logIn">
            <h1>Ingrese Usuario y Contraseña</h1>
            {/* <form onSubmit={logIn} > */}
                <label htmlFor="user">Usuario</label>
                <input id="user" type="text" onChange={(e) => setUserSigin(e.target.value)} />
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={logIn}>Entrar</button>
            {/* </form> */}
        </div>
    )
}