import { useState } from 'react'
import coffeeData from '../../mocks/coffees.json'

export function CoffeeList() {
  const [coffees, setCoffees] = useState(coffeeData)

  return (
    <div className="mt-16 border centered-box">
      <p className="font-baloo font-extrabold text-3xl">Nossos cafés</p>
    </div>
  )
}
