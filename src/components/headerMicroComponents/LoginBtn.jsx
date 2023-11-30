import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useFirstLoad } from '../../hooks/useFirstLoad'
import { useNavigate } from 'react-router-dom'
import randomUser from '../../assets/randomUser.jpg'

function LoginBtn() {
    const { token } = useFirstLoad()
    const { userData, setUserData } = useContext(UserContext)
    const navigate = useNavigate()
    console.log(token)
    const handleLogin = async () => {
        const tempUser = {
            "email": "juanfernito@mail.com",
            "name": "juanfer",
            "avatarUrl": randomUser
        }
        sessionStorage.setItem('token', '123qwe')
        sessionStorage.setItem('user', JSON.stringify(tempUser))
        setUserData(tempUser)
        navigate('/')
    }
    return (
        <div className="mr-8 tooltip tooltip-bottom" data-tip="Iniciar sesión">
            <button className={`btn btn-square btn-ghost text-2xl`} onClick={() => document.getElementById('my_modal_2').showModal()}>
                🔐
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        {token ? 'Inicio de sesión' : 'Cierre de sesión'}
                    </h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
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
                    <form action="" className='flex flex-col items-center gap-2 [&_label_input]:rounded-md [&_label_input]:text-sm [&_label_input]:text-center [&_label_input]:ml-4 [&_label]:w-full' onSubmit={handleLogin}>
                        <label htmlFor="email">Email:<input type="text" id='email' disabled placeholder='mock de login' /></label>
                        <label htmlFor="password">Contraseña:<input type="text" id='password' disabled placeholder='mock de login' /></label>
                        <button type='submit' className='btn btn-outline '>iniciar sesión</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop bg-slate-400 bg-opacity-40">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default LoginBtn