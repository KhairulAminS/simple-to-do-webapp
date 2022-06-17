import React, { useState } from 'react'
import ActionButton from './ActionButton'
import Header from './Header'
import Form from './Form'

const Modal = ({ isOpen, setIsOpen }) => {

    const [form, setForm] = useState({
        title: '',
        description: '',
        priority: ''
    })

    const closeModal = () => {
        setIsOpen(false);
    }

    if (!isOpen) return null;

    return (
        <div className='fixed flex inset-0 z-50 items-center justify-center'>

            <div
                className='fixed w-full h-full bg-black opacity-70'
                onClick={() => closeModal()}>
                Overlay
            </div>

            <div className='relative flex flex-col justify-between items-center w-3/6 bg-white rounded-2xl z-10 p-5 animate-slideIn'>
                <Header
                    closeModal={closeModal} />

                <Form form={form} setForm={setForm}/>

                <ActionButton closeModal={closeModal}/>
            </div>

        </div>
    )
}

export default Modal