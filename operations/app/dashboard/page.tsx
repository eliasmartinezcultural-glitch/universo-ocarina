import { seatConfiguration } from '../../lib/access'

const modules = [
  ['⚡','Fábrica','Crear y adaptar productos'],
  ['📋','Pedidos','Seguimiento de producción'],
  ['🎨','Productos','Catálogo maestro interno'],
  ['📷','Referencias','Biblioteca visual autorizada'],
  ['🔎','Investigación','Fuentes y territorio'],
  ['✓','QA','Control antes de entregar'],
  ['📤','Entregas','Salidas PDF + JPG'],
  ['♻️','Reutilizar','Convertir trabajo existente'],
]

export default function Dashboard() {
  const seats = seatConfiguration()
  return <main>
    <section className="hero">
      <div className="eyebrow">CABINA OPERATIVA</div>
      <h1>Crear una vez.<br />Reutilizar muchas.</h1>
      <p className="muted">Un solo centro para transformar pedidos e ideas en productos terminados. El cliente queda afuera de la fábrica.</p>
    </section>
    <section className="grid">
      {modules.map(([icon,name,desc]) => <a className="card" href={`/${name.toLowerCase().replace('ó','o').replace('í','i').replace('é','e')}`} key={name}><span style={{fontSize:24}}>{icon}</span><strong>{name}</strong><span className="muted">{desc}</span></a>)}
    </section>
    <section className="grid" style={{marginTop:12}}>
      <div className="card"><div className="metric">{seats.configuredSeats}/{seats.maxSeats}</div><strong>Plazas configuradas</strong><span className="muted">El sistema admite como máximo cuatro cuentas autorizadas.</span></div>
      <div className="card"><div className="metric">6</div><strong>Etapas de fábrica</strong><span className="muted">Pedido → fabricación → QA → entrega → reutilización.</span></div>
      <div className="card"><div className="metric">PDF + JPG</div><strong>Salida comercial</strong><span className="muted">Los masters internos no forman parte de la entrega.</span></div>
      <div className="card"><div className="metric">0</div><strong>Acceso cliente</strong><span className="muted">El comprador no entra al centro de operaciones.</span></div>
    </section>
  </main>
}
