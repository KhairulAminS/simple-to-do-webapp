import React, { useState } from 'react'
import Card from './components/Card'
import { data } from './dummyData'
import { AiFillPlusCircle } from 'react-icons/ai'
import Modal from './components/Modal/Modal'

const App = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex w-screen h-screen justify-center items-center'>
            <div className='flex flex-col w-5/6 max-w-4xl h-5/6 bg-white drop-shadow-2xl rounded-2xl relative p-5 justify-between'>
                <div className='w-full h-5/6 space-y-5 overflow-y-auto p-5 scrollbar'>
                    {data.map((task, i) => (
                        <Card
                        task={task}
                        index={i}
                        selected={selected}
                        toggle={toggle}/>
                    ))}
                </div>
                <button type='button' className='text-8xl text-orange-400 self-end p-5 hover:scale-110 hover:drop-shadow-2xl transition-all'
                onClick={() => setIsOpen(true)}>
                    <AiFillPlusCircle/>
                </button>
            </div>
            <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}/>
        </div>
    )
}

export default App