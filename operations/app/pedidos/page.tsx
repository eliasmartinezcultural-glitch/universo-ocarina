import Link from 'next/link'
import { requireOcarinaUser } from '../../lib/access'

const stages = [
  ['REQUESTED','Solicitados','Entradas nuevas que todavía necesitan revisión.'],
  ['QUOTED','Cotizados','Pedido definido y con propuesta económica.'],
  ['CONFIRMED','Confirmados','Trabajo aceptado y listo para producir.'],
  ['IN_PRODUCTION','En producción','La fábrica está trabajando en la pieza.'],
  ['QA','En QA','La salida espera control de calidad.'],
  ['READY','Listos','Producto aprobado y preparado para entregar.'],
]

export default async function Pedidos() {
  const user = await requireOcarinaUser()
  return <main>
    <div className="bar"><div><div className="eyebrow">OCARINA · PEDIDOS</div><strong>Cola de producción</strong></div><span className="badge">PRIVADO · {user.name}</span></div>
    <section className="hero"><div className="eyebrow">CENTRO DE OPERACIONES</div><h1>Que ningún pedido<br />se pierda.</h1><p className="muted">La cola conecta necesidad, producto y fabricación. Cada pedido debe tener responsable, estado, producto y próxima acción.</p></section>
    <section className="grid">{stages.map(([code,name,desc]) => <article className="card" key={code}><span className="badge">{code}</span><strong>{name}</strong><span className="muted">{desc}</span></article>)}</section>
    <section className="workspace"><div className="card primary"><div className="eyebrow">NUEVO PEDIDO</div><h2>Registrar una solicitud</h2><p className="muted">En esta primera capa definimos el flujo. El formulario persistente se conectará después al almacenamiento privado.</p><Link className="button" href="/fabrica">Pasar a fabricación →</Link></div><aside className="card"><div className="eyebrow">REGLA</div><h2>Una próxima acción.</h2><p className="muted">Un pedido sin próxima acción es un pedido detenido. El tablero final deberá mostrar siempre qué tiene que hacer el equipo a continuación.</p></aside></section>
  </main>
}
