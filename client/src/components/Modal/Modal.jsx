import React, { useState, useEffect } from 'react'
import ActionButton from './ActionButton'
import Header from './Header'
import Form from './Form'

const Modal = ({ taskToEdit, isOpen, setIsOpen, setTasks, editMode, setEditMode, addToast, editToast, setSelected }) => {

    const defaultForm = {
        title: '',
        description: '',
        priority: 'Normal'
    }

    const [form, setForm] = useState()

    useEffect(() => {
        editMode? setForm(taskToEdit) : setForm(defaultForm)
    },[editMode])

    const closeModal = () => {
        editMode? setForm(taskToEdit) : setForm(defaultForm)
        setEditMode(false)
        setIsOpen(false);
    }

    if (!isOpen) return null;

    return (
        <div className='fixed flex inset-0 z-50 items-center justify-center'>

            <div
                className='fixed inset-0 w-full h-full bg-black opacity-70'
                onClick={() => closeModal()}>
                Overlay
            </div>

            <div className='relative flex flex-col justify-between items-center md:w-3/6 max-w-3xl w-full bg-white rounded-2xl z-10 p-5 animate-slideIn'>
                <Header
                    closeModal={closeModal}
                    editMode={editMode} />

                <Form
                    taskToEdit={taskToEdit}
                    form={form}
                    setForm={setForm}
                    editMode={editMode} />

                <ActionButton
                    form={form}
                    closeModal={closeModal}
                    setTasks={setTasks}
                    editMode={editMode}
                    addToast={addToast}
                    editToast={editToast}
                    setSelected={setSelected} />
            </div>

        </div>
    )
}

export default Modal