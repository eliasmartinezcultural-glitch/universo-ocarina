import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const protectedRoute = createRouteMatcher(['/dashboard(.*)', '/fabrica(.*)', '/pedidos(.*)', '/productos(.*)', '/referencias(.*)', '/investigacion(.*)', '/qa(.*)', '/entregas(.*)', '/reutilizar(.*)', '/configuracion(.*)', '/api(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (protectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
