const CATEGORIES = [
  { label: 'Fashion', children: ['Men', 'Women', 'Kids', 'Boys', 'Girls'] },
  { label: 'Bags', children: ['Handbags', 'Backpacks', 'Wallets', 'Travel Bags'] },
  { label: 'Footwear', children: ['Men', 'Women', 'Kids'] },
  { label: 'Groceries' },
  { label: 'Wellness' },
  { label: 'Jewellery', children: ['Necklaces', 'Earrings', 'Rings', 'Bracelets'] },
  { label: 'Beauty' },
  { label: 'Electronics', children: ['Mobiles', 'Laptops', 'Headphones', 'Smart Watches'] },
]

const toSlug = (text) => text.toLowerCase().replaceAll(' ', '-')

export const CATEGORY_LINKS = CATEGORIES.map(({ label, children = [] }) => {
  const slug = toSlug(label)
  const to = `/category/${slug}`
  return {
    to,
    label,
    image: `/category-${label.toLowerCase()}.png`,
    children: children.map((child) => ({ to: `${to}/${toSlug(child)}`, label: child })),
  }
})
