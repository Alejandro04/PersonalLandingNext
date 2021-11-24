import InternalEnHeaderPost from '../../../components/InternalEnHeaderPost'
import FooterBlog from '../../../components/footerBlog'
import Script from 'next/script'
import Image from 'next/image'

export default function Post() {
    return (
        <>
            <InternalEnHeaderPost />
            <section className="post" id="main">
                <div className="post__container container">
                    <section class="items-detail-container" id="post">
                        <article>
                            Una de las cosas que debemos tener en mente en aprender cuando desarrollamos en el frontend
                            es cómo pasar los datos entre componentes y a nivel lógico cómo pasarlos entre padres a hijos y de hijos a padres
                            ya que ese flujo de datos nos va ayudar a definir componentes de una forma organizada en el proyecto y también
                            ayudará a ejecutar un soporte adecuado del mismo en el transcurso del tiempo.
                        </article>
                        <article>
                            En Angular conozco un par de formas: Inputs (de padres a hijos) Outputs (de hijos a padres) y a través de un store, este último caso lo
                            veremos luego.
                        </article>
                        <article>
                            Para estos ejemplos vamos a usar el proyecto explicado <a target="_blank" href="/blog/es/introduccion-angular-angularmaterial-firebase">En el tutorial anterior</a>
                        </article>
                        <article>
                            Vamos a components/plates/plates.component.html. Podemos observar dos cosas, de la linea 1 a la 21
                            un acordión de AngularMaterial que lleva dentro de él un pequeño formulario para guardar y editar los platos.
                        </article>
                        <article>
                            Luego, entre las lineas 22 a 26 tenemos app-plates-list, es decir, el componente hijo. Podemos observar que tiene
                            una configuración especial y con ello parte de las funcionalidades de envío y recepción de datos.
                        </article>
                        <article>
                            Ahora, vamos a explicar cada uno de los procesos:
                        </article>
                        <article>
                            <span class="post-subtitle">
                                Inputs:
                            </span>
                            ¿Cómo comienza el flujo de datos? en la linea 18 podemos ver la función createPlate() y dicha función nos permite envíar datos al controlador y agregarlos al input tipo FormControl.
                            FormControl es una funcionalidad de @angular/forms y nos permite usar componentes reactivos para nuestros
                            formularios.
                        </article>
                        <article>
                            Ahora bien, recordemos que este proyecto está en base a Firebase, por lo tanto debemos
                            integrar sus funciones a nuestros controladores e inyectar sus dependencias para usar sus funciones.
                            Este caso particular divide el proceso en dos, identificar si la acción del formulario es para registrar un nuevo
                            plato o si es para actualizar un plato existente. No entro más en detalle para no perder el hilo de lo que necesitamos
                            comprender para este post.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/1-min.png" alt="angular1" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/2-min.png" alt="angular2" />
                            </div>

                        </article>
                        <article>
                            ¿Cuál es la idea? guardar un plato y visualizarlo de forma reactiva en nuestra tabla que lista los platos
                            (componente hijo) entonces veamos:
                        </article>
                        <article>
                            Luego de que firebase en este caso guarde los datos nosotros necesitamos configurar un proceso que permita visualizar
                            dichos datos. Entonces, en el constructor de nuestro componente llamamos la colección de platos y se la pasamos a una variable plates.
                            plates es un array tipo observable. ¿Por qué observable? porque firestore (en este caso la DB que estamos usando de firebase)
                            va devolver siempre un observable y como estamos escribiendo en Typescript debemos definirlo como tal.
                            Luego en nuestra vista configuramos un key mediante el cual vamos a pasarle ese array a nuestro componente hijo.
                            Pueden ver las lineas 22 y 29 del constructor. Linea 25 del template.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/3-min.png" alt="angular3" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/4-min.png" alt="angular4" />
                            </div>
                        </article>
                        <article>
                            En nuestro componente hijo (lista de platos) definimos en la linea 11 @Input() plates: any[];
                            Input es un módulo de @angular/core y plates es el key que definimos en el template del componente padre.
                            Allí entonces, estamos recibiendo la lista de platos. En la función ngOnChanges pasamos esa lista dataSource que es una variable
                            tipo MatTableModule y que va permitir la visualización del mismo a través del template. En el template simplemente
                            accedemos a los keys de dicho array. Estos items están en la docu de Angular Material.
                            Pueden ver las lineas 11 y 17 del controlador.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/5-min.png" alt="angular5" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/6-min.png" alt="angular6" />
                            </div>
                        </article>
                        <article>
                            Entonces en resumen. Configuramos nuestro componente padre, definimos los tipos de datos en nuestros controladores
                            y pasamos a través del componente hijo definido en el template del padre un key y su respectivo value. En el componente
                            hijo definimos una variable tipo Input que va recibir dicho dato.
                        </article>
                        <article>
                            <span class="post-subtitle">
                                Outputs:
                            </span>
                            ¿Qué necesitamos en este caso? en la tabla de platos tenemos un botón tipo pencil, este botón envía
                            los datos del componente hijo (la tabla que lista los platos) al componente padre (el formulario)
                            entonces configuramos lo siguiente en el componente hijo:
                        </article>
                        <article>
                            EventEmitter y Output de @angular/core nos permite ejecutar este proceso, entonces los definimos de la siguiente manera:
                            En la linea escribimos un Output tipo EventEmitter llamado plateEvent, esta variable va comunicarse con nuestro componente
                            padre. Esto lo podemos ver en la linea 12
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/7-min.png" alt="angular7" />
                            </div>
                        </article>
                        <article>
                            En nuestro template definimos la función a ejecutar cuando el usuario da click sobre el botón tipo pencil, esto lo
                            podemos ver en la linea 13
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/8-min.png" alt="angular8" />
                            </div>
                        </article>
                        <article>
                            Después en nuestro controlador definimos la función addPlateToForm(value: string) que va recibir el value
                            que se le envía desde el form y se accede a la función emit (ya que plateEvent es un Output tipo EventEmitter)
                            Esto de forma concreta envía el dato al componente padre. Pueden ver la linea 22
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/9-min.png" alt="angular9" />
                            </div>
                        </article>
                        <article>
                            Ahora bien, para terminar de comprender el flujo de datos volvamos al template del componente padre donde tenemos
                            definido el componente hijo en la linea 23, vemos que configuramos el key del Output tipo EventEmitter definido en el
                            hijo con la función addPlateToForm($event) que es la que se encarga finalmente de colocar el dato en el formulario.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/10-min.png" alt="angular10" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/11-min.png" alt="angular11" />
                            </div>
                        </article>
                        <article>
                            Y listo! ya estudiamos como pasar datos entre componentes padres e hijos con Angular.
                        </article>
                        <article>
                            Pueden clonar el proyecto <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular">AQUÍ</a>
                        </article>
                        <article>
                            Pueden ver el proyecto en producción <a target="_blank" href="https://restaurants-angular.vercel.app/">AQUÍ</a>
                        </article>
                        <article>
                            Espero que les sirva, saludos!
                        </article>

                    </section>

                    <section class="hashtags-container">
                        <div class="hashtag">#Typescript</div>
                        <div class="hashtag">#Angular</div>
                        <div class="hashtag">#Components</div>
                        <div class="hashtag">#Inputs</div>
                        <div class="hashtag">#Outputs</div>
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
