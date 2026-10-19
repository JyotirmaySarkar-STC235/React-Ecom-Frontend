import { useDispatch, useSelector } from 'react-redux'
import { selectProductPopupOpen, setProductPopupOpen, selectProduct } from '../store/slices/productPopup'
import { setOverlay } from '../store/slices/overlay'

const ProductDetailsPopup = () => {
    const isOpen = useSelector(selectProductPopupOpen)
    const product = useSelector(selectProduct)
    const dispatch = useDispatch()
    const onClose = () => {
         dispatch(setProductPopupOpen(false))
         dispatch(setOverlay(false))
    }
  
  return (
    <div>ProductDetailsPopup</div>
  )
}

export default ProductDetailsPopup