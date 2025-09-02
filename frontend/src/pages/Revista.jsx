import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '2rem 1rem'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #e2e8f0'
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '300',
    color: '#1a202c',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#4a5568',
    fontSize: '1.125rem',
    maxWidth: '42rem',
    margin: '0 auto'
  },
  article: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  articleHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  articleContent: {
    padding: '1.5rem'
  },
  articleTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '0.5rem',
    textDecoration: 'none',
    display: 'block'
  },
  articleTitleHover: {
    color: '#3182ce'
  },
  articleDate: {
    fontSize: '0.875rem',
    color: '#718096',
    marginBottom: '0.5rem',
    display: 'block'
  },
  articleExcerpt: {
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  readMore: {
    color: '#3182ce',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center'
  },
  readMoreHover: {
    textDecoration: 'underline'
  },
  newsletter: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginTop: '4rem',
    textAlign: 'center'
  },
  newsletterTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#2d3748',
    marginBottom: '1rem'
  },
  form: {
    display: 'flex',
    maxWidth: '32rem',
    margin: '0 auto'
  },
  input: {
    flex: '1',
    padding: '0.5rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.25rem 0 0 0.25rem',
    fontSize: '1rem'
  },
  inputFocus: {
    outline: 'none',
    borderColor: '#3182ce',
    boxShadow: '0 0 0 3px rgba(49,130,206,0.2)'
  },
  button: {
    backgroundColor: '#2d3748',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '0 0.25rem 0.25rem 0',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s'
  },
  buttonHover: {
    backgroundColor: '#1a202c'
  },
  buttonFocus: {
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)'
  }
};

export default function Revista() {
  const articulos = [
    {
      id: 1,
      titulo: 'Tendencias 2024',
      resumen: 'Descubre los géneros y sonidos que dominarán las pistas este año.',
      imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      fecha: '02 Sep 2024'
    },
    {
      id: 2,
      titulo: 'Entrevista: DJ Camilo Daza',
      resumen: 'El DJ colombiano que está revolucionando la escena electrónica.',
      imagen: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      fecha: '28 Ago 2024'
    },
    {
      id: 3,
      titulo: 'Guía para DJs Principiantes',
      resumen: 'Todo lo que necesitas para comenzar tu carrera como DJ profesional.',
      imagen: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      fecha: '20 Ago 2024'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.title}>Revista DJ Medellín</h1>
          <p style={styles.subtitle}>Lo mejor de la escena electrónica en un solo lugar.</p>
        </header>

        <main>
          {articulos.map((articulo, index) => (
            <article 
              key={articulo.id} 
              style={styles.article}
              onMouseEnter={(e) => e.currentTarget.style.transform = styles.articleHover.transform}
              onMouseLeave={(e) => e.currentTarget.style.transform = ''}
            >
              <div style={styles.articleContent}>
                <span style={styles.articleDate}>{articulo.fecha}</span>
                <Link 
                  to={`/articulo/${articulo.id}`} 
                  style={styles.articleTitle}
                  onMouseEnter={(e) => e.currentTarget.style.color = styles.articleTitleHover.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = styles.articleTitle.color}
                >
                  {articulo.titulo}
                </Link>
                <p style={styles.articleExcerpt}>{articulo.resumen}</p>
                <Link 
                  to={`/articulo/${articulo.id}`} 
                  style={styles.readMore}
                  onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                >
                  Leer más
                </Link>
              </div>
            </article>
          ))}
        </main>

        <div style={styles.newsletter}>
          <h3 style={styles.newsletterTitle}>Recibe nuestras actualizaciones</h3>
          <form style={styles.form}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico"
              style={styles.input}
              onFocus={(e) => {
                e.currentTarget.style.outline = styles.inputFocus.outline;
                e.currentTarget.style.borderColor = styles.inputFocus.borderColor;
                e.currentTarget.style.boxShadow = styles.inputFocus.boxShadow;
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = '';
                e.currentTarget.style.borderColor = styles.input.border;
                e.currentTarget.style.boxShadow = '';
              }}
            />
            <button type="submit" style={styles.button}>
              Suscribirse
            </button>
            <style jsx>{`
              button:hover {
                background-color: ${styles.buttonHover.backgroundColor};
              }
              button:focus {
                outline: ${styles.buttonFocus.outline};
                box-shadow: ${styles.buttonFocus.boxShadow};
              }
            `}</style>
          </form>
        </div>
      </div>
    </div>
  );
}
