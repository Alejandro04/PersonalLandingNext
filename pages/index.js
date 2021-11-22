import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <header className="hero">
        <nav className="nav container">
          <div className="nav__logo">
            <h2 className="nav__title">
              alejodev.com
            </h2>
          </div>
          <ul className="nav__link nav__link--menu">
            <li className="nav__items">
              <a href="#home" className="nav__links">Home</a>
            </li>
            <li className="nav__items">
              <a href="#main" className="nav__links">Me</a>
            </li>
            <li className="nav__items">
              <a href="#skills" className="nav__links">Skills</a>
            </li>
            <li className="nav__items">
              <a href="#footer" className="nav__links">Contact</a>
            </li>
            <li className="nav__items">
            <a href="/blog" className="nav__links">Blog</a>
            </li>

            <img alt="close" className="nav__close" />
          </ul>

          <div className="nav__menu">
            <img alt="nav" className="nav__img" />
          </div>
        </nav>

        <section className="hero__container container" id="home">
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

      <main>
        <section className="container about" id="main">
          <h2 className="subtitle">I am a professional who understands your needs</h2>
          <p className="about__paragraph">
            I have experience in creating software projects from scratch, I can raise functional and non-functional
            requirements, create databases, Apis and frontend.
          </p>
          <p className="about__paragraph">
            I can lead small software development teams, working with the project manager to understand priorities,
            timelines and effectively distribute the human resources of the team.
          </p>
        </section>

        <section className="knowledge">
          <div className="knowledge__container container">
            <div className="knowledge__texts">
              <h2 className="subtitle">Software Enginner</h2>
              <p className="knowledge__paragraph">
                I have seven years of experience like developer, i worked with companies of Latam, Spain and USA.
              </p>
              <p className="knowledge__paragraph">
                I worked as a freelance at Workana.
              </p>
              <p className="knowledge__paragraph">
                I like resolve problems of companies with tecnology, in this moment i working with a great team! yei!
              </p>
              <p className="knowledge__paragraph">
                My specialties are : Javascript, React.js, Redux, Context, Thunk, Hooks, Next.js, Typescript, Angular, Jest,
                Jest-axe, Flexbox, CssGrid, Node.js, Express.js, Nest.js, MongoDB, MySQL, PostgreSQL, AWS RDS.
              </p>
            </div>

            <figure className="knowledge__picture">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
               width="800" height="600" />
            </figure>
          </div>
        </section>

        <section className="card" id="skills">
          <div className="container">

            <h2 className="subtitle">Skills</h2>
            <div className="card__container">
              <div className="card__item">
                <h3 className="card__title">Backend</h3>
                <p className="card__paragraph">Node.js / Express.js / Nest.js</p>
                <p className="card__paragraph">Sequelize / TypeOrm</p>
                <p className="card__paragraph">Php / Laravel</p>
              </div>
              <div className="card__item">
                <h3 className="card__title">Databases</h3>
                <p className="card__paragraph">MySql / PostgreSQL</p>
                <p className="card__paragraph">MongoDB / Firestore</p>
              </div>
              <div className="card__item">
                <h3 className="card__title">Others</h3>
                <p className="card__paragraph">Git</p>
                <p className="card__paragraph">Jira / Confluence</p>
                <p className="card__paragraph">Project Lead</p>
              </div>
              <div className="card__item">
                <h3 className="card__title">Frontend</h3>
                <p className="card__paragraph">Javascript / Typescript</p>
                <p className="card__paragraph">React.js / Redux / Hooks / Context</p>
                <p className="card__paragraph">Next.js / SSR / SSG</p>
                <p className="card__paragraph">Angular</p>
                <p className="card__paragraph">Flexbox / CssGrid</p>
              </div>

            </div>
          </div>
        </section>


        <section className="testimony">
          <div className="testimony__container container">
            <Image width="64" height="64" src="/img/leftArrow.svg" alt="left_arrow" className="testimony__arrow" id="before" />
            <section className="testimony__body testimony__body--show" data-id="1">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Giovanni Giannola
                  <span className="testimony__course">CEO at Globalesm, Inc</span>
                </h2>
                <p className="testimony__review">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni necessitatibus, cumque harum
                  suscipit natus error provident beatae facere repellat eum eveniet nobis consequuntur sit dicta placeat
                  quasi quibusdam quos"
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/face2.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="2">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Leopoldo Sandoval
                  <span className="testimony__course">CEO at Avanti</span>
                </h2>
                <p className="testimony__review">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni necessitatibus, cumque harum
                  suscipit natus error provident beatae facere repellat eum eveniet nobis consequuntur sit dicta placeat
                  quasi quibusdam quos"
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/face2.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="3">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Luis Miguel Esteban Lara
                  <span className="testimony__course">CEO at Portefy</span>
                </h2>
                <p className="testimony__review">
                  "Delighted with Alejandro's professionalism, attitude and knowledge. We asked him to develop the
                  webapp interface and he customized it to the smallest detail.
                  We managed to coordinate perfectly despite the time difference between our countries.
                </p>
                <br></br>
                <p className="testimony__review">
                  Recommended if you need a developer you can trust, and who fits the specified details."
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/face1.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="4">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Karel y Michel
                  <span className="testimony__course">Co-founders at CargoMe</span>
                </h2>
                <p className="testimony__review">
                  "Alejandro is very dedicated, his work has been of high quality. We are creating an extension to the
                  original
                  original project"
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/face3.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>


            <Image width="64" height="64" src="/img/rightArrow.svg" alt="right_arrow" className="testimony__arrow" id="after" />
          </div>
        </section>

        <footer className="footer" id="footer">
          <div className="footer__container">
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
          <div className="footer__down">
            © Copyright by 2021 Alejandro Roa
          </div>
        </footer>
      </main>
      <Script
        id="nav-js"
        src="/js/nav.js"
      />
       <Script
        id="slider-js"
        src="/js/slider.js"
      />
    </>
  )
}
