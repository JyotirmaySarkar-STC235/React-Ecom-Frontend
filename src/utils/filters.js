const materialTypes = ['Cotton', 'Polyester', 'Silk', 'Linen', 'Wool', 'Denim', 'Leather', 'Nylon', 'Rayon', 'Acrylic', 'Viscose', 'Other']
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Other']
const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Other']
const brands = ['Duppy', 'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Other']
const categories = ['Fashion', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Other']
const subCategories = ['Clothing', 'SubCategory 1', 'SubCategory 2', 'SubCategory 3', 'SubCategory 4', 'Other']
const styles = ['Style 1', 'Style 2', 'Style 3', 'Style 4', 'Style 5', 'Other']
const patterns = ['Pattern 1', 'Pattern 2', 'Pattern 3', 'Pattern 4', 'Pattern 5', 'Other']
const fits = ['Fit 1', 'Fit 2', 'Fit 3', 'Fit 4', 'Fit 5', 'Other']
const occasions = ['Occasion 1', 'Occasion 2', 'Occasion 3', 'Occasion 4', 'Occasion 5', 'Other']
const seasons = ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Other']

export const FILTER_PRODUCT_KEYS = {
  Color: 'color',
  Size: 'size',
  Brand: 'brand',
  Category: 'category',
  SubCategory: 'subCategory',
}

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
]

export const filters = {
  filters: [
    { label: 'Material', values: materialTypes },
    { label: 'Color', values: colors },
    { label: 'Size', values: sizes },
    { label: 'Brand', values: brands },
    { label: 'Category', values: categories },
    { label: 'SubCategory', values: subCategories },
    { label: 'Style', values: styles },
    { label: 'Pattern', values: patterns },
    { label: 'Fit', values: fits },
    { label: 'Occasion', values: occasions },
    { label: 'Season', values: seasons },
  ],
}
