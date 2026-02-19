import { SignInButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
    <SignInButton>
      <button className="hover:text-dark-color text-light-color text-sm font-semibold hover:cursor-pointer">
        Login
      </button>
    </SignInButton>
  )
}

export default SignIn
