import InternalNav from './internalNav'

export default function internalHeaderBlog() {
  return (
    <>
      <header className="hero">
        <InternalNav />

        <section className="hero__container container" id="home" layout="fill">
          <h1 className="hero__title">
            Blog
          </h1>
          <p className="hero_paragraph">
            Mi experiencia para ti
          </p>
          <a href="#main" className="cta">Learn more</a>
        </section>

      </header>
    </>
  )
}
