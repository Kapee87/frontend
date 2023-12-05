// import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { usePostHandler } from '../hooks/usePostHandler'

function Home() {
    const navigate = useNavigate()
    const { userData } = useContext(UserContext)
    const [posts, setPosts] = useState(null)
    const { getPosts } = usePostHandler()

    const prueba = () => { console.log(userData) }

    useEffect(() => {
        const { posts } = getPosts()
            .then(res => setPosts([...res]))
    }, [])

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
        <>
            <div className="carousel  ">
                {
                    posts?.length > 0 ? posts?.map((post, index) => {
                        console.log(index);
                        return (
                            <div id={post._id} className="carousel-item w-full h-[74vh] md:h-[78vh] relative text-amber-100" key={post._id}>
                                <img src={post.imageUrl} className="w-full object-contain" />
                                <span className='absolute w-full bg-black bg-opacity-50 h-20 md:h-14 text-center drop-shadow-2xl text-base md:text-lg pt-4 md:pt3 font-bold'>
                                    {post.title}
                                </span>
                                <div className='absolute w-full h-16 md:h-10 text-center drop-shadow-2xl text-base md:text-lg bottom-0 font-bold 
                                bg-opacity-60 bg-black hue-rotate-180 flex justify-center gap-3'>
                                    <NavLink to={`/post/${post._id}`} className='btn-ghost rounded-xl p-1 hover:bg-sky-500 transition-all duration-700 ' >
                                        Ver Experiencia
                                    </NavLink>
                                    <div className='border'></div>
                                    <NavLink to={'/nuevoPost'} className='btn-ghost rounded-xl p-1 hover:bg-sky-500 transition-all duration-700' >
                                        Crear una Experiencia
                                    </NavLink>

                                </div>
                            </div>
                        )
                    })
                        : ''
                }

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    posts?.length > 0 ? posts?.map((post, index) => {

                        if (index > 10) return

                        return (
                            <a href={`#${post._id}`} className="btn btn-xs" key={post._id}>{index} </a>
                        )

                    })
                        : ''
                }
            </div>

            {/* <button className='absolute top-20 btn btn-outline' onClick={() => console.log(posts.map(p => p.title))}>prueba</button> */}
        </>
    )
}

export default Home
/*     {
        posts?.length > 0 ? posts?.map((post, index) => {
            console.log(index);
            return (<div id={`slide${index}`} className="carousel-item  w-full">
                <img src={post.imageUrl} className="w-full" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <NavLink to={`#${index < posts?.length ? index + 1 : 0}`} onClick={() => console.log("left")} className="btn btn-circle">❮</NavLink>
                    <NavLink to={`#${index > 0 ? index - 1 : posts?.length}`} onClick={() => console.log("rait")} className="btn btn-circle">❯</NavLink>
                </div>
            </div >)
        })
            : ''
    } */