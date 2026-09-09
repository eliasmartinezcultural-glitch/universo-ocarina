import Link from 'next/link'
import { requireOcarinaUser } from '../../lib/access'
import { WORKFLOW } from '../../lib/workflow'

export default async function Fabrica() {
  const user = await requireOcarinaUser()
  return <main>
    <div className="bar"><div><div className="eyebrow">OCARINA · FÁBRICA</div><strong>Producción digital</strong></div><span className="badge">PRIVADO · {user.name}</span></div>
    <section className="hero"><div className="eyebrow">FLUJO DE PRODUCCIÓN</div><h1>Del pedido<br />al producto.</h1><p className="muted">La fábrica reduce el trabajo repetitivo y reserva la decisión creativa para lo que realmente necesita criterio.</p></section>
    <section className="grid">{WORKFLOW.map((step,index)=><article className="card" key={step.key}><span className="badge">{String(index+1).padStart(2,'0')}</span><strong>{step.label}</strong><span className="muted">{step.description}</span></article>)}</section>
    <div className="notice"><strong>Regla de fábrica</strong><br/><span className="muted">80% reutilizable y automático · 20% decisión creativa. Ningún producto pasa a entrega sin QA.</span></div>
    <p style={{marginTop:28}}><Link className="card" href="/pedidos"><strong>Ir a pedidos →</strong><span className="muted">Seleccioná una solicitud y llevála al siguiente estado.</span></Link></p>
  </main>
}
