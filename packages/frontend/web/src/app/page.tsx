import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ maxWidth: 640 }}>
        <h1>Plataforma integral de telemedicina</h1>
        <p>
          Esta es la base del portal web que dará servicio a pacientes, profesionales sanitarios y
          administradores dentro del ecosistema SaaS multi-tenant.
        </p>
        <p>
          Comienza revisando la <Link href="/">documentación</Link> y los componentes compartidos para
          mantener la consistencia UX.
        </p>
      </section>
    </main>
  );
}
