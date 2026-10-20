import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDownIcon } from '../utils/icons'
import { SORT_OPTIONS } from '../utils/filters'

const SortIcon = ({ className = 'size-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h10.5m-10.5 5.25h6" />
  </svg>
)

const SortPanel = ({ value = 'featured', onChange, options = SORT_OPTIONS, classes = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const listId = useId()
  const selected = options.find((option) => option.value === value) ?? options[0]

  useEffect(() => {
    if (!isOpen) return

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const handleSelect = (nextValue) => {
    onChange?.(nextValue)
    setIsOpen(false)
  }

  return (
    <div ref={rootRef} className={`relative ${classes}`.trim()}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-[#f8f4e8] px-3 py-2 text-xs font-bold tracking-wide text-gray-800 uppercase"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <SortIcon className="size-4" />
        Sort
        <ChevronDownIcon className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Sort products"
          className="absolute top-full right-0 z-10 mt-1 min-w-48 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-md"
        >
          {options.map((option) => {
            const isSelected = option.value === selected?.value
            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`block w-full px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${
                    isSelected ? 'font-semibold text-gray-900' : 'text-gray-700'
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SortPanel
