import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDrawerOpen, setDrawerOpen } from '../store/slices/cartSlice'
import {setProductPopupOpen} from '../store/slices/productPopup'
import {selectOverlay, setOverlay} from '../store/slices/overlay'

const Overlay = () => {
  const isOpen = useSelector(selectOverlay);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.toggleAttribute('data-overlay-open', isOpen)
    return () => document.body.removeAttribute('data-overlay-open')
  }, [isOpen])

  const onClick = () => {
    dispatch(setProductPopupOpen(false))
    dispatch(setDrawerOpen(false))
    dispatch(setOverlay(false))
  }

  return (
    <div
      id="overlay"
      onClick={onClick}
      className={`overlay fixed top-0 left-0 z-[1] h-screen w-screen bg-[#0c0b0b70] ${isOpen ? 'block' : 'hidden'}`}
    />
  )
}

export default Overlay
