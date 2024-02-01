import { create } from 'zustand'
export const Appstore = create((set) =>({
    isShowModal:false,
    contentModal:null,
    setModal: (isShowModal,contentModal) => set(() => ({isShowModal,contentModal}))
}))