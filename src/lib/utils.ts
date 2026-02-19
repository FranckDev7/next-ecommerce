// clsx : fonction utilitaire pour conditionner des classes.
// ClassValue : Type TypeScript fourni par clsx representant tout ce que clsx peut accepter comme argument
// twMerge : Fonction de la lib tailwind-merge pour gérer les conflits de classes Tailwind.
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
