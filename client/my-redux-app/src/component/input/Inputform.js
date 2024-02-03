import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Inputform = ({stye = 'form-input',containerClassname,label,id,type='text',register,errors,inputClassname,validate, placeholder  }) => {
  return (
    <div className={twMerge(clsx('flex flex-col gap-2 w-full'))}>
        {label && <label className='font-medium text-main-700' htmlFor={id}>{label}</label>}
        <input type={type} id={id} className={twMerge(clsx(stye,inputClassname))}
        {...register(id,validate)}
        placeholder={placeholder} 
        ></input>
        {errors[id] && <small className='text-red-500'>{errors[id]?.message}</small>}
    </div>
  )
}

export default Inputform