import React, { useEffect } from 'react'

const PriorityRadio = ({form, setForm}) => {

    useEffect(() => setForm({...form, priority: 'Normal'}), [])

    const onClick = (e) => {
        setForm({...form, priority: e.target.value})
    }

    return (
        <div className='flex p-5 justify-center mt-10'>
            <div className='flex h-full overflow-hidden rounded-2xl'>
                <button type='button' className={`${form.priority === 'Low'? 'bg-gray-500': 'bg-gray-200'} p-5 w-36 text-2xl font-semibold text-white transition-colors duration-200 hover:bg-gray-500`} value='Low'
                onClick={(e) => onClick(e)}>
                    Low
                </button>
                <button type='button' className={`${form.priority === 'Normal'? 'bg-blue-500': 'bg-blue-200'} p-5 w-36 text-2xl font-semibold text-white transition-colors duration-200 hover:bg-blue-500`} value='Normal'
                onClick={(e) => onClick(e)}>
                    Normal
                </button>
                <button type='button' className={`${form.priority === 'High'? 'bg-red-500': 'bg-red-200'} p-5 w-36 text-2xl font-semibold text-white transition-colors duration-200 hover:bg-red-500`} value='High'
                onClick={(e) => onClick(e)}>
                    High
                </button>
            </div>
        </div>
    )
}

export default PriorityRadio