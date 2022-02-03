import Image from 'next/image'
import Script from 'next/script'
import HeaderBlog from '../components/headerBlog'
import FooterBlog from '../components/footerBlog'
import ContactForm from '../components/contactForm'

export default function Home() {
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-164272795-1', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
      <HeaderBlog />

      <div>
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
                I work as frontend developer, but i can work in the backend too for colaborate with the team. 
              </p>
              <p className="knowledge__paragraph">
                I like resolve problems of companies with tecnology
              </p>
              <p className="knowledge__paragraph">
                I work with : Javascript, Typescript, Angular, React.js, Next.js, Jest, Jest-axe, Flexbox, CssGrid, Node.js, Express.js, Nest.js, Php, Laravel, MongoDB, MySQL, PostgreSQL.
              </p>
              <p className="knowledge__paragraph">
                I am interested in PWA, C# and Web3
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
                <p className="card__paragraph">MongoDB</p>
              </div>
              <div className="card__item">
                <h3 className="card__title">Others</h3>
                <p className="card__paragraph">Git</p>
                <p className="card__paragraph">Mirth</p>
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


        <section className="testimony" id="testimony">
          <div className="testimony__container container">
            <Image width="64" height="64" src="/img/leftArrow.svg" alt="left_arrow" className="testimony__arrow" id="before" />
            <section className="testimony__body testimony__body--show" data-id="1">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Giovanni Giannola
                  <span className="testimony__course">CEO at Globalesm, Inc</span>
                </h2>
                <p className="testimony__review">
                  "Alejandro is a good developer who has worked with us on the creation and maintenance of our Claims Connect product. We feel very comfortable working with him."
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/gioface.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="2">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Gabriel Pasqualini
                  <span className="testimony__course">CEO at Pulpou</span>
                </h2>
                <p className="testimony__review">
                  "We really enjoyed working with Alejandro, he has good communication and works very well as a team player. He developed some functionalities for our platform."
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/gabiface.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="3">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Leopoldo Sandoval
                  <span className="testimony__course">Co-Founder at Avanti</span>
                </h2>
                <p className="testimony__review">
                  "Alejandro developed for us a simple and easy to use order cart for our customers, we have a great communication and we are happy to have worked together!"
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="300" height="300" src="/img/leopoldoface.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="4">
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
                <Image width="300" height="300" src="/img/laraface.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>
            <section className="testimony__body" data-id="5">
              <div className="testimony__texts">
                <h2 className="subtitle">
                  Karel Alvarez y Michel Adam
                  <span className="testimony__course">Co-founders at Cat Reflex Solutions</span>
                </h2>
                <p className="testimony__review">
                  "Alejandro is very dedicated, his work has been of high quality"
                </p>
              </div>
              <figure className="testimony__picture">
                <Image width="150" height="150" src="/img/michelface.jpg" alt="face" className="testimony__img testimony-two" />
                <Image width="150" height="150" src="/img/karelface.jpg" alt="face" className="testimony__img" />
              </figure>
            </section>


            <Image width="64" height="64" src="/img/rightArrow.svg" alt="right_arrow" className="testimony__arrow" id="after" />
          </div>
        </section>
      </div>

      <section className="container about" id="footer">
        <h2 className="subtitle">Contact me</h2>
        <ContactForm />
      </section>

      <FooterBlog />

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
