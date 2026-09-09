# Ocarina Lab — REFERENCE GATE 1.0

## Regla central

**REFERENCIA REAL → VERIFICACIÓN → REPRESENTACIÓN → ESTILO OCARINA**

Si una pieza afirma representar San Patricio del Chañar, una calle, edificio, paisaje, río, chacra, camino, barrio, patrimonio o cualquier elemento territorial reconocible, la fábrica debe poder señalar la referencia que sustenta esa representación.

## Estados

- `candidate`: referencia recibida, todavía no validada.
- `verified`: referencia revisada por Ocarina y apta para producción.
- `restricted`: existe, pero sus derechos o condiciones impiden determinado uso.
- `archived`: no utilizar en nueva producción.

## Para pasar a producción

Una referencia visual debe tener, como mínimo:

- ID único.
- Qué representa.
- Lugar o zona identificable.
- Fuente/origen.
- Autoría conocida o condición de uso documentada.
- Permiso cuando corresponda.
- Fecha de verificación.
- Observaciones sobre qué elementos deben conservarse.

## Modos permitidos

- `faithful`: representación fiel.
- `faithful_photo`: fotografía propia o autorizada.
- `faithful_illustration`: ilustración basada en referencia real.
- `faithful_pixel`: pixel art basado en referencia real.

El estilo puede cambiar la técnica, textura, iluminación o resolución visual. **No puede inventar una realidad territorial y presentarla como documental.**

## Mapas

Un producto presentado como mapa necesita una fuente cartográfica verificada. Una composición artística no debe venderse como cartografía oficial.

## Personalización

Se pueden modificar nombre, dedicatoria, fecha, frase, variante, orientación, tamaño, número de edición y fotografía propia/autorizada, según la plantilla.

La personalización modifica la pieza comercial; **no modifica los hechos territoriales representados**.

## Regla de bloqueo

Si falta referencia verificable, autoría/uso suficientemente claro o control territorial, el producto permanece en `LAB` o `QA`.

Nunca se fuerza `AVAILABLE` para completar inventario.
