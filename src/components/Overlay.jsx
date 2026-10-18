import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDrawerOpen, setDrawerOpen } from '../store/slices/cartSlice'

const Overlay = () => {
  const isOpen = useSelector(selectDrawerOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.toggleAttribute('data-overlay-open', isOpen)
    return () => document.body.removeAttribute('data-overlay-open')
  }, [isOpen])

  return (
    <div
      id="overlay"
      onClick={() => dispatch(setDrawerOpen(false))}
      className={`overlay fixed top-0 left-0 z-[1] h-screen w-screen bg-[#0c0b0b70] ${isOpen ? 'block' : 'hidden'}`}
    />
  )
}

export default Overlay
