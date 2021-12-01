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
                            The accessibility tests complement the unit tests at frontend level, since they verify if the components that we have implemented work correctly for our project, but they do not verify if these components are written correctly.
                        </article>
                        <article>
                            <a href="https://nx.dev/" target="_blank">
                                Nx
                            </a>

                            It is a technology that helps us to run this type of tests on frontend tools such as React.js or Angular. Nx has its own architecture proposed for each of the options present in order to facilitate the integration with testing tools.

                            To run accessibility tests we are going to use:

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
                            We are going to use NX to implement our accessibility tests based on Angular:
                        </article>
                        <article>
                            <span class="post-subtitle">
                                1. We globally installed the Nx cli:
                            </span>
                            <pre>
                                npm i -g nx
                            </pre>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                2. We install npx globally
                            </span>
                            <pre>
                                npm install -g npx
                            </pre>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                3. We install our project
                            </span>
                            <pre>
                                npx create-nx-workspace --preset=angular
                            </pre>
                        </article>
                        <article>
                            <span class="post-subtitle">
                                4. Add jest-axe, its types and testing library in package.json
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
                                5. We run
                            </span>
                            <pre>
                                npm install
                            </pre>
                        </article>

                        <article>
                            <span class="post-subtitle">
                                6. We visualize the architecture of the project:
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
                                7. We create our test file:
                            </span>
                            <p>
                                app.component.spec.ts and write our accessibility test
                            </p>

                            <div class="img-post-container">
                                <Image width="800px" height="500px" src="/img/posts/angular_accesibilidad/4.jpg" alt="accesibilidad-4" />
                            </div>
                        </article>

                        <article>
                            <span class="post-subtitle">
                                8. The toHaveNoViolations() function
                            </span>
                            <p>
                                It helps us to validate if the html we have written is correct, we don't have to do anything else. It can be customized, but it is not necessary.
                            </p>
                            <p>
                                <span class="post-subtitle"> Important:</span> Don't be scared by the red lines that my code editor shows, something is broken, but it's not the code.
                            </p>

                            <div class="img-post-container">
                                <Image width="800px" height="500px" src="/img/posts/angular_accesibilidad/4.jpg" alt="accesibilidad-4" />
                            </div>
                        </article>

                        <article>
                            <span class="post-subtitle">
                                9. We run our accessibility test
                            </span>
                            <p>
                                In this case I have implemented two inputs, one correct and one incorrect, so the test must have a failure:
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
                                10. Accessibility rules
                            </span>
                            <p>
                                Jest-Axe is inspired by axe-core which, in its Github repository explains the accessibility rules explicitly, you can see the correct and incorrect ways to implement each component. On the right side you can see the ACT-Rules column and there the link that redirects you to the examples per element.
                            </p>
                        </article>
                        <article>
                            This repository can be viewed at <a href="https://github.com/Alejandro04/NxAngular" target="_blank">HERE</a>
                        </article>
                        <article>
                            I hope you find it useful, greetings!
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
