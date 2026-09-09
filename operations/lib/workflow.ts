export const PRODUCT_STATES = ['IDEA','LAB','QA','AVAILABLE','ARCHIVED'] as const
export type ProductState = typeof PRODUCT_STATES[number]

export const ORDER_STATES = ['REQUESTED','QUOTED','CONFIRMED','IN_PRODUCTION','QA','READY','DELIVERED','CANCELLED'] as const
export type OrderState = typeof ORDER_STATES[number]

export const WORKFLOW = [
  { key: 'pedido', label: 'Pedido', description: 'Registrar qué necesita Ocarina producir.' },
  { key: 'brief', label: 'Brief', description: 'Definir producto, variables, referencia y salida.' },
  { key: 'fabricacion', label: 'Fabricación', description: 'Generar desde una plantilla o producto existente.' },
  { key: 'qa', label: 'QA', description: 'Verificar contenido, fidelidad, derechos y archivos.' },
  { key: 'master', label: 'Master', description: 'Conservar la fuente interna en almacenamiento privado.' },
  { key: 'salida', label: 'Salida', description: 'Preparar únicamente PDF/JPG comercial.' },
  { key: 'entrega', label: 'Entrega', description: 'Enviar al cliente y registrar el resultado.' },
  { key: 'reutilizacion', label: 'Reutilización', description: 'Convertir el trabajo aprobado en nuevo activo.' },
] as const

export const QA_GATES = [
  'SKU válido y único',
  'Nombre y familia definidos',
  'Referencia real verificada cuando corresponde',
  'Texto/factos contrastados',
  'Derechos de fotografía comprobados',
  'Personalización completa cuando corresponde',
  'PDF generado',
  'JPG generado',
  'Marca Ocarina aplicada',
  'Master separado de la salida comercial',
] as const

export function canDeliver(checks: Record<string, boolean>) {
  return QA_GATES.every((gate) => checks[gate] === true)
}
