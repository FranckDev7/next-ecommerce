import Container from '@/components/Container'
import Logo from '@/components/Logo'
import HeaderMenu from '@/components/HeaderMenu'
import SearchBar from '@/components/SearchBar'
import CartIcon from '@/components/CartIcon'
import FavoriteButton from '@/components/FavoriteButton'
import SignIn from '@/components/SignIn'
import MobileMenu from '@/components/MobileMenu'
import { currentUser } from '@clerk/nextjs/server'

import { SignedIn, UserButton } from '@clerk/nextjs'

const Header = async () => {
  const user = await currentUser()

  return (
    <header className="border-b border-b-black/20 bg-white py-5">
      <Container className="text-light-color flex items-center justify-between">
        <div className="flex w-auto items-center justify-start gap-2.5 md:w-1/3 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="flex w-auto items-center justify-end gap-5 md:w-1/3">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* Show the sign-in and sign-up buttons when the user is signed out */}
          {!user && <SignIn />}
        </div>
      </Container>
    </header>
  )
}

export default Header
