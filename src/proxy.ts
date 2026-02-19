// Importes le middleware officiel Clerk qui s'execute avant qu' :
// - une page soit rendue
// - une route API soit appelée
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

// configuration du matcher qui dit à Next sur quelles URLs ce middleware doit s’exécuter ?”
export const config = {
  matcher: [
    // Premier matcher : exclure les fichiers statiques
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
