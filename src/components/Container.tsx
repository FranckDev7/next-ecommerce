import React from 'react'
import { cn } from '@/lib/utils'

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(className, 'mx-auto max-w-screen-xl px-4')}>
      {children}
    </div>
  )
}

export default Container
