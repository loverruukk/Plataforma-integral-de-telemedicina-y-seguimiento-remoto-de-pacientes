# ADR 0001: Selección del stack tecnológico

- **Estado:** Propuesto
- **Fecha:** 2024-05-18

## Contexto
La plataforma de telemedicina debe operar como solución SaaS multi-tenant cumpliendo RGPD y requisitos clínicos. Requiere alta modularidad para ampliar dominios (agenda, telemonitorización, integraciones EHR) y soportar despliegues híbridos (cloud / on-premise).

## Decisión
Adoptar una arquitectura basada en microservicios escritos en TypeScript sobre NestJS, con Next.js para los clientes web, React Native para la app móvil y PostgreSQL/TimescaleDB como base de datos principal. La comunicación asíncrona se orquestará mediante Kafka (o RabbitMQ como alternativa equivalente). Infraestructura basada en contenedores Docker orquestados con Kubernetes y gestionados con Terraform + Helm.

## Consecuencias
- **Positivas:**
  - Ecosistema TypeScript homogéneo que facilita compartir librerías entre backend y frontend.
  - NestJS ofrece modularidad, inyección de dependencias y soporte para GraphQL/REST/WebSockets.
  - Next.js proporciona SSR/ISR para experiencias multi-tenant con buen rendimiento.
  - PostgreSQL y TimescaleDB ofrecen consistencia transaccional y series temporales en un stack manejable.
  - Kafka garantiza capacidad de escalar eventos y alertas críticas en tiempo real.
  - Kubernetes habilita aislamiento por tenant y despliegues automatizados multi-entorno.
- **Negativas:**
  - Mayor complejidad operativa comparada con un monolito.
  - Se requieren perfiles DevOps con experiencia en Kubernetes y observabilidad.
  - Necesidad de gobernanza estricta para versionado de contratos entre servicios.

## Próximos pasos
- Elaborar ADRs adicionales para autenticación/Keycloak, estrategia de multi-tenancy y gestión de datos sensibles.
- Definir plantillas de servicio NestJS y BFFs compartidos.
- Establecer lineamientos de observabilidad y monitorización de eventos clínicos críticos.
