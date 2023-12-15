import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import randomUser from '../assets/randomUser.jpg'
import axios from "axios";
import { apiUrl } from "../utils/urlStore";
import { useFirstLoad } from "./useFirstLoad";


export function useUserHandler() {
    const { setUserData } = useContext(UserContext)
    const { token } = useFirstLoad()

    const logout = () => {
        setUserData(null)
        sessionStorage.clear()
    }

    const login = async (emailValue, passwordValue) => {
        try {
            const res = await axios.post(`${apiUrl}/auth/login`, { email: emailValue, password: passwordValue })
            console.log(res);
            sessionStorage.clear()
            sessionStorage.setItem('token', res.data.token)
            setUserData({ email: res.data.email, username: res.data.username, avatarUrl: res.data.avatarUrl })
                .then(sessionStorage.setItem('userData', userData))

        } catch (error) {
            console.log(error);
        }
        /* console.log(Cookies.get());

        const tempUser = {
            "email": "liostallone@mail.com",
            "name": "Lionel Stallone",
            "avatarUrl": randomUser
        }
        sessionStorage.setItem('token', '123qwe')
        sessionStorage.setItem('user', JSON.stringify(tempUser))
        setUserData(tempUser)
 */
        console.log(emailValue, passwordValue);
        return "dale"
    }
    const profile = async () => {

        /* try {
            const res = axios.post(`${apiUrl}/auth/profile`)
        } catch (error) {
            
        } */
    }

    const isLogged = () => {
        console.log(token);
        return token
    }

    return { logout, login, isLogged }
}