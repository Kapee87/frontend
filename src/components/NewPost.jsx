import React from 'react'

function NewPost() {
    return (
        <div className='min-h-screen bg-primary bg-opacity-70 flex flex-col items-center gap-12 '>
            <h2 className='text-xl md:text-3xl mt-5 self-center '>Crear una nueva experiencia</h2>
            <div className='border-2 border-orange-400 border-opacity-60 py-10 px-2 md:p-20 rounded-lg [&_input]:rounded-md [&_input]:ms-3 [&_input]:p-2 [&_textarea]:rounded-md shadow-xl shadow-slate-700'>
                <form className='flex flex-col items-baseline [&_label]:flex [&_label]:justify-between [&_label]:w-full [&_label]:gap-5 [&_label]:mt-2 ' >
                    <label htmlFor="" className='text-xs md:text-base'>Título : <input type="text" /></label>
                    <label htmlFor="" className='text-xs md:text-base'>Experiencia : <textarea name="" id="" ></textarea></label>
                    <label htmlFor="" className='text-xs md:text-base'>Imagen (Url) : <input type="url" /></label>
                </form>

            </div>

        </div>
    )
}

export default NewPost