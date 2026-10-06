# libro. — marketplace de libros usados

Marketplace minimalista para comprar y vender libros usados en Argentina.

## MVP visual
- Catálogo, búsqueda y filtros.
- Fichas de libros y precios.
- Modal de acceso.
- Flujo inicial para publicar.
- Flujo simulado de compra.
- Diseño responsive con estética editorial.

## Modelo de negocio

1. El vendedor publica el libro y fija el precio.
2. El comprador paga dentro de la plataforma.
3. El dinero queda retenido.
4. El vendedor despacha mediante Correo Argentino y carga el seguimiento.
5. El comprador recibe el libro.
6. Se confirma la entrega.
7. Se libera el importe al vendedor menos la comisión.

Probaría inicialmente una comisión del 10%–12% sobre el precio del libro, dejando el envío separado.

## Producción

Frontend: Next.js + TypeScript + Vercel.
Base de datos: Neon Postgres.
Autenticación: Neon Auth / Better Auth con email + contraseña.
Pagos: proveedor argentino con soporte de marketplace/split payments o custodia compatible.
Logística: integración con Correo Argentino según el servicio/API elegido.
Imágenes: object storage.
Emails: compra, despacho, entrega y liberación.

### Tablas principales

users, books, book_images, orders, payouts.

### Estados

PENDING_PAYMENT → PAID → SHIPPED → IN_TRANSIT → DELIVERED → RELEASED

Alternativos: CANCELLED, DISPUTED, REFUNDED.

## Importante

No conviene crear una billetera propia ni custodiar fondos sin validar el encuadre legal, impositivo y regulatorio argentino y el proveedor de pagos elegido. Las contraseñas jamás deben almacenarse en texto plano.

La versión actual es únicamente un prototipo visual: no procesa pagos ni credenciales reales.

## Próximo sprint

1. Next.js.
2. Neon + Neon Auth.
3. Registro/login real.
4. Perfiles comprador/vendedor.
5. Publicación con fotos.
6. Checkout.
7. Pagos.
8. Tracking.
9. Panel administrativo.
10. Deploy en Vercel.
