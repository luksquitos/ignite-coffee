// src/schemas/address-schema.ts
import { z } from 'zod'

export const addressSchema = z.object({
  cep: z.string().min(8, 'CEP precisa ter 8 dígitos.').regex(/^\d{5}-\d{3}$/),
  rua: z.string().min(1, 'A rua é obrigatória.'),
  numero: z.string().min(1, 'O número é obrigatório.'),
  complemento: z.string().optional(),
  bairro: z.string().min(1, 'O bairro é obrigatório.'),
  cidade: z.string().min(1, 'A cidade é obrigatória.'),
  uf: z.string().min(2, 'O UF precisa ter 2 letras.').max(2, 'O UF precisa ter 2 letras.'),
  cartao: z.enum(['credit', 'debit', 'money'], { error: 'Por favor, selecione um método de pagamento' }),
})

export type AddressFormData = z.infer<typeof addressSchema>
