export interface Installment {
  value: string
  total: string
  cashback?: {
    percent: string
    value: string
  }
  better?: string
}
