import InternalEnNav from './internalEnNav'

export default function internalHeaderBlog() {
  return (
    <>
      <header className="hero">
        <InternalEnNav />

        <section className="hero__container container" id="home" layout="fill">
          <h1 className="hero__title">
            Blog
          </h1>
          <p className="hero_paragraph">
            My experience for you
          </p>
          <a href="#main" className="cta">Learn more</a>
        </section>

      </header>
    </>
  )
}
