import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectOverlay } from '../store/slices/overlay'

const Overlay = () => {
  const isOpen = useSelector(selectOverlay)
  useEffect(() => {
    console.log('isOpen', isOpen)
  }, [isOpen])
  return (
    <div className={`overlay fixed h-screen w-screen bg-[#0c0b0b70] z-[999] top-0 left-0 pointer-events-none ${isOpen ? 'block' : 'hidden'}`}></div>
  )
}

export default Overlay