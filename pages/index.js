import Image from 'next/image'

export default function Home() {
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

            <img alt="close" class="nav__close" />
          </ul>

          <div class="nav__menu">
            <img alt="nav" class="nav__img" />
          </div>
        </nav>

        <section class="hero__container container" id="home">
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
        <section class="container about" id="main">
          <h2 class="subtitle">I am a professional who understands your needs</h2>
          <p class="about__paragraph">
            I have experience in creating software projects from scratch, I can raise functional and non-functional
            requirements, create databases, Apis and frontend.
          </p>
          <p class="about__paragraph">
            I can lead small software development teams, working with the project manager to understand priorities,
            timelines and effectively distribute the human resources of the team.
          </p>
        </section>

        <section class="knowledge">
          <div class="knowledge__container container">
            <div class="knowledge__texts">
              <h2 class="subtitle">Software Enginner</h2>
              <p class="knowledge__paragraph">
                I have seven years of experience like developer, i worked with companies of Latam, Spain and USA.
              </p>
              <p class="knowledge__paragraph">
                I worked as a freelance at Workana.
              </p>
              <p class="knowledge__paragraph">
                I like resolve problems of companies with tecnology, in this moment i working with a great team! yei!
              </p>
              <p class="knowledge__paragraph">
                My specialties are : Javascript, React.js, Redux, Context, Thunk, Hooks, Next.js, Typescript, Angular, Jest,
                Jest-axe, Flexbox, CssGrid, Node.js, Express.js, Nest.js, MongoDB, MySQL, PostgreSQL, AWS RDS.
              </p>
            </div>

            <figure class="knowledge__picture">
              <Image src="/img/pc2.jpg" alt="know" class="knowledge_img"
               width="800" height="600" />
            </figure>
          </div>
        </section>

        <section class="card" id="skills">
          <div class="container">

            <h2 class="subtitle">Skills</h2>
            <div class="card__container">
              <div class="card__item">
                <h3 class="card__title">Backend</h3>
                <p class="card__paragraph">Node.js / Express.js / Nest.js</p>
                <p class="card__paragraph">Sequelize / TypeOrm</p>
                <p class="card__paragraph">Php / Laravel</p>
              </div>
              <div class="card__item">
                <h3 class="card__title">Databases</h3>
                <p class="card__paragraph">MySql / PostgreSQL</p>
                <p class="card__paragraph">MongoDB / Firestore</p>
              </div>
              <div class="card__item">
                <h3 class="card__title">Others</h3>
                <p class="card__paragraph">Git</p>
                <p class="card__paragraph">Jira / Confluence</p>
                <p class="card__paragraph">Project Lead</p>
              </div>
              <div class="card__item">
                <h3 class="card__title">Frontend</h3>
                <p class="card__paragraph">Javascript / Typescript</p>
                <p class="card__paragraph">React.js / Redux / Hooks / Context</p>
                <p class="card__paragraph">Next.js / SSR / SSG</p>
                <p class="card__paragraph">Angular</p>
                <p class="card__paragraph">Flexbox / CssGrid</p>
              </div>

            </div>
          </div>
        </section>


        <section class="testimony">
          <div class="testimony__container container">
            <Image width="64" height="64" src="/img/leftArrow.svg" alt="left_arrow" class="testimony__arrow" id="before" />
            <section class="testimony__body testimony__body--show" data-id="1">
              <div class="testimony__texts">
                <h2 class="subtitle">
                  Giovanni Giannola
                  <span class="testimony__course">CEO at Globalesm, Inc</span>
                </h2>
                <p class="testimony__review">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni necessitatibus, cumque harum
                  suscipit natus error provident beatae facere repellat eum eveniet nobis consequuntur sit dicta placeat
                  quasi quibusdam quos"
                </p>
              </div>
              <figure class="testimony__picture">
                <Image width="300" height="300" src="/img/face2.jpg" alt="face" class="testimony__img" />
              </figure>
            </section>
            <section class="testimony__body" data-id="2">
              <div class="testimony__texts">
                <h2 class="subtitle">
                  Leopoldo Sandoval
                  <span class="testimony__course">CEO at Avanti</span>
                </h2>
                <p class="testimony__review">
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni necessitatibus, cumque harum
                  suscipit natus error provident beatae facere repellat eum eveniet nobis consequuntur sit dicta placeat
                  quasi quibusdam quos"
                </p>
              </div>
              <figure class="testimony__picture">
                <Image width="300" height="300" src="/img/face2.jpg" alt="face" class="testimony__img" />
              </figure>
            </section>
            <section class="testimony__body" data-id="3">
              <div class="testimony__texts">
                <h2 class="subtitle">
                  Luis Miguel Esteban Lara
                  <span class="testimony__course">CEO at Portefy</span>
                </h2>
                <p class="testimony__review">
                  "Delighted with Alejandro's professionalism, attitude and knowledge. We asked him to develop the
                  webapp interface and he customized it to the smallest detail.
                  We managed to coordinate perfectly despite the time difference between our countries.
                </p>
                <br></br>
                <p class="testimony__review">
                  Recommended if you need a developer you can trust, and who fits the specified details."
                </p>
              </div>
              <figure class="testimony__picture">
                <Image width="300" height="300" src="/img/face1.jpg" alt="face" class="testimony__img" />
              </figure>
            </section>
            <section class="testimony__body" data-id="4">
              <div class="testimony__texts">
                <h2 class="subtitle">
                  Karel y Michel
                  <span class="testimony__course">Co-founders at CargoMe</span>
                </h2>
                <p class="testimony__review">
                  "Alejandro is very dedicated, his work has been of high quality. We are creating an extension to the
                  original
                  original project"
                </p>
              </div>
              <figure class="testimony__picture">
                <Image width="300" height="300" src="/img/face3.jpg" alt="face" class="testimony__img" />
              </figure>
            </section>


            <Image width="64" height="64" src="/img/rightArrow.svg" alt="right_arrow" class="testimony__arrow" id="after" />
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
