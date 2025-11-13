# Priorización inicial de módulos

| Orden | Módulo | Justificación | Hitos clave |
|-------|--------|---------------|-------------|
| 1 | Gestión de identidades y roles | Requisito base para operar en entorno multi-tenant y cumplir RGPD (control de accesos, consentimientos). | Integrar con Keycloak; definir modelo de tenants; provisioning de usuarios. |
| 2 | Agenda y videoconsulta | Caso de uso de mayor impacto inmediato en atención sanitaria y retención de usuarios. | MVP de agenda multi-profesional; sala de espera; prueba piloto de WebRTC. |
| 3 | Telemonitorización de crónicos | Diferenciador clave de la plataforma, requiere pipelines de datos y alertas. | Ingesta manual/app móvil; definición de umbrales; panel de alertas. |
| 4 | Integración con historiales clínicos | Necesario para contexto completo de pacientes y evitar duplicidad de datos. | Prototipo FHIR para problemas/medicación; sincronización básica; logging de auditoría. |
| 5 | Seguridad, RGPD y auditoría avanzada | Endurece cumplimiento y prepara certificaciones. | Data masking; workflows ARCO; dashboards de auditoría. |

## Dependencias
- El módulo de telemonitorización depende de identidades y agenda para notificar a profesionales.
- Integraciones EHR dependen de la infraestructura de seguridad y gestión de consentimientos.

## Próximas acciones
1. Refinar requisitos funcionales y técnicos para los dos primeros módulos.
2. Estimar esfuerzo y capacidad del equipo para la primera iteración (6-8 semanas).
3. Preparar roadmap público/privado con hitos trimestrales.
