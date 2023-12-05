import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LoginBtn from './headerMicroComponents/LoginBtn'
import LogoBtn from './headerMicroComponents/LogoBtn'
import { UserContext } from '../context/UserContext'

function Header() {
    const { userData } = useContext(UserContext)
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1 animate-hueRotate">
                <LogoBtn />
            </div>

            <div className="flex gap-5 items-center">
                <ul className="hidden md:flex gap-2">
                    <li className='btn transition-all duration-700'><NavLink >inicio</NavLink></li>
                    <li><NavLink className='btn transition-all duration-700'>usuario nuevo</NavLink></li>
                    <li><NavLink className='btn transition-all duration-700'>posts</NavLink></li>
                </ul>
                <LoginBtn />
                <div className="drawer drawer-end md:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-square"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4">
                            <li>
                                <label htmlFor="my-drawer-4" className="drawer-button flex justify-end"> ❌</label>
                            </li>
                            <li className='bg-transparent'><NavLink >inicio</NavLink></li>
                            <li><NavLink className=''>usuario nuevo</NavLink></li>
                            <li><NavLink className=''>posts</NavLink></li>
                            <li>
                                <LoginBtn />
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header