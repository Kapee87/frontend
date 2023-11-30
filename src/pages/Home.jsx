// import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Home() {
    const navigate = useNavigate()
    const { userData } = useContext(UserContext)

    const prueba = () => { console.log(userData) }

    const handleClick = async () => {
        try {
            /* const newUSer = await axios.post("https://epicjourney.onrender.com/auth/register", {
                "username": "Lionel Stallone",
                "email": "liostallone@mail.com",
                "password": "123qwe",
                "avatarUrl": "https://fotos.perfil.com/2022/12/13/trim/987/555/lionel-messi-con-la-albiceleste-1471882.jpeg"
            }) */
            navigate('/nuevoPost')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there {userData && userData?.name} </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary" onClick={handleClick}>Get Started</button>
                    <button className="btn btn-primary" onClick={prueba}>prueba</button>
                </div>
            </div>
        </div>
    )
}

export default Home