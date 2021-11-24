import InternalEnHeaderPost from '../../../components/internalEnHeaderPost'
import FooterBlog from '../../../components/footerBlog'
import Script from 'next/script'

export default function Post() {
  return (
    <>
      <InternalEnHeaderPost />
      <section className="post" id="main">
        <div className="post__container container">
          <section class="items-detail-container" id="post">
            <article>Para nosotros los desarrolladores que venimos de hacer backend suele ser un poco
              confuso el cómo desarrollar buenas interfaces de usuario, en mi caso personal, me costaba
              entender qué pasos seguir para lograr una meta en específico y ello va desde la maquetación,
              los estilos, el responsive design, la implementación de los assets, las fuentes, la paleta de colores,
              y qué tipo de formato usar para imágenes o íconos. Además el SEO: cómo configurarlo de forma correcta.
            </article>
            <article>
              El 100% de los proyectos en los cuales participé y tuve la tarea de desarrollar la UI seleccioné Bootstrap
              como framework porque en mi desconocimiento e incluso algo de miedo, buscaba un atajo para hacer algo
              decente.
              Y si, como pueden suponer, los resultados pocas veces fueron buenos.
            </article>
            <article>
              Todo esto también se debe a que pocas veces he trabajado en oficina, con personas buenas haciendo UI
              entonces es difícil entender cómo comenzar, qué tener en cuenta o cómo ayudarse. Esto sumado al poco
              interés que tenía
              por esta materia, ya que estando en esos momentos trabajando solo en el backend me tenia conforme.
            </article>
            <article>
              Luego de esa larga introducción ahora si, entremos en materia:
            </article>
            <article>
              <span class="post-subtitle">
                Arquitectura el website:
              </span>
              Esto aplica para todo tipo de proyecto, en este caso,
              al desarrollar una buena UI necesitas entender cómo se va comportar el proyecto para que puedas distribuir
              de una forma
              adecuada los items que vas a crear. Este blog está desarrollado con puro Html, Css y Javascript, no he usado
              ningún framework para ello,
              mi idea es migrar a Gatsby luego pero eso es otro tema, el punto es que esta aplicación es una web estática
              y la
              finalidad de la misma es desplegar el proyecto rápido, ahorrando tiempo, por
              ende la arquitectura que estoy usando puede
              no ser muy escalable pero por los momentos cubre lo que necesito. Además, al montar un website que va
              implementar SEO se debe tener en cuenta que,
              las SPA no funcionan para ello. Por esto es que es IMPORTANTE saber la finalidad del website, si se va
              implementar SEO o no
              y si los requerimientos del equipo de diseño son los adecuados para esto (por algo se los digo)
            </article>
            <article>
              <span class="post-subtitle">
                Herramientas a usar:
              </span>
              Si tienes conocimiento de diseño gráfico o diseño de interfaces tal vez se te haga fácil poder configurar
              una paleta de colores para
              cada sección y los assets adecuados pero, ¿qué sucede con los developers que no tenemos este conocimiento?
              entendí que es importante apoyarse
              en herramientas que nos ayudan en varios puntos:
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://uigradients.com/" target="_blank">UIGRADIENTS: </a>
              </span>
              Tienes una buena alternativas de gradientes para usar en tu sitio web.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://webgradients.com/" target="_blank">WEBGRADIENTS: </a>
              </span>
              Otra buena herramienta para que puedas seleccionar los gradientes para tu website.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://flatuicolors.com/" target="_blank">FLATUICOLORS: </a>
              </span>
              Permite seleccionar paleta de colores.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://bennettfeely.com/clippy/" target="_blank">BENNETTFEELY: </a>
              </span>
              Permite simular en base a coordenadas la funcion clip-path de css para aplicarlo a nuestro sitios.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://fontawesome.com/" target="_blank">FONTAWESOME: </a>
              </span>
              Este lugar es famoso, puedes bajar los mejores iconos para tu website.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://fonts.google.com/" target="_blank">GOOGLE FONTS: </a>
              </span>
              Algo que no puede faltar, seleccionar fuentes adecuadas para nuestro sitio.
            </article>
            <article>
              <span class="post-subtitle">
                La calidad de los assets:
              </span>
              ¿Te han dado assets en un documento de word? ¿te han dado imágenes gigantes y muy pequeñas para colocar
              en una sola sección que tiene relación?
              De los assets depende en gran pante el rendimiento de nuestro website al cargar por primera vez, debes tener
              en cuenta lo siguiente:
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                Intenta en lo posible que las imágenes, logos e iconos sean SVG:
              </span>
              es un tipo de imágen digital formada mediante gráficos vectoriales, es decir, las imágenes que se guardan en
              este formato deben poder ser
              representada como gráficos vectoriales y funciones matemáticas,
              a diferencia de lo que ocurre con las imágenes de mapa de bits (JPG, PNG, etc)
              donde cada pixel de la imágen tiene su propia información.
            </article>
            <article>
              Cuando tenemos una imágen de mapa de bits y la ampliamos podemos apreciar una pérdida notable de calidad,
              llegando incluso a ser totalmente borrosa si la ampliamos demasiado. Esto se debe a que al hacer zoom sobre
              una imagen
              con mapa de bits estamos ampliando cada pixel de forma individual, lo que genera una pérdida de calidad.
            </article>
            <article>
              Por el contrario, al hacer zoom a una imágen vectorial, gracias a las propiedades matemáticas de los
              vectores, la imagen vuelve a dibujarse de nuevo multiplicando su vector por el valor del zoom que estemos
              realizando.
              De esta manera, la imágen se redibuja desde cero con una calidad del 100% y sin ningún tipo de pérdida.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                El tamaño de las imágenes deben ser las adecuadas para cada sección:
              </span>
              Si tienes que usar Css para redimensionar una imágen en tu website estás cometiendo un error (yo debo
              arreglar ese detallito en un punto en este website)
              NO es una buena práctica, daña el rendimiento del sitio.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                Si no es posible que una imágen sea formato SVG entonces optimiza dicha imágen para la web:
              </span>
              Existen algunas herramientas online que permite esto, solo debes subir dicho asset y descargarlo optimizado.
            </article>
            <article>
              <span class="post-subtitle">
                Las tecnologías a implementar:
              </span>
              Aprende Flexbox y CssGrid. no intentes usar un framework porque pareciera ser un "atajo" para maquetar por
              la distribución de los grids, la mayoría de veces esas configuraciones no cumplen las expectativas de los
              proyectos
              que tenemos que desarrollar, no la cagues como yo xD.
            </article>
            <article>
              Bueno amigos, espero que les sirva este post, estoy feliz porque al fin creo que soy bueno haciendo UI y eso
              me abre la mente
              para entender otras cosas importantes que tal vez no tiene que ver mucho con código ¿de qué sirve montar un
              website si no hace dinero?
              se las dejo por ahí. Saludos!
            </article>
          </section>

          <section class="hashtags-container">
            <div class="hashtag">#Desarrollo UI</div>
            <div class="hashtag">#Herramientas UI</div>
            <div class="hashtag">#Flexbox</div>
            <div class="hashtag">#CssGrid</div>
            <div class="hashtag">#Javascript</div>
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
