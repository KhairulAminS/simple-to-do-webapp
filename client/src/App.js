import React, { useState, useEffect } from 'react'
import { Card, DeleteTask, Modal, TaskCreated, EditTask } from './components/index'
import { AiFillPlusCircle } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const App = () => {

    const [selected, setSelected] = useState(null)
    const [tasks, setTasks] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState({})

    const toggle = (id) => {
        if (selected === id) {
            return setSelected(null)
        }
        setSelected(id)
    }

    const [isOpen, setIsOpen] = useState(false)

    const addTask = () => {
        setEditMode(false)
        setIsOpen(true)
    }

    const addToast = () => toast.custom((t) => <TaskCreated toast={t} />, { duration: 2000 })

    const deleteToast = () => toast.custom((t) => <DeleteTask toast={t} />, { duration: 2000 })

    const editToast = () => toast.custom((t) => <EditTask toast={t} />, { duration: 2000 })

    useEffect(async () => {
        try {
            const res = await axios.get("/api/tasks")
            setTasks(res.data)
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center'>
            <div className='flex flex-col w-5/6 h-5/6 max-w-4xl justify-center items-center'>
                <h1 className='text-center text-4xl font-bold mb-10'>
                    Simple To Do App
                </h1>
                <div className='flex flex-col w-full h-5/6 bg-white drop-shadow-2xl rounded-2xl relative p-5 justify-between'>

                    <div className='w-full h-5/6 space-y-5 overflow-y-auto p-5 scrollbar'>
                        {tasks.map((task) => (
                            <Card
                                key={task.id}
                                task={task}
                                selected={selected}
                                setTaskToEdit={setTaskToEdit}
                                toggle={toggle}
                                setTasks={setTasks}
                                setIsOpen={setIsOpen}
                                setEditMode={setEditMode}
                                toast={deleteToast} />
                        ))}
                    </div>

                    <button type='button' className='text-8xl text-orange-400 self-end p-5 hover:scale-110 hover:drop-shadow-2xl transition-all'
                        onClick={() => addTask()}>
                        <AiFillPlusCircle />
                    </button>
                </div>

                <Modal
                    taskToEdit={taskToEdit}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setTasks={setTasks}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    addToast={addToast}
                    editToast={editToast}
                    setSelected={setSelected}/>

                <Toaster />
            </div>
        </div>
    )
}

export default App