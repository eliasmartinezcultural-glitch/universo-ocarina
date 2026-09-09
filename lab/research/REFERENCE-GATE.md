# Ocarina · Reference Gate 1.0

## Regla central

**REFERENCIA REAL → VERIFICACIÓN → REPRESENTACIÓN → ESTILO OCARINA**

Todo producto que diga representar San Patricio del Chañar debe poder responder, internamente, estas preguntas antes de pasar a `AVAILABLE`:

1. ¿Qué lugar, escena, objeto o territorio representa?
2. ¿Cuál es la referencia utilizada?
3. ¿La referencia es propia, autorizada o proviene de una fuente verificable?
4. ¿Está identificada la ubicación o el alcance territorial?
5. ¿La representación conserva los elementos esenciales de la realidad?
6. ¿La estilización cambia algún hecho, edificio, camino o relación territorial?

## Estados

- `candidate`: referencia recibida, todavía no validada.
- `verified`: referencia apta para producción fiel.
- `restricted`: referencia válida pero con uso limitado.
- `archived`: no utilizar para nuevas producciones.

## Evidencia mínima

Una referencia `verified` debe tener, cuando corresponda:

- `referenceId`
- lugar o zona
- descripción de qué muestra
- autoría/fuente
- permiso o condición de uso cuando no sea propia
- fecha de verificación
- observaciones

Para cartografía se agrega la fuente cartográfica y el alcance de precisión.

## Prohibiciones

- No inventar calles, edificios, puentes, plazas, chacras o accidentes geográficos.
- No mezclar elementos de lugares distintos y presentarlos como una vista real.
- No usar una imagen de internet como si fuera propia.
- No llamar “fiel” a una pieza sin referencia verificable.
- El pixel art y la ilustración pueden estilizar; no pueden falsificar el territorio.

## Personalización

El nombre, dedicatoria, fecha, frase, edición u otra variable comercial puede cambiar la pieza del comprador, pero **nunca modifica la realidad representada**.

Frase local permitida como recurso editorial:

> Un recuerdito de San Patricio del Chañar

## Puerta de publicación

`IDEA → LAB → QA → AVAILABLE`

`AVAILABLE` exige referencia verificada cuando `sourceRequired=true`.
