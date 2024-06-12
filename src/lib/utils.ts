import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function obterPrimeiroNome(texto: string) {
  const palavras = texto.trim().split(/\s+/)
  return palavras[0]
}

export function formatarData(date: Date) {
  const dia = String(date.getDate()).padStart(2, "0")
  const mes = date.toLocaleString("default", { month: "short" })
  const ano = date.getFullYear()
  const horas = String(date.getHours()).padStart(2, "0")
  const minutos = String(date.getMinutes()).padStart(2, "0")

  return `${dia} ${mes} ${ano} ${horas}:${minutos}`
}
