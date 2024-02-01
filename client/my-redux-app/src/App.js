import React from 'react'
import { Route, Routes } from 'react-router-dom'
import path from './ultils/path'
import { Datve, Home, Layoutpublic, Bancanbiet, Checkve, Search } from './pages/public'
import { Modal } from './component'
import { Appstore } from './store/Appstore'

export const App = () => {
  const {isShowModal} = Appstore()
    return (
    <div  >
      {isShowModal && <Modal />}
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<Layoutpublic/>} >
           <Route path={path.HOME} element={<Home/>} />
           <Route path={path.DAT_VE} element={<Datve/>} />
           <Route path={path.BAN_CAN_BIET} element={<Bancanbiet/>} />
           <Route path={path.CHECK_VE} element={<Checkve/>} />
           <Route path={path.SEARCH} element={<Search/>} />
        </Route>
      </Routes>
    </div>
  )
}
export default App