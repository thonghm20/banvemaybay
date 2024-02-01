import React from 'react'

const Home = () => {
  return (
    <div className='bg-white w-full'>
        <div className='w-full h-fit relative'>
            <img src='/1.jpg' alt='banner'></img>
            <div className='absolute inset-0 flex flex-col gap-6 pt-12 items-center justify-center '>
              <h1 className='text-5xl text-white'></h1>
              <span className='text-white flex flex-col items-center text-lg'>
                <span>
                </span>
              <span>
              </span>
              </span>
          </div>
        </div>
      
        <div className='w-main mx-auto'>
                content
        </div>
    </div>
  )
}

export default Home