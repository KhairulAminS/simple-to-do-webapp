import React from 'react'
import { IoIosTrash } from 'react-icons/io'

const DeleteTask = ({ toast }) => {
    return (
        <div className={`${toast.visible ? 'animate-slideIn' : 'animate-leave'} flex px-10 py-5 bg-gray-700 text-white rounded-xl text-2xl font-semibold space-x-5`} >
            <div className='flex items-center text-3xl text-white'>
                <IoIosTrash />
            </div>
            <span>Task deleted!</span>
        </div>
    )
}

export default DeleteTask