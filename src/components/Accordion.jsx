import { ChevronDownIcon } from '../utils/icons'

const Accordion = ({ heading, body, defaultOpen = false, classes = '' }) => {
  if (heading == null && body == null) return null

  return (
    <details
      className={`accordion group border-b border-gray-300 ${classes}`.trim()}
      defaultOpen={defaultOpen}
    >
      <summary className="accordion-heading flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-semibold text-gray-900 md:text-base [&::-webkit-details-marker]:hidden">
        <span>{heading}</span>
        <ChevronDownIcon className="size-5 shrink-0 text-gray-700 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="accordion-body pb-3 text-sm leading-relaxed text-gray-700 md:text-base">
        {body}
      </div>
    </details>
  )
}

export default Accordion
