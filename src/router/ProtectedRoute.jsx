import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useIsLogged } from '../hooks/useIslogged'
// import Swal from 'sweetalert2'


function ProtectedRoute({ children }) {
    const { userData } = useContext(UserContext)
    const { token } = useIsLogged()
    const [alertOn, setAlertOn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        /* console.log(userData, token);
        if (token == '' || !token) {
            setAlertOn(true)
            const timeout = setTimeout(() => {
                clearTimeout(timeout)
                setAlertOn(false)
                navigate('/')
            }, 2000);
            return
        }
        setAlertOn(false) */
        console.log('paso largooou');
    }, [])

    return (
        <>
            {children}
            <dialog id="my_modal_3" className={`modal ${alertOn ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <div role="alert" className="alert alert-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="red" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! Debés estar logeado.</span>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop ">
                    <button className='bg-black bg-opacity-50'>close</button>
                </form>
            </dialog>

        </>
    )

}

export default ProtectedRoute