import InternalEsNav from './internalEsNav'

export default function internalHeaderBlog() {
  return (
    <>
      <header className="hero">
        <InternalEsNav />

        <section className="hero__container container" id="home" layout="fill">
          <h1 className="hero__title">
            Blog
          </h1>
          <p className="hero_paragraph">
            Mi experiencia para ti
          </p>
          <a href="#main" className="cta">Leer más</a>
        </section>

      </header>
    </>
  )
}
