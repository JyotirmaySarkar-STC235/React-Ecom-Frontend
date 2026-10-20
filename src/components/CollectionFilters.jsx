import { useId } from 'react'
import Accordion from './Accordion'

const FiltersIcon = ({ className = 'size-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M4.5 6h1.25m0 0a1.75 1.75 0 1 0 3.5 0m-3.5 0a1.75 1.75 0 1 1 3.5 0M4.5 12h9.75m-4.5 0h9.75M4.5 18h1.25m0 0a1.75 1.75 0 1 0 3.5 0m-3.5 0a1.75 1.75 0 1 1 3.5 0m3.5 0H19.5" />
  </svg>
)

const CollectionFilters = ({
  filterGroups = [],
  selected = {},
  onChange,
  classes = '',
}) => {
  const headingId = useId()

  const toggleValue = (label, value) => {
    const current = selected[label] ?? []
    const next = current.includes(value)
      ? current.filter((entry) => entry !== value)
      : [...current, value]
    onChange?.({ ...selected, [label]: next })
  }

  return (
    <aside
      className={`collection-filters w-full shrink-0 rounded-xl bg-[#f8f4e8] p-4 md:w-64 lg:w-72 ${classes}`.trim()}
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="mb-3 flex items-center gap-2 text-sm font-bold tracking-wide text-gray-800 uppercase"
      >
        <FiltersIcon className="size-5 text-gray-700" />
        Filters
      </h2>

      <div className="flex flex-col">
        {filterGroups.map(({ label, values = [] }, index) => (
          <Accordion
            key={label}
            heading={label.toUpperCase()}
            defaultOpen={index < 2}
            classes="border-gray-300/70"
            body={
              <ul className="flex flex-col gap-1">
                {values.map((value) => {
                  const inputId = `${label}-${value}`.replace(/\s+/g, '-').toLowerCase()
                  const isChecked = (selected[label] ?? []).includes(value)
                  return (
                    <li key={value}>
                      <label
                        htmlFor={inputId}
                        className="flex cursor-pointer items-center gap-2.5 py-1 text-sm text-gray-800"
                      >
                        <input
                          id={inputId}
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleValue(label, value)}
                          className="size-4 shrink-0 rounded border-gray-400 text-gray-800 accent-gray-800"
                        />
                        <span>{value}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            }
          />
        ))}
      </div>
    </aside>
  )
}

export default CollectionFilters
