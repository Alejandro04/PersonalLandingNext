import Nav from './navBlog'
import Image from 'next/image'

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
            Ana Lucia's Father ❤️
          </p>
          <p className="hero_paragraph">
            Software Engineer
          </p>
          <div className="headerImgContainer">
            <Image width="100px" height="100px" className="headerImg" src="/img/meok.jpg"/>
          </div>
          <a href="#main" className="cta">Learn more</a>
        </section>

      </header>
    </>
  )
}
