import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
// import axios from "axios";

export function useFirstLoad() {
    const { userData, setUserData, token } = useContext(UserContext)

    // console.log(token);
    useEffect(() => {
        async function loadaxios() {
            try {
                // const { data } = await axios.post('https://melvera-api.onrender.com/api/auth/token', {}, {
                //     headers: {
                //         Authorization: `Bearer ${token}`
                //     }
                // });
                // console.log(data.user);
                // const verObj = {
                //     "email": "hector@gmail.com",
                //     "online": true
                // }
                setUserData(JSON.parse(sessionStorage.getItem('userData')))
            } catch (error) {
                console.log(error)
                sessionStorage.removeItem('token')
                setUserData(null)
            }
        }
        token
            ? loadaxios()
            : setUserData(null)
        // console.log(userData);
    }, [])
    return {
        userData,
        token
    }
}

