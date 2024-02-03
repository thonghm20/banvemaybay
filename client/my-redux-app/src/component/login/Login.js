import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import {useForm} from 'react-hook-form'
import { Button, Inputform } from '..'
const Login = () => {
  const [varriant, setVarriant] = useState('LOGIN')
  const {register, formState:{errors},handleSubmit, reset} = useForm()
  useEffect(() =>{
    reset()
  },[varriant])
  const onSubmit = (data) =>{
  }
  return (
    <div onClick={(e) => e.stopPropagation()}
     className="bg-white rounded-md text-lg px-6 w-[500px] items-center py-8 flex flex-col gap-6">
      <h1 className='text-3xl font-semibold tracking-tight'>WELCOM</h1>
      <div className='flex w-full justify-start border-b cursor-pointer py-4 gap-6'>
        <span onClick={() => setVarriant('LOGIN')} className={clsx(varriant === 'LOGIN' && 'border-b-4 cursor-pointer border-main-700')}>Login</span>
        <span  onClick={() => setVarriant('REGISTER')} className={clsx(varriant === 'REGISTER' && 'border-b-4 cursor-pointer border-main-700')}>New account</span>
      </div>
      <focus className='flex flex-col px-4 gap-4 w-full'>
        <Inputform label='Phone number' errors={errors} inputClassname='rounded-md' placeholder='Type your mumber' type='number' register={register} id='phone' validate={{required:'must be filed'}}/>
        <Inputform label='Password' errors={errors} inputClassname='rounded-md' placeholder='Type your password' type='password' register={register} id='password' validate={{required:'must be filed'}}/>
        {varriant === 'REGISTER' && <Inputform label='Full name' errors={errors} inputClassname='rounded-md' placeholder='Type your full name'  register={register} id='name' validate={{required:'must be filed'}}/>}
        <Button handleOnClick={handleSubmit(onSubmit)} className='py-2 bg-main-700 my-6'>{varriant === 'LOGIN' ?'Sign in' : 'Register' }</Button>
        <span className='cursor-pointer text-main-500 hover:underline w-full text-center'>Forgot your password</span>
      </focus>
     </div>
  )
}

export default Login