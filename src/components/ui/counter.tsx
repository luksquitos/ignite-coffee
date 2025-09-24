import type { Dispatch, SetStateAction } from 'react'
import { MinusIcon, PlusIcon } from '@phosphor-icons/react'

interface CounterProps {
  value: number
  setValue: Dispatch<SetStateAction<number>>
  className: string
}

export function Counter({ value, setValue, className }: CounterProps) {
  function add() {
    const maxValue = 10

    if (value + 1 >= maxValue) {
      return
    }

    setValue(prev => prev + 1)
  }

  function remove() {
    const minValue = 0

    if (value - 1 <= minValue) {
      return
    }

    setValue(prev => prev - 1)
  }

  return (
    <div className={`px-2 centered gap-2 bg-base-button rounded-md ${className}`}>
      <button type="button" onClick={remove}>
        <MinusIcon weight="bold" className="text-purple hover:text-purple-dark size-3.5" />
      </button>
      <p>{value}</p>
      <button type="button" onClick={add}>
        <PlusIcon weight="bold" className="text-purple hover:text-purple-dark size-3.5" />
      </button>
    </div>
  )
}
