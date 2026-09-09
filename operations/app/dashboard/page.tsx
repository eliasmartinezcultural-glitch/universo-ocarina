import Link from 'next/link'
import { requireOcarinaUser, seatConfiguration } from '../../lib/access'

const modules = [
  ['⚡','Fábrica','Crear y adaptar productos','/fabrica'],
  ['📋','Pedidos','Seguimiento de producción','/pedidos'],
  ['🎨','Productos','Catálogo maestro interno','/productos'],
  ['📷','Referencias','Biblioteca visual autorizada','/referencias'],
  ['🔎','Investigación','Fuentes y territorio','/investigacion'],
  ['✓','QA','Control antes de entregar','/qa'],
  ['📤','Entregas','Salidas PDF + JPG','/entregas'],
  ['♻️','Reutilizar','Convertir trabajo existente','/reutilizar'],
]

export default async function Dashboard() {
  const user = await requireOcarinaUser()
  const seats = seatConfiguration()
  return <main>
    <header className="topbar"><div><div className="eyebrow">OCARINA · OPERACIONES</div><strong>Centro privado</strong></div><div className="muted">{user.name} · {user.email}</div></header>
    <section className="hero">
      <div className="eyebrow">CABINA OPERATIVA</div>
      <h1>Hoy Ocarina<br />produce.</h1>
      <p className="muted">Este es el escritorio del equipo. Entrás, ves qué necesita atención y llevás cada trabajo hasta una salida lista para entregar.</p>
    </section>
    <section className="priority"><div><div className="eyebrow">PRÓXIMA ACCIÓN</div><h2>Empezá por pedidos.</h2><p className="muted">Cada trabajo debe tener producto, responsable, estado y próxima acción. Después pasa a fabricación y QA.</p></div><Link className="button" href="/pedidos">Abrir cola de pedidos →</Link></section>
    <section className="section-head"><div><div className="eyebrow">MESA DE TRABAJO</div><h2>¿Qué necesitás hacer?</h2></div></section>
    <section className="grid">{modules.map(([icon,name,desc,href]) => <Link className="card" href={href} key={name}><span style={{fontSize:24}}>{icon}</span><strong>{name}</strong><span className="muted">{desc}</span></Link>)}</section>
    <section className="grid" style={{marginTop:12}}>
      <div className="card"><div className="metric">{seats.configuredSeats}/{seats.maxSeats}</div><strong>Plazas configuradas</strong><span className="muted">Máximo cuatro cuentas autorizadas.</span></div>
      <div className="card"><div className="metric">8</div><strong>Pasos de workflow</strong><span className="muted">Pedido → brief → fabricación → QA → master → salida → entrega → reutilización.</span></div>
      <div className="card"><div className="metric">PDF + JPG</div><strong>Salida comercial</strong><span className="muted">Los masters internos quedan fuera de la entrega.</span></div>
      <div className="card"><div className="metric">0</div><strong>Acceso cliente</strong><span className="muted">El comprador no entra al centro de operaciones.</span></div>
    </section>
  </main>
}
