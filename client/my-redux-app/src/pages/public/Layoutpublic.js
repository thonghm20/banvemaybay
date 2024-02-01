import React from 'react'
import { Navigation, Topheader } from '../../component'
import { Outlet } from 'react-router-dom'
import withBase from '../../hocs/withBase'
import clsx from 'clsx'

const Layoutpublic = ({location}) => {
  return (
    <main >
        <Topheader/>
        <Navigation/>
        <div className={clsx(location.pathname === '/' ? 'pt-0' : 'pt-[232px]')}>
            <Outlet/>
        </div>
    </main>
  )
}

export default withBase(Layoutpublic)