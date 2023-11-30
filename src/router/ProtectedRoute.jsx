import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'


function ProtectedRoute({ children }) {
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!userData) {
            alert('Las credenciales no tienen el permiso necesario para acceder a esta sección o el usuario no está logeado')
            navigate('/')
            return
        }
    }, [])

    return children
}

export default ProtectedRoute