import React, { useState } from 'react'
import clsx from 'clsx'
const Login = () => {
  const [varriant, setVarriant] = useState('LOGIN')
  return (
    <div onClick={(e) => e.stopPropagation()}
     className="bg-white rounded-md text-lg px-6 w-[500px] items-center py-8 flex flex-col gap-6">
      <h1 className='text-3xl font-semibold tracking-tight'>XIN CHÀO</h1>
      <div className='flex w-full justify-start border-b cursor-pointer py-4 gap-6'>
        <span onClick={() => setVarriant('LOGIN')} className={clsx(varriant === 'LOGIN' && 'border-b-4 cursor-pointer border-main-700')}>Đặng nhập</span>
        <span  onClick={() => setVarriant('REGISTER')} className={clsx(varriant === 'REGISTER' && 'border-b-4 cursor-pointer border-main-700')}>Đăng ký</span>
      </div>
     </div>
  )
}

export default Login