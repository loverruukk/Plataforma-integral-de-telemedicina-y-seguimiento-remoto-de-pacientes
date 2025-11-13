# Backend

Este paquete contiene la base del backend NestJS de la plataforma.

## Requisitos previos

- Node.js >= 18
- npm >= 9 (o pnpm/yarn si se prefiere)
- PostgreSQL accesible para desarrollo

## Instalación

```bash
cd packages/backend
npm install
```

## Variables de entorno

Copia `.env.example` a `.env` o `.env.local` y ajusta los valores según tu entorno.

```bash
cp .env.example .env
```

## Scripts disponibles

- `npm run start:dev`: arranca el servidor en modo watch con recarga en caliente.
- `npm run build`: compila el proyecto a TypeScript.
- `npm run start`: ejecuta el artefacto compilado.
- `npm run test`: ejecuta la suite de pruebas unitarias (Jest).
- `npm run lint`: aplica las reglas de ESLint.

## Primer arranque

```bash
npm run start:dev
```

El servidor escuchará en el puerto definido por la variable `PORT` (3000 por defecto) y expone `/health` como endpoint de prueba.
