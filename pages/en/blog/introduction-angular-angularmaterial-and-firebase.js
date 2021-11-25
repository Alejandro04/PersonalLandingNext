import InternalEnHeaderPost from '../../../components/internalEnHeaderPost'
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
                            Lo primero que debemos entender es que, necesitamos implementar una herramienta
                            que nos va ayudar a ser más productivos a la hora de trabajar con Angular, dicha herramienta
                            es <a target="_blank" href="https://cli.angular.io/">Angular Cli</a> y recomiendo instalarla en tu
                            máquina de forma global para acceder a sus funcionalidades.
                        </article>
                        <article>
                            También debemos instalar <a target="_blank" href="https://www.npmjs.com/package/firebase-tools">Firebase
                                Tools</a> de forma
                            global para acceder a las funcionalidades de firebase.
                        </article>
                        <article>
                            Es muy útil tener en cuenta la documentación de <a target="_blank" href="https://material.angular.io/">Angular
                                Material</a>
                            ya que usaremos algunos componentes de la misma. Cuando usamos Angular Material es muy importante tener en
                            cuenta
                            que necesitaremos tres módulos: @angular/material @angular/cdk @angular/animations. Puedes instalarlo vía npm.
                        </article>
                        <article>
                            Luego de esto podemos crear un proyecto nuevo o en su defecto, pueden descargar el repo que
                            he desarrollado <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular">AQUÍ</a> y seguir
                            el tutorial para entender cada módulo.
                            En caso de clonar, instalen las dependencias ejecutando npm install.
                        </article>
                        <article>
                            Ahora si en cuanto al proyecto: Lo primero que debemos entender es el flow con el cual un proyecto de este tipo
                            trabaja.
                            En nuestro caso a nivel de front implantaremos los módulos de AngularFirestore para interactuar con Firestore
                            como nuestra base de datos. Firestore es NoSQL y firebase nos ofrece su ecosistema para interactuar con él, lo
                            que
                            quiere decir que no tenemos la obligación de desarrollar un RestApi como backend. Existe la posibilidad de
                            usar Firebase Functions que son funciones que ejecutan eventos dentro de firebase, pero eso lo veremos en los
                            siguientes tutoriales.
                        </article>
                        <article>
                            Lo primero que debemos ver es nuestro archivo app.modules.ts donde vamos a configurar los módulos que
                            vamos a usar de forma global en nuestro proyecto, esto incluye las funcionalidades de Angular Material. También
                            vamos a configurar el acceso a Firebase. Para que puedas tener tus propias credenciales debes crear una cuenta
                            en Firebase,
                            después un proyecto y por último agregar Firestore al proyecto que creaste: Al llegar a este punto vas a
                            encontrar un script
                            con tus propios accesos. Por último debemos tener en cuenta los componentes que nosotros vamos a crear y usar
                            (OrdersComponent,
                            OrdersListComponent,
                            MainMenuComponent,
                            PlatesComponent,
                            PlatesListComponent)
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/1-min.jpg" alt="angular1" />                    </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/2-min.jpg" alt="angular2" />
                            </div>
                        </article>
                        <article>
                            Los módulos los podemos crear con el siguiente comando:
                            <span class="post-subtitle">
                                ng g c ruta/componente
                            </span>
                            es decir:
                            <span class="post-subtitle">
                                ng g c components/component
                            </span>
                        </article>
                        <article>
                            Al ejecutar el comando para crear un componente, el mismo va generar 4 archivos por defecto:
                            <span class="post-subtitle">
                                component.component.css:
                            </span>
                            Para escribir los estilos propios del componente.
                            <span class="post-subtitle">
                                component.component.html:
                            </span>
                            Para escribir el maquetado del componente.
                            <span class="post-subtitle">
                                component.component.ts:
                            </span>
                            Para escribir las funcionalidades del componente (es como un controlador)
                            <span class="post-subtitle">
                                component.component.spec.ts:
                            </span>
                            Para escribir el test del componente.
                        </article>
                        <article>
                            En nuestro caso queremos crear un componente que se encargue del menú. AngularMaterial nos ofrece un
                            "skeleton" para configurar lo que necesitamos, solo debemos ejecutar: ng c main-menu. Nuestro componente
                            va tener el siguiente html y ts por defecto. El html lo ajustamos a nuestras necesidades:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/3-min.jpg" alt="angular3" />
                            </div>
                            Además, cabe destacar que en la linea 25 llamamos al contenido que se refleje en el renderizado, es decir,
                            estamos frente a un "layout"
                        </article>
                        <article>
                            Luego de ello vamos a configurar nuestro archivo app-routing.module.ts done nuestras rutas van acceder
                            a nuestros componentes.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/4-min.jpg" alt="angular4" />
                            </div>
                        </article>
                        <article>
                            En Angular podemos llamar componentes dentro de componentes y pasarle propiedades, en este caso aplicaremos eso
                            para home donde va llamar dentro de su componente a orders pero sin pasarle propiedades.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/5-min.jpg" alt="angular5" />
                            </div>
                        </article>
                        <article>
                            Ahora si, vamos a entender el funcionamiento del proyecto en función de los datos: orders se va encargar de
                            dibujar
                            nuestra vista, agregando el titulo, el componente mat-accordion que nos permite dentro de él colocar
                            otros componentes y desplegarlos o no. Dentro del mismo agregamos un formulario donde crearemos la orden y la
                            lista
                            de platos disponibles.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/6-min.jpg" alt="angular6" />
                            </div>
                            En la linea 5 pasamos a las propiedades del componente mat-accordion opened and closed unas funcionalidades
                            que van a identificar cuando desplegar el acordión y cuando no. Dicha funcionalidad la aplica panelOpenState que
                            está
                            declarada en el "controlador" del componente.
                        </article>
                        <article>
                            En la linea 14 vamos a listar los platos disponibles, donde mostraremos su nombre con un checkbox que, al hacer
                            click,
                            podemos agregar o no a un array que va contener la lista de platos que se agregarán a la orden.
                        </article>
                        <article>
                            En la linea 36 vemos la función createOrder que se dispara cuando el usuario da click al botón Envíar,
                            esto con una pequeña validación que nos asegure que todos los datos necesarios están listos: Ordén, cliente y
                            por lo menos
                            un producto.
                        </article>
                        <article>Este último punto es bien interesante porque nos encontramos con un comportamiento reactivo,
                            dicho comportamiento se dá en este caso gracias a @angula/forms que permite instanciar los inputs
                            que se van a usar en los formularios, es por ello que en las lineas 14, 23 y 29 se agregan las propiedades
                            [formControl]="inputname" que termina de generar la reactividad.
                        </article>
                        <article>
                            Muy lindo todo pero, cómo funciona todo esto? veamos ahora nuestro controlador: Aquí llamamos AngularFirestore,
                            Observable de rxjs y FormControl de @angular/forms. También configuramos nuestras interfaces de Plate y Orders.
                            (si, interfaces, recuerden que estamos escribiendo en Typescript). Cuando el sistema crece es bueno crear una
                            carpeta
                            aparte y colocar allí las intefaces que necesitamos, entonces dentro de los controladores solo las llamamos.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/7-min.jpg" alt="angular7" />
                            </div>
                            El decorador @Component configura el selector del componente, el template y el archivo css que le pertenece a
                            dicho componente.
                        </article>
                        <article>
                            Ahora, veamos la clase: Nuestras variables plates y orders deben ser tipo Observables ya que, AngularFirestore
                            ve devolverle Observables
                            (de nuevo, estamos escribiendo en Typescript, el tipado es esctricto y debe definirse correctamente). Tenemos
                            también panelOpenState que maneja
                            la visualización del acordión en el front, platesSelected es el array donde se van almacenar los platos
                            seleccionados para crear la orden y
                            title es el título de la vista.
                        </article>
                        <article>
                            En nuestro constructor inyectamos AngularFirestore para poder acceder a sus propiedades dentro de la clase y
                            también hacemos un "get" a firestore de las ordenes
                            y los platos disponibles.
                        </article>
                        <article>
                            Tenemos dos funciones: addProduct(plate) que va agregar al array platesSelected el plato disponible y
                            createOrder(order) que va crear la orden.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/8-min.jpg" alt="angular8" />
                            </div>
                            Nota: me falta validar que, cuando un usuario desselecciona un plato se actualice el array de platos
                            seleccionados correctamente, acepto PR =)
                        </article>
                        <article>
                            Ahora bien, ya teniendo claro nuestro contexto sabemos que nos hace falta algo, cuál es el componente que lista
                            las ordenes? en la linea 43
                            de orders.component.html verán lo siguiente:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/9-min.jpg" alt="angular9" />
                            </div>
                            Aquí estamos llamando al componente app-orders-list y le estamos pasando la lista de ordenes que recibimos.
                            Es decir, app-orders-list vendría siendo un child de orders.
                        </article>
                        <article>
                            Ahora bien, veamos que se debe hacer en nuestro child componente (app-orders-list) para recibir dichos datos:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/10-min.jpg" alt="angular10" />
                            </div>
                            En la linea 10 vemos @Input orders: any[]; esta configuración permite recibir
                            un array de ordenes del componente padre.
                        </article>
                        <article>
                            También vale la pena destacar que, llamamos a MatTableModule (componente de Angular Material) para listar
                            nuestras ordenes
                            y ngOnChanges que va recibir dichas ordenes y las va pasar a la vista.
                            displayedColumns es un array que guarda los headers de MatTableModule. Estos detalles pueden verlos
                            en la docu de Angular Material.
                        </article>
                        <article>
                            Para finalizar, podemos ver el html de la lista de componentes:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/11-min.jpg" alt="angular11" />
                            </div>
                        </article>
                        <article>
                            El resultado:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/12-min.jpg" alt="angular12" />
                            </div>
                        </article>
                        <article>
                            Pueden ver el sistema en producción <a target="_blank" href="https://restaurants-angular.vercel.app/">AQUÍ</a>
                        </article>
                        <article>
                            Existe otra sección donde manejamos los platos disponibles, pero creo que este post ya está un poco extenso,
                            entonces
                            es mejor que puedan estudiarlo y cualquier duda me pueden comentar.
                        </article>
                        <article>
                            En lo personal me gusta Angular, creo que es una herramienta muy buena para hacer front y que la decisión
                            de usar esta u otras como React o Vue es tema de equipo, de proyecto, de empresa o de cliente.
                        </article>
                        <article>
                            Recuerden, pueden clonar el proyecto <a target="_blank"
                                href="https://github.com/Alejandro04/Restaurants-Angular">AQUÍ</a>
                        </article>
                        <article>
                            Espero que les sirva, saludos.
                        </article>
                        <article>
                            REFACTOR: Gracias a la recomendación de un amigo he realizado un pequeño refactor
                            en el archivo app.module.ts donde anteriormente colocamos los datos de acceso a firebase,
                            hemos quitado esto y lo agregamos en environment.ts ya que es la forma correcta.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/13-min.jpg" alt="angular13" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/14-min.jpg" alt="angular14" />
                            </div>
                        </article>
                    </section>

                    <section class="hashtags-container">
                        <div class="hashtag">#Typescript</div>
                        <div class="hashtag">#Angular</div>
                        <div class="hashtag">#AngularMaterial</div>
                        <div class="hashtag">#Firebase</div>
                        <div class="hashtag">#Firestore</div>
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
