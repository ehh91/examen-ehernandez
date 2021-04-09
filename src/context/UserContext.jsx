import { createContext, useState } from 'react'

let UserContext = createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    function logIn() {
        setUser("relikedd")
    }
    function logOut() {
        setUser(null)
    }
    return (
        <Provider value={{ user, logIn, logOut }}>
            {children}
        </Provider>
    )

}

export { UserProvider, Consumer as UserConsumer, UserContext };