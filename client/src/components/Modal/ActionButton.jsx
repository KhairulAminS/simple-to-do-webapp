import React from 'react'
import axios from 'axios'

const ActionButton = ({ form, editMode, closeModal, setTasks, addToast, editToast, setSelected }) => {

    const submitForm = async () => {

        if (editMode) {
            const res = await axios.put("/api/tasks/" + form.id, {
                title: form.title,
                description: form.description,
                priority: form.priority
            })
        } else {
            const res = await axios.post("/api/tasks", {
                title: form.title,
                description: form.description,
                priority: form.priority
            })
        }

        setSelected(null)

        const res = await axios.get("/api/tasks")
        setTasks(res.data)
        
        editMode? editToast() : addToast()
        
        closeModal()
    }

    return (
        <div className='flex w-4/6 gap-10 justify-between my-10'>
            <button type='button' className='bg-red-400 p-5 rounded-2xl text-3xl text-red-800 font-semibold w-full hover:scale-110 hover:drop-shadow-2xl transition-all'
                onClick={() => closeModal()}>
                Cancel
            </button>

            <button type='button' className='bg-green-400 p-5 rounded-2xl text-3xl text-green-800 font-semibold w-full hover:scale-110 hover:drop-shadow-2xl transition-all'
                onClick={() => submitForm()}>
                Submit
            </button>
        </div>
    )
}

export default ActionButton