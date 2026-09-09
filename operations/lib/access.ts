import { currentUser } from '@clerk/nextjs/server'

const MAX_SEATS = 4

export type OcarinaUser = {
  id: string
  name: string
  email: string
}

function allowedEmails() {
  return (process.env.OCARINA_ALLOWED_EMAILS || '')
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, MAX_SEATS)
}

export async function requireOcarinaUser(): Promise<OcarinaUser> {
  const user = await currentUser()
  if (!user) throw new Error('AUTH_REQUIRED')

  const email = user.emailAddresses.find((item) => item.id === user.primaryEmailAddressId)?.emailAddress?.toLowerCase()
  if (!email || !allowedEmails().includes(email)) throw new Error('OCARINA_ACCESS_DENIED')

  return {
    id: user.id,
    name: [user.firstName, user.lastName].filter(Boolean).join(' ') || email,
    email,
  }
}

export function seatConfiguration() {
  const configured = allowedEmails()
  return { maxSeats: MAX_SEATS, configuredSeats: configured.length }
}
