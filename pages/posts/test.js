import Image from 'next/image'

export default function Blog() {
  return (
    <>
      <header class="hero">
        <nav class="nav container">
          <div class="nav__logo">
            <h2 class="nav__title">
              alejodev.com
            </h2>
          </div>
          <ul class="nav__link nav__link--menu">
            <li class="nav__items">
              <a href="#home" class="nav__links">Home</a>
            </li>
            <li class="nav__items">
              <a href="#main" class="nav__links">Me</a>
            </li>
            <li class="nav__items">
              <a href="#skills" class="nav__links">Skills</a>
            </li>
            <li class="nav__items">
              <a href="#footer" class="nav__links">Contact</a>
            </li>
            <li class="nav__items">
              <a href="/blog" class="nav__links">Blog</a>
            </li>

            <Image src="/" alt="close" class="nav__close" layout="fill" />
          </ul>

          <div class="nav__menu">
            <Image src="/" alt="nav" class="nav__Image" layout="fill" />
          </div>
        </nav>

        <section class="hero__container container" id="home" layout="fill">
          <h1 class="hero__title">
            Alejandro Roa
          </h1>
          <p class="hero_paragraph">
            Father of Ana Lucia ❤️
          </p>
          <p class="hero_paragraph">
            Software Engineer
          </p>
          <a href="#main" class="cta">Learn more</a>
        </section>

      </header>

      <main>
        <section class="post" id="main">
          <div class="post__container container">
            <section class="items-detail-container" id="post">
              Hola
            </section>
          </div>
        </section>

        <footer class="footer" id="footer">
          <div class="footer__container">
            <div>
              <span>+58 04247395321</span>
            </div>
            <div>
              <span> <a href="https://github.com/Alejandro04" target="_blank">Github</a> </span>
            </div>
            <div>
              <span> <a href="https://www.linkedin.com/in/alejandroroa/" target="_blank">Linkedin</a> </span>
            </div>
            <div>
              <span> <a href="https://alejandroroa.medium.com/" target="_blank">Medium</a> </span>
            </div>
          </div>
          <div class="footer__down">
            © Copyright by 2021 Alejandro Roa
          </div>
        </footer>
      </main>
    </>
  )
}
