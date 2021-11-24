import Image from 'next/image'

export default function MainBlog() {
  return (
    <>
      <section className="blog" id="main">
        <div className="blog__container">
          <div className="card-blog">
            <a href="/blog/es/implementar-una-buena-ui">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div className="labels-container">
                <label className="labelPosts">Desarrollar una buena UI</label>
                <p className="labelPostsResume">
                  Debemos tener en cuenta cuatro cosas elementales,
                  la arquitectura del website, las herramientas a usar, la calidad de los assets y
                  la tecnología a implementar.
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/blog/es/state-management-en-angular-ngxs">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div className="labels-container">
                <label className="labelPosts">State Management en Angular: Ngxs</label>
                <p className="labelPostsResume">
                  Un manejador de estados similar al flow de redux para Angular
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/blog/es/introduccion-angular-angularmaterial-y-firebase">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div class="labels-container">
                <label class="labelPosts">Introducción: Angular, AngularMaterial y Firebase</label>
                <p class="labelPostsResume">
                  Un buen stack de herramientas para desarrollar plataformas
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/blog/es/inputs-y-outputs-en-angular">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div class="labels-container">
                <label class="labelPosts">Inputs y Outputs en Angular</label>
                <p class="labelPostsResume">
                  Pasar datos de componentes padres a hijos y de hijos a padres
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
