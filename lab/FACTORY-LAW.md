# LEY MUNDIAL DEL REPOSITORIO · OCARINA LAB

## 1. La fábrica existe para una sola cosa

**RECIBO PEDIDO → FABRICO → DESCARGO → ENVÍO → FIN.**

Ocarina Lab no es un museo de herramientas ni un proyecto de software por sí mismo. Es una **fábrica virtual de producción rápida** para que una persona pueda convertir un pedido en una pieza terminada con la menor cantidad posible de pasos.

## 2. Principio rector

Todo diseño, código, base de datos, generador, plantilla y recurso debe reducir al menos una de estas variables:

- tiempo de fabricación;
- cantidad de decisiones repetidas;
- cantidad de trabajo manual;
- posibilidad de error;
- dificultad para localizar el archivo final.

Si una función agrega complejidad pero no acelera, mejora calidad o habilita personalización útil, **no pertenece a la fábrica**.

## 3. Flujo universal

```text
PEDIDO
  ↓
ELEGIR FAMILIA / PLANTILLA
  ↓
CARGAR O CAMBIAR DATOS
  ↓
PREVISUALIZAR
  ↓
AJUSTAR
  ↓
FABRICAR MASTER
  ↓
DESCARGAR
  ↓
ENVIAR
  ↓
FIN
```

La investigación, curaduría y preparación existen para que este circuito sea rápido cuando llega el pedido.

## 4. Dos velocidades

### MODO CATÁLOGO

Producto previamente fabricado.

**Buscar → abrir → descargar → enviar.**

Objetivo: segundos.

### MODO A MEDIDA

Producto basado en una plantilla ya preparada.

**Elegir plantilla → modificar variables → previsualizar → fabricar → descargar → enviar.**

Objetivo: minutos, no horas.

Un trabajo a medida no debe convertirse en empezar desde cero.

## 5. La personalización debe ser paramétrica

Cuando sea posible, una pieza se modifica mediante variables simples:

- título;
- subtítulo;
- nombre;
- fecha;
- ubicación;
- fotografía;
- texto;
- colores permitidos;
- tipografía disponible;
- cantidad de elementos;
- orientación;
- tamaño;
- serie;
- nivel de detalle;
- variante artística.

La plantilla hace el trabajo estructural. El creador decide el contenido.

## 6. Regla 80/20 de fabricación

El sistema debe buscar que aproximadamente:

**80 % = estructura automática / reutilizable**

**20 % = decisión creativa del creador**

La creatividad no debe desperdiciarse en tareas repetitivas.

## 7. Regla de una sola descarga

Cada producto fabricado debe terminar con un archivo claramente identificable.

Idealmente:

```text
SKU_NOMBRE_VERSION.ext
```

El creador no debe buscar entre carpetas técnicas para encontrar el resultado.

## 8. Regla de cero fricción

La interfaz debe priorizar:

1. qué quiero fabricar;
2. qué tengo que cambiar;
3. cómo queda;
4. fabricar;
5. descargar.

No esconder estas acciones detrás de paneles innecesarios.

## 9. Regla artística

La velocidad no significa diseño genérico.

La fábrica debe permitir:

- composiciones visuales fuertes;
- estética Ocarina;
- variantes artísticas;
- textura;
- capas;
- ilustración;
- fotografía;
- pixel art;
- mapas interpretativos;
- tipografía editorial;
- series coherentes;
- mezcla de información y arte.

**Automatizar la estructura; conservar humana la mirada.**

## 10. Regla de plantillas maestras

Cada familia debe construir primero una pequeña cantidad de plantillas maestras de alta calidad.

Ejemplos:

- Postal editorial;
- Postal fotográfica;
- Lámina territorial;
- Póster histórico;
- Mapa artístico;
- Guía turística;
- Guía de servicios;
- Ficha de prestador;
- Pack temático;
- Escena pixel art;
- Producto educativo.

Después se multiplican mediante variables, no mediante copias manuales.

## 11. Regla de pedido

Un pedido debe poder traducirse rápidamente a una ficha mínima:

```text
TIPO:
OBJETIVO:
NOMBRE / TEMA:
DATOS NECESARIOS:
FORMATO:
VARIANTE:
ENTREGA:
```

Si faltan datos, la fábrica debe mostrar exactamente qué falta. No debe obligar al creador a reconstruir mentalmente el pedido.

## 12. Regla de reutilización

Cada trabajo terminado debe preguntarse:

> ¿Puede transformarse en otro producto?

Una guía puede generar:

- postal;
- lámina;
- póster;
- pack;
- ficha;
- contenido educativo;
- mapa.

Una investigación puede alimentar múltiples productos.

La fábrica debe convertir **una investigación en una familia de productos**.

## 13. Regla de calidad

Rapidez jamás significa inventar información.

Los datos territoriales deben conservar su procedencia y estado de verificación. Una pieza artística puede interpretar; una pieza factual debe demostrar.

**Rápido + bonito + útil + verificable.**

## 14. Regla de archivos

Separar conceptualmente:

- datos de investigación;
- plantillas;
- masters;
- previews;
- productos publicables;
- documentación técnica.

Nunca mezclar información privada de compradores con el repositorio público.

## 15. Regla de tecnología

Ocarina Lab debe funcionar como una herramienta web:

- sin instalación;
- accesible desde PC y celular cuando sea razonable;
- rápida;
- tolerante a conexiones normales;
- basada en archivos y estándares simples;
- con degradación razonable cuando una función avanzada no está disponible.

## 16. Regla de expansión

La fábrica puede crecer indefinidamente en familias y plantillas, pero el flujo operativo no debe crecer en complejidad.

Más productos **no significa** más pasos.

## 17. Prueba de fuego

Antes de considerar terminada una herramienta, debe poder responder afirmativamente:

- ¿Puedo entenderla rápidamente?
- ¿Puedo modificar lo necesario sin tocar código?
- ¿Veo el resultado antes de fabricarlo?
- ¿Puedo generar el archivo final?
- ¿Puedo descargarlo directamente?
- ¿Sé dónde encontrarlo después?
- ¿Puedo reutilizar la plantilla para otro pedido?
- ¿La pieza mantiene calidad artística?
- ¿Los datos son honestos y trazables?

Si la respuesta es no, la herramienta sigue en desarrollo.

## 18. Mandamiento final

> **OCARINA CREA UNA VEZ. OCARINA REUTILIZA MUCHAS VECES.**
>
> **EL CLIENTE PIDE. EL CREADOR FABRICA. LA MÁQUINA ACELERA. EL ARTE DIFERENCIA.**
>
> **FABRICAR → DESCARGAR → ENVIAR → FIN.**
