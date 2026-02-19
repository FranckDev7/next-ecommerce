import { useEffect, useRef } from 'react'
// T : type générique utilisé en interne par les hooks pour typer un ref
// type générique : est un type paramétrable càd Au lieu de fixer le type à l’avance,
// on laisse le choix du type à celui qui utilise le code.

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClickedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickedOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickedOutside)
    }
  }, [callback])

  return ref
}
