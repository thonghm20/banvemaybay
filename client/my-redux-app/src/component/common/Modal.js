import React from 'react'
import { Appstore } from '../../store/Appstore'

const Modal = () => {
  const {contentModal, setModal} = Appstore()
  
  return (
    <div onClick={() => setModal(false, null)} className="absolute z-[999] flex items-center justify-center h-screen w-screen bg-overlay-50 ">
      {contentModal}
    </div>
  )
}

export default Modal    