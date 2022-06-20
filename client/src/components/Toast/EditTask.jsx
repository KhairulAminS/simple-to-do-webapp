import React from 'react'
import { RiInformationFill } from 'react-icons/ri'

const EditTask = ({ toast }) => {
    return (
        <div className={`${toast.visible ? 'animate-slideIn' : 'animate-leave'} flex px-10 py-5 bg-blue-500 text-white rounded-xl text-2xl font-semibold space-x-5`} >
            <div className='flex items-center text-3xl text-white'>
                <RiInformationFill />
            </div>
            <span>Task has been edited!</span>
        </div>
    )
}

export default EditTask