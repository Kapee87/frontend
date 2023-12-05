import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useFirstLoad } from '../../hooks/useFirstLoad'
import { useNavigate } from 'react-router-dom'
import { useUserHandler } from '../../hooks/useUserHandler'

function LoginBtn() {
    const { token } = useFirstLoad()
    const { userData } = useContext(UserContext)
    const { logout, isLogged, login } = useUserHandler()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        const res = await login()
        // console.log(res);
        navigate('/')
    }
    const handleCloseSession = async () => {
        isLogged() ? logout() : ''
    }
    return (
        <div className="mr-8 tooltip tooltip-bottom" data-tip="Iniciar sesión">
            <button className={`btn btn-square btn-ghost text-2xl`} onClick={() => document.getElementById('my_modal_2').showModal()}>
                🔐
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        {!token ? 'Inicio de sesión' : 'Bienvenid@'}
                    </h3>

                    {
                        //usuario logeado o no condiciona el contenido
                        token & userData?.avatarUrl ?
                            <div className="avatar">
                                {userData.name}
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={userData?.avatarUrl} alt={userData?.avatarUrl} />
                                </div>
                            </div>
                            : ''
                    }
                    {
                        token ?
                            <div className='flex flex-col gap-6 items-center mt-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={userData.avatarUrl} />
                                    </div>
                                </div>
                                <h3>{userData.email} </h3>
                                <button className='btn btn-outline ' onClick={handleCloseSession} >
                                    Cerrar sesión
                                </button>

                            </div>
                            :
                            <form action="" className='flex flex-col items-center gap-2 [&_label_input]:rounded-md [&_label_input]:text-sm [&_label_input]:text-center [&_label_input]:ml-4 [&_label]:w-full' onSubmit={handleLogin}>
                                <label htmlFor="email">Email:
                                    <input type="text" id='email' disabled placeholder='mock de login' />
                                </label>
                                <label htmlFor="password">Contraseña:
                                    <input type="text" id='password' disabled placeholder='mock de login' />
                                </label>
                                <button type='submit' className='btn btn-outline'>iniciar sesión</button>
                            </form>
                    }
                    <p className="pt-14 opacity-60 text-xs">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop bg-slate-400 bg-opacity-40">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default LoginBtn