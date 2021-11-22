import Nav from './nav'

export default function HeaderBlog() {
  return (
    <>
      <header className="hero">
        <Nav />

        <section className="hero__container container" id="home" layout="fill">
          <h1 className="hero__title">
            Alejandro Roa
          </h1>
          <p className="hero_paragraph">
            Father of Ana Lucia ❤️
          </p>
          <p className="hero_paragraph">
            Software Engineer
          </p>
          <a href="#main" className="cta">Learn more</a>
        </section>

      </header>
    </>
  )
}
