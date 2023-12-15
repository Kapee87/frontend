import React, { useContext, useEffect, useRef } from 'react'
import { useUserHandler } from '../hooks/useUserHandler';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../utils/urlStore';
import axios from 'axios';
import Swal from 'sweetalert2';
import { UserContext } from '../context/UserContext';

function Signin() {
    const { isLogged, login, logout } = useUserHandler()
    const { userData } = useContext(UserContext)
    useEffect(() => {
        // console.log(isLogged() ? true : false);
        console.log(isLogged());

    }, [])

    const navigate = useNavigate()
    const inputRefs = {
        emailValue: useRef(null),
        passwordValue: useRef(null),
        usernameValue: useRef(null),
        avatarUrlValue: useRef(null)
    };

    const handleSignIn = async (e) => {
        e.preventDefault()
        const email = inputRefs.emailValue.current.value;
        const password = inputRefs.passwordValue.current.value;
        const username = inputRefs.usernameValue.current.value;
        const avatarUrl = inputRefs.avatarUrlValue.current.value;
        // console.log(email, username, password, avatarUrl);
        try {
            const newUser = await axios.post(`${apiUrl}/auth/register`, {
                username,
                email,
                password,
                avatarUrl
            })
            console.log(newUser.status !== 200, newUser.status, newUser);

            Swal.fire('Exito', 'Usuario registrado con éxito', 'success')
            navigate('/', { replace: true })

        } catch (error) {
            console.log(error);
            Swal.fire('error', `${error.response.data.middleMessage}`, 'error')
        }
    }
    const handleSignOut = async (e) => {
        if (isLogged()) {
            logout()
            Swal.fire('Cierre de sesión', 'Se cerró la sesión', 'info')
            navigate('/', { replace: true })
        }
    }

    return (
        <section className='hero min-h-[83vh] justify-center'>
            <div className='flex flex-col gap-5 items-baseline border-2 border-orange-100 p-20 rounded-lg [&_input]:rounded-md [&_input]:ms-3 [&_input]:p-2 shadow-xl shadow-slate-700' >
                {
                    isLogged() ?
                        <form onSubmit={handleSignOut}>
                            <h3>{userData?.name}</h3>
                            <h4>{userData?.email}</h4>
                            <img src={userData?.avatarUrl} alt={userData?.name} />
                            <button type="submit">Cerrar Sesión</button>
                        </form>

                        : <form onSubmit={handleSignIn}>
                            <label>Nombre de usuario :<input type="text" name='usernameValue' ref={inputRefs.usernameValue} minLength={6} /></label>
                            <label>Correo Electrónico :<input type="email" name='emailValue' ref={inputRefs.emailValue} /></label>
                            <label>Contraseña :<input type="password" name='passwordValue' ref={inputRefs.passwordValue} minLength={6} /></label>
                            <label>Url de imagen :<input type="url" name='avatarUrlValue' ref={inputRefs.avatarUrlValue} /></label>
                            <button type="submit" className='btn btn-outline'>Registrarse</button>
                        </form>
                }
            </div>
        </section>
    )
}

export default Signin