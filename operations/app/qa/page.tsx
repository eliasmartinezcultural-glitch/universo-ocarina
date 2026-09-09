import Link from 'next/link'
import { requireOcarinaUser } from '../../lib/access'
import { QA_GATES } from '../../lib/workflow'

export default async function QA() {
  const user = await requireOcarinaUser()
  return <main>
    <div className="bar"><div><div className="eyebrow">OCARINA · QA</div><strong>Control antes de entregar</strong></div><span className="badge">PRIVADO · {user.name}</span></div>
    <section className="hero"><div className="eyebrow">PUERTA DE CALIDAD</div><h1>No sale nada<br />sin revisar.</h1><p className="muted">Este módulo define los controles mínimos para convertir una producción interna en una salida comercial.</p></section>
    <section className="grid">{QA_GATES.map((gate,index)=><article className="card" key={gate}><span className="badge">{String(index+1).padStart(2,'0')}</span><strong>{gate}</strong><span className="muted">Control obligatorio antes de marcar el producto como listo.</span></article>)}</section>
    <div className="notice"><strong>Bloqueo de seguridad</strong><br/><span className="muted">Si falla un gate, la entrega debe quedar bloqueada. La ausencia de referencia, autorización o salida comercial válida no se resuelve con una nota manual.</span></div>
    <p style={{marginTop:28}}><Link className="card" href="/entregas"><strong>Ir a entregas →</strong><span className="muted">Solo después de completar el control.</span></Link></p>
  </main>
}
