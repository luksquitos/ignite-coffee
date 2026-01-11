import type { ReactNode } from 'react'
import type { Payment } from '@/schemas/payment-schema'
import { createContext, useContext, useState } from 'react'

interface IUserContext {
  userPayment: Payment | undefined
  setUserPayment: (data: Payment) => void
}

const UserPaymentContext = createContext<IUserContext | undefined>(undefined)

export function UserPaymentProvider({ children }: { children: ReactNode }) {
  const [userPayment, setUserPayment] = useState<Payment | undefined>(undefined)

  return (
    <UserPaymentContext.Provider value={{ userPayment, setUserPayment }}>
      {children}
    </UserPaymentContext.Provider>
  )
}

export function useUserPayment() {
  const context = useContext(UserPaymentContext)
  if (!context) {
    throw new Error('Context not wrapped in component')
  }

  return context
}
