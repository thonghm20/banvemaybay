import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Button from '../common/Button'
import clsx from 'clsx'
import { navigations } from '../../ultils/containt'
import withBase from '../../hocs/withBase'
import { twMerge } from 'tailwind-merge'
import { Userstore } from '../../store/Userstore'
import { Appstore } from '../../store/Appstore'
import { Login } from '..'
const Navigation = ({location,navigate}) => {
  const {token } = Userstore()
  const {setModal } = Appstore()
  return (
    <div className={twMerge(clsx(' w-full bg-transparent  z-50 flex items-center justify-center mt-[0px] top-[85px]',
    location.pathname !== '/' && 'bg-white'
    ))}>
      
      <div className={clsx('flex items-center bg-yellow-500 w-[3000px] justify-center text-main-100 gap-8',location.pathname === '/' ? 'text-main-100':'text-white')}>
      <Link to='/'>
        <img src='/2.png' alt='logo' className='w-[120px] object-contain'></img>
      </Link>
        {navigations.map(el =>(
          <NavLink className={({isActive}) => clsx(
            isActive && ' font-medium',location.pathname === '/' ? 'text-white':'text-white'
          )

          } key={el.id} to={el.path}>
            {el.text}
          </NavLink>
        ))}
       {!token ? <Button className={twMerge(clsx(location.pathname ==='/' &&'bg-transparent border-main-100 border'))
      }
      handleOnClick={() => setModal(true,<Login/>)}
      >
          Đăng nhập
        </Button>: 
          <Button className={twMerge(clsx(location.pathname ==='/' &&'bg-transparent border-main-100 border'))}>
          Add list
        </Button>}
      </div>
    </div>
  )
}

export default withBase(Navigation)