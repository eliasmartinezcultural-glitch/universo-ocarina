import Link from 'next/link'
import { requireOcarinaUser } from '../../lib/access'

const families = [
  ['POSTALES','Recuerdos y piezas breves','Formato rápido para series y ediciones.'],
  ['LÁMINAS','Territorio y cultura','Piezas para imprimir y conservar.'],
  ['PÓSTERS','Piezas de mayor presencia','Diseños destinados a exhibición.'],
  ['PIXEL','Universo Ocarina','Representaciones estilizadas con base local verificada.'],
  ['MAPAS','Territorio','Cartografía o representación claramente declarada.'],
  ['PACKS','Colecciones','Varios productos organizados como una unidad comercial.'],
]

export default async function Productos() {
  const user = await requireOcarinaUser()
  return <main>
    <div className="bar"><div><div className="eyebrow">OCARINA · PRODUCTOS</div><strong>Catálogo maestro interno</strong></div><span className="badge">PRIVADO · {user.name}</span></div>
    <section className="hero"><div className="eyebrow">ACTIVOS REUTILIZABLES</div><h1>Un producto.<br />Muchas salidas.</h1><p className="muted">El catálogo interno contiene los activos que Ocarina puede fabricar, adaptar y reutilizar. Un producto no entra en circulación sin pasar sus puertas de calidad.</p></section>
    <section className="grid">{families.map(([name,title,desc]) => <article className="card" key={name}><span className="badge">{name}</span><strong>{title}</strong><span className="muted">{desc}</span></article>)}</section>
    <section className="workspace"><div className="card primary"><div className="eyebrow">PRINCIPIO</div><h2>Referencia real → estilo Ocarina</h2><p className="muted">Cuando una pieza representa un lugar, edificio o elemento local reconocible, la base debe estar identificada y verificada antes de presentarla como fiel.</p><Link className="button" href="/referencias">Abrir referencias →</Link></div><aside className="card"><div className="eyebrow">SALIDA</div><h2>PDF + JPG</h2><p className="muted">Los formatos comerciales salen de la fábrica. Los masters, fuentes y materiales privados quedan fuera de la entrega.</p></aside></section>
  </main>
}
