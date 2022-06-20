import React from 'react'
import ActionButton from './ActionButton';
import { IoIosArrowDown } from 'react-icons/io'

const Card = ({ task, selected, toggle, setTaskToEdit, setTasks, setIsOpen, setEditMode, toast }) => {

    let priorityColor = '';
    if (task.priority === 'High') priorityColor = '#ef4444'
    if (task.priority === 'Normal') priorityColor = '#3b82f6'
    if (task.priority === 'Low') priorityColor = '#6b7280'

    return (
        <div type='button' className='relative w-full bg-white drop-shadow-xl rounded-xl p-5 overflow-hidden'>
            <div className='absolute w-3 h-full top-0 left-0' style={{ backgroundColor: `${priorityColor}` }}></div>
            <div>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-24 cursor-pointer opacity-0 z-20' 
                onClick={() => toggle(task.id)}
                checked={selected === task.id? true : false}/>

                <h1 className='text-3xl font-bold py-3 px-8'>
                    {task.title}
                </h1>

                <span className='absolute flex items-center right-0 top-0 text-3xl p-10 peer-checked:rotate-180 transition-transform duration-500 ease-out delay-100'>
                    <IoIosArrowDown />
                </span>

                <div className='overflow-hidden max-h-0 peer-checked:max-h-[800px] transition-all duration-500 ease-in-out'>
                    <div className='flex flex-col p-5 gap-10'>

                        <span className='text-2xl font-thin text-start whitespace-pre-line'>
                            {task.description}
                        </span>

                        <span className='text-xl py-5 px-7 rounded-full w-fit text-white'
                            style={{ backgroundColor: `${priorityColor}` }}>
                            {task.priority} priority
                        </span>

                        <ActionButton
                            task={task}
                            setTaskToEdit={setTaskToEdit}
                            setTasks={setTasks}
                            setIsOpen={setIsOpen}
                            setEditMode={setEditMode}
                            toast={toast}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card