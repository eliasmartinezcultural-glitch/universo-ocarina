import { requireOcarinaUser } from '../../lib/access'
import { UserButton } from '@clerk/nextjs'

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
  let user
  try {
    user = await requireOcarinaUser()
  } catch (error) {
    if (error instanceof Error && error.message === 'AUTH_REQUIRED') {
      return <main className="shell"><p>Sesión requerida. <a href="/sign-in">Ingresar →</a></p></main>
    }
    return <main className="shell"><div className="eyebrow">OCARINA · ACCESO DENEGADO</div><h1>Este centro es privado.</h1><p className="muted">La cuenta autenticada no pertenece a las cuatro plazas autorizadas.</p></main>
  }
  return <div className="shell"><header className="bar"><div><div className="eyebrow">OCARINA · OPERACIONES</div><strong>Centro privado</strong></div><div style={{display:'flex',gap:12,alignItems:'center'}}><span className="badge">{user.name}</span><UserButton /></div></header>{children}</div>
}
