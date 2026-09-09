# Ocarina Operations

Centro de Operaciones privado de Ocarina Producciones.

## Regla estructural

El Centro de Operaciones no es el catálogo público. Es una aplicación interna para un máximo de **4 cuentas autorizadas**.

```text
PÚBLICO
Sitio → Catálogo → Compra/Contacto

PRIVADO
Login → Dashboard → Pedido → Fabricación → QA → Entrega → Reutilización
```

## Seguridad

- Autenticación real con Clerk.
- Allowlist de correos mediante `OCARINA_ALLOWED_EMAILS`.
- El código limita la configuración a las primeras 4 direcciones.
- Las rutas operativas se protegen mediante middleware.
- La autorización se vuelve a comprobar en servidor antes de renderizar el módulo.
- No se almacenan contraseñas en el repositorio.
- No se deben guardar masters, fotos privadas, credenciales ni secretos en este repositorio público.

## Estados de producto

`IDEA → LAB → QA → AVAILABLE → ARCHIVED`

## Regla de entrega

El cliente recibe únicamente salidas comerciales autorizadas, principalmente PDF/JPG. Los masters internos permanecen fuera del espacio público.

## Despliegue

Esta carpeta es el código fuente de la futura aplicación privada. Para producción debe desplegarse en un proyecto Vercel separado del sitio público y configurarse con las variables de entorno de Clerk y la allowlist de cuatro correos.

**No se considera seguro mientras siga funcionando únicamente como GitHub Pages.**
