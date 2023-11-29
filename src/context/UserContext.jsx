import { createContext, useState } from "react";


export const UserContext = createContext({
    userData: null,
    setUserData: () => { }
})

export const UserContextProvider = ({ children, initial = {} }) => {
    const [userData, setUserData] = useState(initial)
    const token = sessionStorage.getItem('token')

    return (
        <UserContext.Provider value={{ userData, setUserData, token }}>
            {children}
        </UserContext.Provider>
    )
}