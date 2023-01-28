import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import * as z from 'zod'
// import { createContext } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
type CreateTransactionInputs = z.infer<typeof newTransactionFormSchema>

type TransactionContextProps = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
}

type TransactionProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextProps)

export const TransactionsProvider = ({
  children,
}: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const search = query ? `&q=${query}` : ''
    const response = await api.get(
      `/transactions?_sort=createdAt&_order=desc${search}`,
    )
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function createTransaction(data: CreateTransactionInputs) {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
