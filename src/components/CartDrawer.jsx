import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartCount,
  selectCartItems,
  selectDrawerOpen,
  setDrawerOpen,
} from '../store/slices/cartSlice'
import { CloseIcon } from '../utils/icons'
import CartDrawerProductCard from './CartDrawerProductCard'
import { setOverlay } from '../store/slices/overlay'

const CartDrawer = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectDrawerOpen)
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const onClose = () => {
    dispatch(setDrawerOpen(false))
    dispatch(setOverlay(false))
  }

  return (
    <section
      id="cart-drawer"
      className={`fixed top-0 right-0 z-[2] h-screen w-full overflow-y-auto bg-white p-4 transition-all duration-300 md:w-[500px] ${!isOpen && 'translate-x-full'} ${isOpen && 'drawer-open'}`}
    >
      <div className="cart-drawer-header mb-4 flex items-center justify-between">
        <h2 className="text-sm font-bold tracking-wide uppercase">
          Cart [{count === 1 ? '1 item' : `${count} items`}]
        </h2>
        <button
          type="button"
          className="p-1 text-gray-800 hover:text-red-500"
          aria-label="Close cart"
          onClick={onClose}
        >
          <CloseIcon className="size-6" />
        </button>
      </div>

      {items.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <li key={item.id}>
              <CartDrawerProductCard product={item} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default CartDrawer
