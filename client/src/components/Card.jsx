import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'

const Card = ({ task, index, selected, toggle }) => {

    let priorityColor = '';
    if (task.priority === 'High') priorityColor = '#ef4444'
    if (task.priority === 'Normal') priorityColor = '#3b82f6'
    if (task.priority === 'Low') priorityColor = '#6b7280'

    return (
        <div type='button' className='relative w-full bg-white drop-shadow-xl rounded-xl p-5 overflow-hidden'>
            <div className='absolute w-3 h-full top-0 left-0' style={{ backgroundColor: `${priorityColor}` }}></div>
            <div>
                <button type='button' className='h-full w-full flex justify-between p-5 cursor-pointer'
                    onClick={() => toggle(index)}>
                    <span className='text-3xl font-bold'>
                        {task.title}
                    </span>
                    <span className={`text-2xl w-10 aspect-square flex justify-center items-center ${selected === index ? 'animate-rotate-forward rotate-180' : 'animate-rotate-reverse'}`}>
                        <IoIosArrowDown />
                    </span>
                </button>

                <div className={`${selected === index ? 'h-fit animate-open' : 'h-0 animate-open'} overflow-hidden`}>
                    <div className='flex flex-col p-5 gap-10'>

                        <span className='text-xl font-thin text-start whitespace-pre-line'>
                            {task.description}
                        </span>
                        
                        <span className='text-xl py-5 px-7 rounded-full w-fit text-white'
                            style={{ backgroundColor: `${priorityColor}` }}>
                            {task.priority} priority
                        </span>

                        <div className='flex justify-between gap-5'>

                            <button type='button' className='w-5/6 h-3/6 bg-teal-500 text-white text-2xl p-5 rounded-xl hover:scale-105 hover:drop-shadow-xl transition-all'>
                                Edit
                            </button>

                            <button type='button' className='w-5/6 h-3/6 bg-red-400 text-white text-2xl p-5 rounded-xl hover:scale-105 hover:drop-shadow-xl transition-all'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card