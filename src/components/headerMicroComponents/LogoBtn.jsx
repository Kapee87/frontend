import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function LogoBtn() {
    return (
        <NavLink to="/" className="btn w-56 p-0 animate-hueRotate">
            <div style={{ "backgroundImage": `url(${logo})` }} className='bg-cover bg-no-repeat bg-center w-full h-12 rounded-md'>
            </div>
        </NavLink>
    )
}

export default LogoBtn