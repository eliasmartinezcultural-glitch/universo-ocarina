import { notFound } from 'next/navigation'
import { requireOcarinaUser } from '../../lib/access'

const modules: Record<string, { title:string; desc:string; next:string[] }> = {
  fabrica:{title:'Fábrica',desc:'Producción, plantillas y generación de salidas.',next:['Elegir producto','Personalizar','Generar','Enviar a QA']},
  pedidos:{title:'Pedidos',desc:'Cola interna desde la solicitud hasta la entrega.',next:['Nuevo pedido','Cotización','Producción','Entrega']},
  productos:{title:'Productos',desc:'Inventario maestro y ciclo de vida.',next:['IDEA','LAB','QA','AVAILABLE']},
  referencias:{title:'Referencias',desc:'Fuentes visuales propias o autorizadas.',next:['Recibir','Verificar autoría','Catalogar','Aprobar']},
  investigacion:{title:'Investigación',desc:'Evidencia, procedencia y territorio.',next:['Descubrir','Contrastar','Verificar','Curar']},
  qa:{title:'QA',desc:'Puerta de control antes de que algo pueda entregarse.',next:['Identidad','Fuente','Fidelidad','Personalización']},
  entregas:{title:'Entregas',desc:'Salidas comerciales y registro de entrega.',next:['PDF','JPG','WhatsApp','Registrar']},
  reutilizar:{title:'Reutilizar',desc:'Convertir productos existentes en nuevas variantes.',next:['Elegir master','Cambiar variables','Previsualizar','Crear V2']},
  configuracion:{title:'Configuración',desc:'Políticas del centro y control de acceso.',next:['Usuarios autorizados','Roles','Políticas','Auditoría']},
}

export default async function ModulePage({ params }: { params: Promise<{module:string}> }) {
  await requireOcarinaUser()
  const { module } = await params
  const data = modules[module]
  if (!data) notFound()
  return <main className="hero">
    <div className="eyebrow">OCARINA · MÓDULO OPERATIVO</div>
    <h1>{data.title}</h1>
    <p className="muted">{data.desc}</p>
    <div className="grid">{data.next.map((item,i)=><div className="card" key={item}><div className="metric">0{i+1}</div><strong>{item}</strong><span className="muted">Etapa preparada para integrarse con la operación central.</span></div>)}</div>
  </main>
}
