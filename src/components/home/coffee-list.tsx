import coffeeData from '../../mocks/coffees.json'
import { CoffeeCard } from './coffee-card'

export function CoffeeList() {
  return (
    <div className="centered-box">
      <p className="font-baloo font-extrabold text-3xl text-base-subtitle">Nossos cafés</p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {
          coffeeData.map((coffee) => {
            return (<CoffeeCard key={coffee.id} coffee={coffee} />)
          })
        }

      </section>
    </div>
  )
}
