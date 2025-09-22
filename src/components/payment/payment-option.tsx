import type { Icon } from '@phosphor-icons/react'

interface PaymentOptionProps {
  icon: Icon
  name: string
  onSelect: () => void
  isActive: boolean
}

export function PaymentOption({ icon: IconComponent, name, onSelect, isActive }: PaymentOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex border items-center h-12.5 flex-1 gap-3 rounded-md p-4 transition-colors hover:cursor-pointer ${isActive ? 'bg-purple-light border-1 border-purple' : 'bg-base-button hover:bg-base-hover '}`}
    >
      <IconComponent className="size-4 text-purple" weight="regular" />
      <p className="text-base-text text-xs text-nowrap">{name.toUpperCase()}</p>
    </button>
  )
}
