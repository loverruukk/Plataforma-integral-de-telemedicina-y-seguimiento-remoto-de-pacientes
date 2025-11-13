# Plataforma integral de telemedicina y seguimiento remoto de pacientes

Este repositorio contiene el monorepo de la plataforma SaaS multi-tenant orientada al sistema sanitario español.

## Estructura inicial

- `docs/`: documentación funcional, técnica y normativa.
- `infra/`: infraestructura como código (Terraform, Helm, scripts de despliegue).
- `packages/`: código fuente de backend, frontend y tooling compartido.
- `platform/`: activos de DevOps, seguridad y cumplimiento.
- `data/`: migraciones y datos de ejemplo anonimizados.
- `tests/`: suites de pruebas automatizadas (integración, e2e, rendimiento).

Cada subdirectorio contiene un `README.md` con más detalles sobre su propósito.
