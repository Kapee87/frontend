import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import randomUser from '../assets/randomUser.jpg'

export function useUserHandler() {
    const { setUserData, token } = useContext(UserContext)

    const logout = () => {
        setUserData(null)
        sessionStorage.removeItem('token')
    }

    const login = () => {
        const tempUser = {
            "email": "juanfernito@mail.com",
            "name": "juanfer",
            "avatarUrl": randomUser
        }
        sessionStorage.setItem('token', '123qwe')
        sessionStorage.setItem('user', JSON.stringify(tempUser))
        setUserData(tempUser)
    }

    const isLogged = () => {
        return token
    }

    return { logout, login, isLogged }
}