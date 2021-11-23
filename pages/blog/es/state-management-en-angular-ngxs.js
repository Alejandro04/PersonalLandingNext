import HeaderBlog from '../../../components/headerBlog'
import FooterBlog from '../../../components/footerBlog'
import Script from 'next/script'
import Image from 'next/image'

export default function Post() {
  return (
    <>
      <HeaderBlog />

      <section className="post" id="main">
        <div className="post__container container">
          <section class="items-detail-container" id="post">
            <article>
              Ngxs es un state management desarrollado para Angular el cual contiene un flow similar al de redux
            </article>
            <article>
              Recordemos que un manejador de estados es una herramienta que nos permite centralizar los estados
              de nuestras aplicaciones, lo cual facilita al acceso de los datos sin la necesidad de estar accediendo
              a los mismos de formas pocas fluidas, esto sucede más que todo cuando la aplicación crece mucho.
              A continuación muestro el flujo de datos que aplica, esta imágen es cortesía de la documentación oficial de
              Ngxs el cual puedes acceder <a target="_blank" href="https://www.ngxs.io/">AQUÍ</a>
              <div class="img-post-container">
                <Image src="/img/posts/ngxs/1-min.png" width="600px" height="300px" alt="ngxs1" />
              </div>
            </article>
            <article>
              Analizando el flujo encontramos: Desde el componente se dispara una acción donde el mismo verifica
              con el backend o con plugins instalados la data que debe obtener, cuando la obtiene muta la misma y se la pasa
              al store
              y el store devuelve el nuevo estado al componente.
            </article>
            <article>
              Ejemplo: Cuando guardamos datos desde un formulario, al presionar el botón "guardar" se dispara la acción
              que interactura con las entidades (plugins, apis, otros) y al obtener la respuesta la envía al store y el store
              devuelve el nuevo estado (la lista de datos con el nuevo dato agregado)
            </article>
            <article>
              Veamos en código el ejemplo: Vamos a usar el mismo proyecto explicado en los post anteriores:
              <a target="_blank" href="/posts/introduccion-angular-angularmaterial-firebase">Introducción a Angular</a>
              y
              <a target="_blank" href="/posts/inputs-y-outputs-en-angular">Inputs y Outputs</a>
              Recordando que pueden clonar dicho proyecto <a target="_blank"
                href="https://github.com/Alejandro04/Restaurants-Angular">AQUÍ</a>
            </article>
            <article>
              Instalamos nuestras dependencias de la siguiente forma:
            </article>
            <article>
              npm install @ngxs/store --save
            </article>
            <article>
              Es importante que, para que puedas verificar
              el comportamiento del estado al momento de desarrollar
              instales los siguientes plugins:
            </article>
            <article>
              npm install @ngxs/devtools-plugin
            </article>
            <article>
              npm install @ngxs/logger-plugin
            </article>
            <article>
              Algo que te recomiendo es instalar el CLI de Ngxs lo cual te va ahorrar mucho tiempo a la hora
              de desarrollar:
              npm install @ngxs/cli -g
            </article>
            <article>
              Para implementar Ngxs en nuestro proyecto debemos configurarlo en app.module.ts de la siguiente forma:
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/9-min.png" alt="ngxs9" />
              </div>
            </article>
            <article>
              En este proyecto vamos hacer el crud de proveedores el cual se va alimentar de un servicio,
              no vamos a consumir un API por temas de agilidad pero vamos a harcodear los datos en dicho servicio.
              Primero que nada vamos a construir nuestro state Management para providers: a través del CLI de Ngxs ejecutamos:
              ngxs --name providers --directory src
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/2-min.png" alt="ngxs2" />
              </div>
            </article>
            <article>
              Este comando me ha creado la carpeta state dentro de src y contiene: providers.action.ts la cual se encarga de
              configurar y
              ejecutar las acciones que vienen de los componentes, providers.sate.spec.ts que se encarga de ejecutar los test
              y
              y provider.state.ts que se encarga de configurar los estados que cada acción manipula.
            </article>
            <article>
              <span class="post-subtitle">
                providers.action.ts
              </span>
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/3-min.png" alt="ngxs3" />
              </div>
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/4-min.png" alt="ngxs3" />
              </div>
            </article>
            <article>
              Las acciones que vamos a ejecutar se basan en un crud y por ello
              configuramos las funciones pertinentes a cada item. Además en este caso llamamos a la interfaz
              provider que tiene definida nuestra entidad.
            </article>
            <article>
              <span class="post-subtitle">
                providers.state.ts
              </span>
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/5-min.png" alt="ngxs5" />
              </div>
            </article>
            <article>
              Importamos los módulos que necesitamos tanto del core de angular, de ngxs, las acciones
              que hemos definido y los servicios que usaremos.
            </article>
            <article>
              Vemos una clase ProviderStateModel que va configurar el estado inicial de nuestro módulo,
              en este caso tenemos un array tipo Provider llamado providers y un string llamado selectedProvider (que a lo
              largo del tutorial no lo usamos,
              pero que nos puede servir para tomar solamente un record individual y ejecutar acciones sobre dicho dato)
            </article>
            <article>
              Más adelante vemos un decorador @State que es necesario para que el Angular lo identifique y trabaje sobre
              las funciones que cambian los estados de forma correcta.
            </article>
            <article>
              Luego configuramos nuestra clase, constructor y funciones.
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/6-min.png" alt="ngxs6" />
              </div>
            </article>
            <article>
              En el constructor inyectamos el módulo de servicios que luego vamos a configurar, este servicio va interacturar
              entre la data
              y el store.
            </article>
            <article>
              El decordador @selector es parte de @ngxs/store y nos permite configurar un "puente" entre
              el estado y el componente, en este caso escribimos una función getProviderList que va obtener la lista
              de proveedores y que en el componente vamos a llamar de forma directa.
            </article>
            <article>
              Después, empezamos a escribir nuestras funciones correspondientes a cada acción (addProvider, UpdateProvider, DeleteProvider, GetProvider)
              Explicaremos AddProvider.
            </article>
            <article>
              <span class="post-subtitle">
                AddProvider:
              </span>
              Ngxs permite configurar dentro de sus funciones para manejar los estados features que son adecuados
              para cada tarea, en este caso sería getState y patchState. Ambos nos permiten manipular la data (el payload) que viene
              de la acción y configurar el nuevo estado resultante a través de un contexto.
              Este contexto va recibir un observable. Ese observable es la respuesta del servicio a la cual
              se le pasa el payload en conjunto con los features de ngxs (getState y patchState)
            </article>
            <article>
              Si, es un poco confuso al principio pero la clave para entender este proceso es ir
              función por función y entender qué hace cada cosa.
            </article>
            <article>
              Además, vemos dos funciones adicionales: pipe y tap. Pipe permite agrupar funciones para luego
              ejecutarlas y tap maneja datos de forma reactiva y devuelve un observable. El observable que devuelve en este caso
              es la copia del estado anterior y el payload del nuevo estado, es decir, la lista de providers con el nuevo
              dato que se almacenó. Las demás funciones que manejan los estados para cada acción pueden verlas
              <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular/blob/master/src/state/providers.state.ts">AQUÍ</a>
            </article>
            <article>
              Ya teniendo nuestro store configurado vamos a crear nuestro servicio. El servicio no es más que funciones que interactuan directamente
              con nuestras APIS o con datos harcodeados, como en este caso:
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/7-min.png" alt="ngxs7" />
              </div>
            </article>
            <article>
              Ya teniendo nuestro store y nuestro servicio listo vamos a los componentes, en este caso hemos creado providers (padre) y providers-list (hijo)
              los cuales van a intercambiar datos a través de inputs y outputs. Recuerda que para entender estos puntos puedes ir
              al <a target="_blank" href="/posts/inputs-y-outputs-en-angular">POST ANTERIOR</a>
            </article>
            <article>
              <span class="post-subtitle">
                providers.component.ts
              </span>
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/8-min.png" alt="ngxs8" />
              </div>
              Primero importamos los módulos necesarios (ngxs, servicios, acciones, interface)
              y luego configuramos nuestra clase. En la clase vemos lo siguiente en la linea 16:
            </article>
            <article>
              <span class="post-subtitle">
                @Select
              </span>
              Este decorador toma el estado configurado por @Selector de nuestro archivo provider.state.ts del store
              para luego manipularlo (enviarlo al template) y en nuestro constructor en la linea 19 ejecutamos
              la acción que llama a la lista de providers. Mejor dicho, la acción sale en la linea 19 y culmina en la linea 16 cuando pasa
              por todo el proceso. Para el resto de las funciones del componente pasa lo mismo, ejecutamos un Dispatch y
              el nuevo estado va devolver la lista de providers con el nuevo dato almacenado, pueden ver el archivo
              <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular/blob/master/src/app/components/providers/providers.component.ts">AQUÍ </a>
            </article>
            <article>
              Nuestro template es casi igual a los que hemos visto pero cabe acotar que en la linea 32 le estamos envíando
              al componente hijo la lista de providers a través del value providers$
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/10-min.png" alt="ngxs10" />
              </div>
            </article>
            <article>
              Entonces, en resumen: Ngxs nos permite tener un store con un flujo de datos simple: Componentes ejecutan acciones que iteran con los servicios y
              que devuelve un nuevo estado. Cabe recordar que los templates y la formas de pasar datos entre inputs y outputs es igual.
            </article>
            <article>
              Espero que les sirva y si, es confuso, lo importante es ir entendiendo los conceptos por separados y luego practicar.
            </article>
            <article>
              Pueden ver el sistema corriendo <a target="_blank" href="https://restaurants-angular.vercel.app/">AQUÍ</a>
            </article>
            <article>
              Saludos!
            </article>
          </section>
        </div>
      </section>

      <section class="hashtags-container">
        <div class="hashtag">#Typescript</div>
        <div class="hashtag">#Angular</div>
        <div class="hashtag">#Ngxs</div>
        <div class="hashtag">#StateManagement</div>
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
