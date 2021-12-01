import InternalEsHeaderPost from '../../../components/internalEsHeaderPost'
import FooterBlog from '../../../components/footerBlog'
import Script from 'next/script'
import Image from 'next/image'

export default function Post() {
  return (
    <>
      <InternalEsHeaderPost />
      <section className="post" id="main">
        <div className="post__container container">
          <section class="items-detail-container" id="post">
            <article>
              Las pruebas de accesibilidad vienen a complementar los test unitarios a nivel de frontend, ya que estas permiten verificar si los componentes que hemos implementado funcionan correctamente para nuestro proyecto, pero no alcanzan a verificar si dichos componentes están escritos correctamente.
            </article>
            <article>
              <a href="https://nx.dev/" target="_blank">
                Nx
              </a>
              es una tecnología que nos ayuda a ejecutar este tipo de pruebas sobre herramientas en el frontend ya sea React.js o Angular. Nx tiene su propia arquitectura propuesta para cada una de las opciones presentes en función de facilitar la integración con herramientas de test

              Para ejecutar los test de accesibilidad vamos a usar:
            </article>
            <article>
              <p>
                <a href="https://testing-library.com/" target="_blank">
                  Testing Library
                </a>
              </p>
              <p>
                <a href="https://github.com/nickcolley/jest-axe" target="_blank">
                  Jest-Axe
                </a>
              </p>
            </article>
            <article>
              Vamos a usar NX para implementar nuestros test de accesibilidad en función de Angular:
            </article>
            <article>
              <span class="post-subtitle">
                1. Instalamos de forma global el cli de Nx:
              </span>
              <pre>
                npm i -g nx
              </pre>
            </article>
            <article>
              <span class="post-subtitle">
                2. Instalamos de forma global npx
              </span>
              <pre>
                npm install -g npx
              </pre>
            </article>
            <article>
              <span class="post-subtitle">
                3. Instalamos nuestro proyecto
              </span>
              <pre>
                npx create-nx-workspace --preset=angular
              </pre>
            </article>
            <article>
              <span class="post-subtitle">
                4. Agregamos jest-axe, sus tipos y testing library en el package.json
              </span>
              <p>
                <span class="post-subtitle">dependencies:</span>
              </p>
              <pre>
                <p>"@testing-library/dom": "^7.24.1",</p>
                <p>"@testing-library/user-event": "^12.0.11",</p>
              </pre>
              <p>
                <span class="post-subtitle">devDependencies:</span>
              </p>
              <pre>
                <p> "@testing-library/angular": "^10.3.1",</p>
                <p> "@testing-library/jest-dom": "^5.11.0",</p>
              </pre>
            </article>
            <article>
              <span class="post-subtitle">
                5. Ejecutamos
              </span>
              <pre>
                npm install
              </pre>
            </article>

            <article>
              <span class="post-subtitle">
                6. Visualizamos la arquitectura del proyecto:
              </span>

              <div class="img-post-container">
                <Image width="400px" height="500px" src="/img/posts/angular_accesibilidad/2.jpg" alt="accesibilidad-1" />
              </div>
              <div class="img-post-container">
                <Image width="400px" height="500px" src="/img/posts/angular_accesibilidad/3.jpg" alt="accesibilidad-2" />
              </div>
            </article>

            <article>
              <span class="post-subtitle">
                7. Creamos nuestro archivo para test:
              </span>
              <p>
                app.component.spec.ts y escribimos nuestra prueba de accesibilidad
              </p>

              <div class="img-post-container">
                <Image width="800px" height="500px" src="/img/posts/angular_accesibilidad/4.jpg" alt="accesibilidad-4" />
              </div>
            </article>

            <article>
              <span class="post-subtitle">
                8. La función toHaveNoViolations()
              </span>
              <p>
                Nos ayuda a validar si el html que hemos escrito es correcto, no tenemos que hacer absolutamente más nada. Si que se puede customizar, pero no es necesario.
              </p>
              <p>
                <span class="post-subtitle"> Importante:</span> No se asusten con las lineas rojas que muestra mi editor de código, algo está roto, pero no es el código.
              </p>

              <div class="img-post-container">
                <Image width="800px" height="500px" src="/img/posts/angular_accesibilidad/4.jpg" alt="accesibilidad-4" />
              </div>
            </article>

            <article>
              <span class="post-subtitle">
                9. Corremos nuestro test de accesibilidad
              </span>
              <p>
                En este caso he implementado dos inputs, uno correcto y otro incorrecto, por lo tanto la prueba debe tener una falla:
              </p>
              <pre>
                npm run test
              </pre>

              <div class="img-post-container">
                <Image width="800px" height="400px" src="/img/posts/angular_accesibilidad/5.jpg" alt="accesibilidad-5" />
              </div>
              <div class="img-post-container">
                <Image width="800px" height="400px" src="/img/posts/angular_accesibilidad/6.jpg" alt="accesibilidad-6" />
              </div>
            </article>

            <article>
              <span class="post-subtitle">
                10. Reglas de accesibilidad
              </span>
              <p>
                Jest-Axe es inspirado en axe-core el cual, en su repositorio de Github explica las reglas de accesibilidad de forma explicita, puedes ver las formas correctas e incorrectas de implementación de cada componente. Del lado derecho pueden ver la columna ACT-Rules y allí el link que los redirige a los ejemplos por elemento.
              </p>
            </article>
            <article>
              Ese repositorio lo pueden ver <a href="https://github.com/Alejandro04/NxAngular" target="_blank">AQUÍ</a>
            </article>
            <article>
              Espero que les sirva, saludos!
            </article>
          </section>


          <section class="hashtags-container">
            <div class="hashtag">#Jest-Axe</div>
            <div class="hashtag">#Accessibility Test</div>
            <div class="hashtag">#Angular</div>
          </section>
        </div>
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
