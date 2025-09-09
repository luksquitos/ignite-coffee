import type { ICoffeeCard } from '../../@types/coffee-card-type'
import { useState } from 'react'
import coffeeData from '../../mocks/coffees.json'
import { CoffeeCard } from './coffee-card'

export function CoffeeList() {
  const [coffees, setCoffees] = useState<ICoffeeCard[]>(coffeeData)

  return (
    // FIXME Por algum motivo a margem não está funcionando
    <div className="mt-16 border centered-box">
      <p className="font-baloo font-extrabold text-3xl text-base-subtitle">Nossos cafés</p>
      <section className="grid grid-cols-4 gap-8 mt-14">
        {
          coffees.map((coffee) => {
            return (
              <CoffeeCard
                id={coffee.id}
                name={coffee.name}
                categories={coffee.categories}
                description={coffee.description}
                price={coffee.price}
                image={coffee.image}
              />
            )
          })
        }

      </section>
    </div>
  )
}
