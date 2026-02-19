import Link from 'next/link'
import { cn } from '@/lib/utils'

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string
  spanDesign?: string
}) => {
  return (
    <Link href={'/'}>
      <h2
        className={cn(
          `text-shop-dark-green hover:text-shop-light-green hoverEffect group active:text-shop-light-green font-sans text-2xl font-black tracking-wider uppercase`,
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            `text-shop-light-green group-hover:text-shop-dark-green hoverEffect group-focus-visible:text-shop-dark-green group-active:text-shop-dark-green`,
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  )
}

export default Logo
