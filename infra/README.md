# Infraestructura

Recursos y configuración para ejecutar la plataforma en entornos locales y gestionados.

## Contenedores de desarrollo

Se proporciona un `docker-compose.yml` que levanta PostgreSQL, el backend y la web.

```bash
cd infra
docker compose up --build
```

El backend quedará disponible en `http://localhost:3001` y la web en `http://localhost:3000`.

## Próximos pasos

- Añadir definiciones de Terraform y Helm chart según el despliegue objetivo.
- Integrar pipelines CI/CD para construir y publicar las imágenes Docker.
