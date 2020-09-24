import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto prose lg:prose-xl py-10 px-6">
      <h1>Sobre Nosotros</h1>

      <p>
        Somos un grupo de personas que les encanta la programación, el
        desarrollo web y la tecnología en general. En esta comunidad encontraras
        desde principiantes que recién comienzan a dar sus primeros pasos, hasta
        gente mas experimentada que quiere seguir aprendiendo y ayudando a los
        demás compartiendo sus conocimientos y experiencias.
      </p>
      <p>
        Organizamos meetups o encuentros presenciales para conocernos, realizar
        charlas, talleres, trabajar en proyectos, hablar sobre oportunidades
        laborales o simplemente pasar un buen rato conversando sobre cosas que
        nos gustan. Revisa la sección de <Link href="/events">eventos</Link>{' '}
        para enterarte cuando será el próximo.
      </p>

      <p>
        Estamos comprometidos a crear contenido útil para la comunidad y seguir
        apoyando el aprendizaje de diversas tecnologías, por esto es que
        contamos con un <Link href="/blog">blog</Link> donde iremos compartiendo
        artículos y un canal de YouTube donde realizamos hangouts en directo.
      </p>
    </div>
  );
}
