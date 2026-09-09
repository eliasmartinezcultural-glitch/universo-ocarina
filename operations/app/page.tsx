import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
  const user = await currentUser()
  if (user) redirect('/dashboard')
  return (
    <main className="shell">
      <div className="hero">
        <div className="eyebrow">OCARINA · CENTRO DE OPERACIONES</div>
        <h1>La fábrica<br />empieza acá.</h1>
        <p className="muted">Espacio privado para el equipo Ocarina. La operación, los productos, la investigación, el control de calidad y las entregas viven separados del catálogo público.</p>
        <p><a className="card" href="/sign-in"><strong>Ingresar al centro →</strong><span className="muted">Acceso exclusivo para el equipo autorizado.</span></a></p>
      </div>
    </main>
  )
}
