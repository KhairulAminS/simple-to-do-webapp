import React from 'react'
import PriorityRadio from './PriorityRadio'

const Form = ({ form, setForm }) => {

    const setTitle = (e) => {
        setForm({ ...form, title: e.target.value })
    }

    const setDescription = (e) => {
        setForm({ ...form, description: e.target.value })
    }

    return (
        <form className='flex flex-col w-full p-8 gap-2 '>

            <label className='text-2xl font-bold'>
                Title
            </label>
            <input className=' text-3xl outline-none border-b-4 border-gray-300' required
            onChange={(e) => setTitle(e)}/>

            <label className='text-2xl font-bold mt-5'>
                Description
            </label>
            <textarea className='w-full whitespace-pre-line border-b-4 border-gray-300 outline-none text-3xl resize-y max-h-44 h-10'
            onChange={(e) => setDescription(e)}/>

            <PriorityRadio form={form} setForm={setForm} />

        </form>
    )
}

export default Form