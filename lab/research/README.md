# Ocarina Lab · Investigación San Patricio del Chañar

Esta carpeta es la **fuente de verdad editorial territorial** de la fábrica.

## Fuentes conectadas

- Municipalidad de San Patricio del Chañar
- Turismo Neuquén
- Dirección Provincial de Catastro / Mapoteca Digital
- COPADE
- Neuquén Informa
- Argentina.gob.ar
- Wines of Argentina
- Google Maps / Places como capa de descubrimiento y actualización dinámica
- OpenStreetMap como cartografía colaborativa
- Tripadvisor como señal de experiencia y descubrimiento
- blogs y archivos históricos como fuentes secundarias

## Archivos

- `source-registry.json` — jerarquía de fuentes y usos.
- `entities-chanar.json` — lugares, prestadores, servicios y hechos registrados.
- `QUALITY-PROTOCOL.md` — reglas de verificación y publicación.

## Próxima evolución

La investigación debe convertirse progresivamente en:

1. `places.json` — lugares y entidades.
2. `roads.json` — calles, rutas, picadas y caminos con procedencia.
3. `history.json` — hechos, fechas, documentos y bibliografía.
4. `tourism.json` — experiencias y prestadores.
5. `services.json` — servicios públicos y útiles.
6. `geo/` — capas cartográficas separadas por fuente.
7. `editions/` — cortes temporales para que cada guía sepa hasta cuándo fue verificada.

## Fuentes dinámicas

La fábrica **no simula una conexión automática con Google Maps ni con APIs externas**. Por ahora registra esas fuentes como capas de investigación y utiliza datos descubiertos/contrastados. Una futura integración API deberá respetar los términos de cada proveedor y guardar fecha de consulta.
