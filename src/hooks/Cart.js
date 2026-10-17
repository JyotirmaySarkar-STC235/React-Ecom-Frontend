export async function addToCart(quantity) {
    await wait(1000)
  alert('addToCart ki function likhle logic banake', quantity)
}

export function removeFromCart(quantity) {
  alert('removeFromCart', quantity)
}

export function getCart() {
    alert('getCart')
}

export function clearCart() {
    alert('clearCart')
}

export async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}