import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

const Header = ({closeModal, editMode}) => {
    return (
        <div className='p-10'>
            <button className='absolute right-0 top-0 p-5 text-3xl hover:scale-125 transition-transform'
                onClick={() => closeModal()}>
                <MdOutlineClose />
            </button>
            <span className='text-4xl font-bold'>
                {editMode? 'Edit this task' : 'Add a new task'}
            </span>
        </div>
    )
}

export default Header