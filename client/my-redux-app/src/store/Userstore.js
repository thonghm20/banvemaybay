import { create } from 'zustand'
export const Userstore = create(() =>({
    token:null,
    current:null
}))