import Link from 'next/link'
import { Heart } from 'lucide-react'

const FavoriteButton = () => {
  return (
    <Link href={`/cart`} className="group relative">
      <Heart className="hover:text-shop-light-green hoverEffect h-5 w-5" />
      <span className="bg-shop-btn-dark-green absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full text-xs font-semibold text-white">
        0
      </span>
    </Link>
  )
}

export default FavoriteButton
