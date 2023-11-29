import { useContext } from "react";
import { UserContext } from "../context/UserContextB";

export function useUserHandler() {
    const { setUserData, token } = useContext(UserContext)

    const logout = () => {
        setUserData(null)
        sessionStorage.removeItem('token')
    }

    const login = () => {
        setUserData({
            "email": "hector@gmail.com",
            "online": true
        })
        sessionStorage.setItem('token', '123qwe')
    }

    const isLogged = () => {
        return token.length > 0
    }

    return { logout, login, isLogged }
}