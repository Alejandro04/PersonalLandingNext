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
                            Javascript es un lenguaje muy poderoso pero, tiene ciertos detalles que si no tenemos en cuenta podemos cometer errores.
                        </article>
                        <article>
                            Los problemas que podemos encontrar al no tener estos detalles en cuenta cuando desarrollamos con javascript van desde el performance de nuestra aplicación hasta problemas de data al no cuidar el tipado de una forma rigurosa, lo cual, en ambos casos tienden a ser deuda técnica que implicaría en graves problemas cuando nuestro sistema crece. Además, debemos pensar en que otros developers también van a tocar el código que estás escribiendo y por ello debes ser lo más legible posible. Claro, sabemos que javascript es un lenguaje que NO es fuerte de tipado y por ello muchos proyectos implementan Typescript, sin embargo existen en el mercado proyectos con JS y estamos obligados a tener siempre en cuenta los pequeños detalles. Te explico algunos de ellos:
                        </article>
                        <article>
                            <span class="post-subtitle">
                                1. Si los condicionales ejecutan una sola acción:
                            </span>
                            <div class="img-post-container">
                                <Image width="800px" height="500px" src="/img/posts/better_js/1.jpg" alt="js-1" />
                            </div>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                2. Cuando recibas datos de una DB o una API:
                            </span>
                            Y necesites validar si existen ciertos keys en tu objeto escribelo de esta forma. En caso de no conseguir el key la validación dará undefined, pero, en vez de envíar undefined mostramos algo que indique de una mejor forma que dicho key no existe en dicho objeto. Es decir, estamos escribiendo: si existe name en el objeto users retornalo, si no, envíame un mensaje.
                            <div class="img-post-container">
                                <Image width="1200px" height="300px" src="/img/posts/better_js/2.jpg" alt="js-2" />
                            </div>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                3. Usar operadores ternarios:
                            </span>
                            Fácil de leer y escribir.
                            <div class="img-post-container">
                                <Image width="1200px" height="300px" src="/img/posts/better_js/3.jpg" alt="js-3" />
                            </div>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                4. Arreglos:
                            </span>
                            Intenta siempre abstraer cosas que vas a repetir en los procesos, en este caso sacamos el cálculo del indice de la función for, de forma tal que cada vez que dicha función itere sobre el array no tenga la necesidad de calcular el indice actual.
                            <div class="img-post-container">
                                <Image width="1200px" height="400px" src="/img/posts/better_js/4.jpg" alt="js-4" />
                            </div>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                5. Si necesitas pasar varios parámetros a una función:
                            </span>
                            Envíalo como un objeto. Esto permite llamar a la función y sin tener en cuenta el orden en como se escribe y pasarle keys y values correctos.
                            <div class="img-post-container">
                                <Image width="1200px" height="300px" src="/img/posts/better_js/5.jpg" alt="js-5" />
                            </div>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                6. Escribe nombres de variables y funciones legibles
                            </span>
                            Por lo que más quieras.
                            <div class="img-post-container">
                                <Image width="1200px" height="300px" src="/img/posts/better_js/6.jpg" alt="js-6" />
                            </div>
                            <div class="img-post-container">
                                <Image width="800px" height="300px" src="/img/posts/better_js/7.jpg" alt="js-7" />
                            </div>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                7. Usa la triple igualdad:
                            </span>
                            En javascript la triple igualdad nos permite validar los tipos de datos ya que, al ser un lenguaje que NO es fuerte en el tipado se puede comparar variables con diferente tipo de dato de forma "correcta", por ejemplo: enteros con strings. Lo cual puede ocasionar problemas de funcionalidad.
                            <div class="img-post-container">
                                <Image width="800px" height="200px" src="/img/posts/better_js/8.jpg" alt="js-8" />
                            </div>
                        </article>
                        <article>
                            Si conoces más tips o recomendaciones avisame y las agrego en el post!
                        </article>
                        <article>
                            Espero que les sirva, saludos!
                        </article>


                    </section>


                    <section class="hashtags-container">
                        <div class="hashtag">#Javascript</div>
                        <div class="hashtag">#Good code</div>
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
