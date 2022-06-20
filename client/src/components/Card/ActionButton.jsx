import React from 'react'
import axios from 'axios'

const ActionButton = ({task, setTaskToEdit, setTasks, setIsOpen, setEditMode, toast}) => {

    const deleteTask = async () => {
        await axios.delete("/api/tasks/" + task.id)
        const res = await axios.get("/api/tasks")
        setTasks(res.data)
        toast()
    }

    const editTask = () => {
        setTaskToEdit(task)
        setEditMode(true)
        setIsOpen(true)
    }

    return (
        <div className='flex justify-between gap-5'>

            <button type='button' className='w-5/6 h-3/6 bg-teal-500 text-white text-2xl p-5 rounded-xl hover:scale-105 hover:drop-shadow-xl transition-all'
            onClick={() => editTask()}>
                Edit
            </button>

            <button type='button' className='w-5/6 h-3/6 bg-red-400 text-white text-2xl p-5 rounded-xl hover:scale-105 hover:drop-shadow-xl transition-all'
            onClick={() => deleteTask()}>
                Delete
            </button>
        </div>
    )
}

export default ActionButton