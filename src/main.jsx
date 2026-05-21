import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ExternalLink, Mail, Smartphone, Globe2, Server, Code2, Database } from 'lucide-react';
import './styles.css';

const imageLabels = {
  'Jake Home.png': 'Pantalla principal de Jake App',
  'Jake Login.png': 'Inicio de sesión',
  'Jake Signup.png': 'Registro de usuarios',
  'Jake Create Solicitation.png': 'Creación de solicitudes',
  'Jake User Edit.png': 'Edición de perfil de usuario',
  'Jake Database Connection.png': 'Conexión e integración con base de datos',

  'Funsate solicitudes.png': 'Módulo de solicitudes en FunsateCR',
  'httpsfunsatecr.orgregistro-profesor.png': 'Registro público de profesores',
  'Funsate commit.png': 'Evidencia de contribución en GitHub',
  'Funsate new page commit.png': 'Commit agregando nueva página y ruta',

  'Catalogo principal.png': 'Vista principal del catálogo comercial',
  'Catalogo menu.png': 'Menú de navegación del catálogo',
  'Catalogo Vercel.png': 'Demo publicado en Vercel'
};

const projects = [
  {
    id: 'jake',
    title: 'Jake App',
    subtitle: 'Aplicación móvil para Android y iOS',
    status: 'Publicada / actualmente fuera de línea por financiamiento',
    icon: Smartphone,
    description:
      'Aplicación móvil desarrollada para Android y iOS. La app fue aprobada para plataformas móviles, pero actualmente los servidores de producción se encuentran fuera de línea por limitaciones de financiamiento.',
    role:
      'Desarrollo completo de la aplicación, integración backend, conexión con base de datos, pantallas móviles y flujo de despliegue.',
    tech: ['Aplicación móvil', 'Backend', 'Base de datos', 'Autenticación', 'Despliegue'],
    images: [
      'Jake Home.png',
      'Jake Login.png',
      'Jake Signup.png',
      'Jake Create Solicitation.png',
      'Jake User Edit.png',
      'Jake Database Connection.png'
    ]
  },
  {
    id: 'funsate',
    title: 'FunsateCR',
    subtitle: 'Contribución en plataforma colaborativa',
    status: 'Disponible públicamente',
    icon: Server,
    description:
      'Contribuí al desarrollo de la plataforma FunsateCR dentro de un flujo colaborativo, incluyendo funcionalidad administrativa, pantallas de solicitudes y rutas relacionadas con gestión de profesores.',
    role:
      'Contribuidor full-stack usando React, TypeScript, Supabase, GitHub y funciones serverless.',
    tech: ['React', 'TypeScript', 'Supabase', 'GitHub', 'Deno Functions'],
    url: 'https://funsatecr.org/',
    images: [
      'Funsate solicitudes.png',
      'httpsfunsatecr.orgregistro-profesor.png',
      'Funsate commit.png',
      'Funsate new page commit.png'
    ]
  },
  {
    id: 'catalog',
    title: 'Catálogo Comercial Personalizable',
    subtitle: 'Prototipo de catálogo y tienda web',
    status: 'Demo en línea',
    icon: Globe2,
    description:
      'Demo de catálogo comercial personalizable para pequeños negocios, con presentación de productos, navegación por menú, diseño responsivo y despliegue público en Vercel.',
    role:
      'Diseño e implementación del prototipo frontend y experiencia de catálogo lista para despliegue.',
    tech: ['React', 'Vercel', 'UI responsiva', 'Catálogo', 'Personalización'],
    url: 'https://rauls-frontend-customs.vercel.app/',
    images: [
      'Catalogo principal.png',
      'Catalogo menu.png',
      'Catalogo Vercel.png'
    ]
  }
];

const skills = [
  ['Frontend', ['React', 'TypeScript', 'UI responsiva', 'Vercel']],
  ['Backend', ['Node.js', 'APIs', 'Supabase', 'Funciones serverless']],
  ['Base de datos', ['SQL', 'Diseño de base de datos', 'Autenticación', 'Flujos de datos']],
  ['Herramientas', ['Git', 'GitHub', 'Despliegue', 'Depuración']]
];

function shot(name) {
  return `/screenshots/${name}`;
}

function App() {
  const [project, setProject] = useState(projects[0]);
  const [image, setImage] = useState(projects[0].images[0]);
  const Icon = project.icon;

  function pickProject(p) {
    setProject(p);
    setImage(p.images[0]);
  }

  return (
    <main>
      <section className="hero">
        <div className="badge">
          <Code2 size={16} /> Portafolio de Desarrollador Full-Stack Junior
        </div>

        <h1>Raúl Montero Barboza</h1>

        <p className="lead">
          Estudiante de Ingeniería Informática enfocado en desarrollo full-stack,
          flujos backend, integración con bases de datos y despliegue de aplicaciones reales.
        </p>

        <div className="actions">
          <a className="btn primary" href="#projects">Ver proyectos</a>
          <a className="btn" href="mailto:88raulmb@gmail.com">
            <Mail size={18} /> Contacto
          </a>
        </div>
      </section>

      <section id="projects" className="layout">
        <aside>
          <h2>Proyectos</h2>

          {projects.map(p => {
            const PIcon = p.icon;

            return (
              <button
                key={p.id}
                className={`project-card ${project.id === p.id ? 'active' : ''}`}
                onClick={() => pickProject(p)}
              >
                <span className="project-icon">
                  <PIcon size={22} />
                </span>

                <span>
                  <strong>{p.title}</strong>
                  <small>{p.subtitle}</small>
                  <em>{p.status}</em>
                </span>
              </button>
            );
          })}
        </aside>

        <section className="detail">
          <div className="detail-head">
            <div>
              <p className="kicker">Proyecto seleccionado</p>
              <h2>
                <Icon size={28} /> {project.title}
              </h2>
              <p>{project.subtitle}</p>
            </div>

            {project.url && (
              <a
                className="btn primary"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Abrir sitio <ExternalLink size={18} />
              </a>
            )}
          </div>

          <p className="description">{project.description}</p>

          <p className="role">
            <b>Rol:</b> {project.role}
          </p>

          <div className="chips">
            {project.tech.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="viewer">
            <img
              src={shot(image)}
              alt={imageLabels[image] || `${project.title} screenshot`}
              onError={e => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'grid';
              }}
            />

            <div className="missing">
              Imagen no encontrada: coloca <b>{image}</b> dentro de{' '}
              <code>public/screenshots</code>
            </div>
          </div>

          <p className="image-caption">
            {imageLabels[image] || image}
          </p>

          <div className="thumbs">
            {project.images.map(img => (
              <button
                key={img}
                className={img === image ? 'chosen' : ''}
                onClick={() => setImage(img)}
              >
                <img src={shot(img)} alt={imageLabels[img] || img} />
                <span>{imageLabels[img] || img}</span>
              </button>
            ))}
          </div>
        </section>
      </section>

      <section className="skills">
        <h2>
          <Database size={24} /> Habilidades técnicas
        </h2>

        <div className="skill-grid">
          {skills.map(([name, items]) => (
            <div className="skill" key={name}>
              <h3>{name}</h3>
              {items.map(i => (
                <p key={i}>{i}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);