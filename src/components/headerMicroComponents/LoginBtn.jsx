import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useFirstLoad } from '../../hooks/useFirstLoad'

function LoginBtn() {
    const { token } = useFirstLoad()
    console.log(token)
    return (
        <div className="mr-8 tooltip tooltip-bottom" data-tip="Iniciar sesión">
            <button className={`btn btn-square btn-ghost text-2xl`} onClick={() => document.getElementById('my_modal_2').showModal()}>
                🔐
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                    {
                        //usuario logeado o no condiciona el contenido
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    }
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default LoginBtn