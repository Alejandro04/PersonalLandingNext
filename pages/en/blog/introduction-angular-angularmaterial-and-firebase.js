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
                            The first thing to understand is that we need to implement a tool that will help us to be more productive when working with Angular.
                            that will help us to be more productive when working with Angular
                            is <a target="_blank" href="https://cli.angular.io/">Angular Cli</a> and I recommend installing it on your
                            machine globally to access its functionalities.
                        </article>
                        <article>
                            We must also install <a target="_blank" href="https://www.npmjs.com/package/firebase-tools">Firebase
                                Tools</a> globally
                            globally to access firebase functionalities.
                        </article>
                        <article>
                            It is very useful to take into account the documentation of <a target="_blank" href="https://material.angular.io/">Angular
                                Material</a>
                            since we will use some components of it. When we use Angular Material it is very important to take into account
                            keep in mind
                            that we will need three modules: @angular/material @angular/cdk @angular/animations. You can install them via npm.
                        </article>
                        <article>
                            After this we can create a new project or, failing that, you can download the repo that I have developed.
                            I have developed <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular">HERE</a> and follow
                            the tutorial to understand each module.
                            In case of cloning, install the dependencies by running npm install.
                        </article>
                        <article>
                            Now about the project: The first thing we must understand is the flow with which a project of this type works.
                            works.
                            In our case at the front end we will implement the AngularFirestore modules to interact with Firestore
                            as our database. Firestore is NoSQL and firebase offers us its ecosystem to interact with it, what
                            that
                            means that we don't have the obligation to develop a RestApi as a backend. There is the possibility of
                            Firebase Functions that are functions that execute events inside firebase, but we will see that in the following tutorials.
                            following tutorials.
                        </article>
                        <article>
                            The first thing we must see is our app.modules.ts file where we are going to configure the modules that we are going to use globally in our project.
                            we are going to use globally in our project, this includes the Angular Material functionalities. Also
                            we are going to configure the Firebase access. So that you can have your own credentials you must create an account
                            in Firebase,
                            then a project and finally add Firestore to the project you created.
                            find a script
                            with your own accesses. Finally we must take into account the components that we are going to create and use
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
                            Modules can be created with the following command:
                            <span class="post-subtitle">
                                ng g c ruta/componente
                            </span>
                            es decir:
                            <span class="post-subtitle">
                                ng g c components/component
                            </span>
                        </article>
                        <article>
                            When executing the command to create a component, it will generate 4 files by default:
                            <span class="post-subtitle">
                                component.component.css:
                            </span>
                            To write the component's own styles.
                            <span class="post-subtitle">
                                component.component.html:
                            </span>
                            To write the layout of the component.
                            <span class="post-subtitle">
                                component.component.ts:
                            </span>
                            To write the functionalities of the component (it is like a controller)
                            To write the layout of the component.
                            <span class="post-subtitle">
                                component.component.spec.ts:
                            </span>
                            To write the component test.
                        </article>
                        <article>
                            In our case we want to create a component that takes care of the menu. AngularMaterial offers us a
                            "skeleton to configure what we need, we just need to execute: ng c main-menu. Our component
                            will have the following html and ts by default. We adjust the html to our needs:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/3-min.jpg" alt="angular3" />
                            </div>
                            In addition, it is worth noting that in line 25 we call the content to be reflected in the rendering, ie,
                            we are in front of a "layout".
                        </article>
                        <article>
                            After that we are going to configure our app-routing.module.ts file where our routes are going to access our components.
                            to our components.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/4-min.jpg" alt="angular4" />
                            </div>
                        </article>
                        <article>
                            In Angular we can call components inside components and pass properties to them, in this case we will apply that
                            for home where you are going to call inside your component to orders but without passing properties.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/5-min.jpg" alt="angular5" />
                            </div>
                        </article>
                        <article>
                            Now, let's understand how the project works in terms of data: orders will be in charge of
                            drawing
                            our view, adding the title, the component mat-accordion that allows us to place inside it other components
                            other components and display them or not. Inside the same we add a form where we will create the order and the
                            list
                            of available plates.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/6-min.jpg" alt="angular6" />
                            </div>
                            In line 5 we pass to the properties of the component mat-accordion opened and closed some functionalities that will identify when to deploy the accordion and when not to deploy it.
                            that will identify when to deploy the accordion and when not to deploy it. This functionality is applied by panelOpenState which is
                            is
                            declared in the "controller" of the component.
                        </article>
                        <article>
                            In line 14 we are going to list the available dishes, where we will show their name with a checkbox that, when clicking on
                            click,
                            we can add or not to an array that will contain the list of dishes that will be added to the order.
                        </article>
                        <article>
                            On line 36 we see the createOrder function that is triggered when the user clicks the Send button,
                            this with a small validation to make sure that all the necessary data is ready: Order, customer and
                            at least
                            a product.
                        </article>
                        <article>This last point is very interesting because we are dealing with a reactive behavior,
                            this behavior is given in this case thanks to @angula/forms that allows to instantiate the inputs that are going to be used in the forms.
                            that are going to be used in the forms, that is why in lines 14, 23 and 29 we add the following properties
                            [formControl]="inputname" that finishes generating the reactivity.
                        </article>
                        <article>
                            Very nice but how does it all work? let's see now our controller: Here we call AngularFirestore,
                            Observable from rxjs and FormControl from @angular/forms. We also set up our Plate and Orders interfaces.
                            (yes, interfaces, remember we are writing in Typescript). When the system grows it is good to create a
                            folder
                            separate folder and place there the interfaces we need, then inside the controllers we just call them.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/7-min.jpg" alt="angular7" />
                            </div>
                            The @Component decorator configures the component selector, the template and the css file that belongs to that component.
                            that component.
                        </article>
                        <article>
                            Now, let's look at the class: Our variables plates and orders must be of type Observables since, AngularFirestore
                            will return Observables
                            (again, we are writing in Typescript, the typing is strict and must be defined correctly). We have
                            also panelOpenState which handles
                            the display of the accordion on the front end, platesSelected is the array where the plates selected to create the
                            selected to create the order and
                            title is the title of the view.
                        </article>
                        <article>
                            In our constructor we inject AngularFirestore to be able to access its properties inside the class and we also do a "get" to firestore from the
                            we also do a "get" to firestore of the orders and the available
                            and the available plates.
                        </article>
                        <article>
                            We have two functions: addProduct(plate) which will add to the platesSelected array the available plate and
                            createOrder(order) that will create the order.
                            <div class="img-post-container">
                                <Image width="1200px" height="1000px" src="/img/posts/introduccion_angular_firebase/8-min.jpg" alt="angular8" />
                            </div>
                            Note: I need to validate that, when a user deselects a dish, the array of correctly selected dishes is updated.
                            correctly selected, I accept PR =)
                        </article>
                        <article>
                            Now, having clear our context we know that we need something, which is the component that lists
                            the orders? on line 43
                            of orders.component.html you will see the following:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/9-min.jpg" alt="angular9" />
                            </div>
                            Here we are calling the app-orders-list component and we are passing it the list of orders we receive.
                            That is to say, app-orders-list would be a child of orders.
                            Now, having clear our context we know that we need something, which is the component that lists
                        </article>
                        <article>
                            Now, let's see what must be done in our child component (app-orders-list) to receive this data:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/10-min.jpg" alt="angular10" />
                            </div>
                            In line 10 we see @Input orders: any[]; this configuration allows to receive an array of orders from the parent component.
                            an array of orders from the parent component.
                        </article>
                        <article>
                            It is also worth noting that, we call MatTableModule (Angular Material component) to list
                            our commands
                            and ngOnChanges which will receive those commands and pass them to the view.
                            displayedColumns is an array that stores the MatTableModule headers. These details can be found
                            in the Angular Material documentation.
                        </article>
                        <article>
                            Finally, we can see the html of the component list:
                            <div class="img-post-container">
                                <Image width="1200px" height="1000px" src="/img/posts/introduccion_angular_firebase/11-min.jpg" alt="angular11" />
                            </div>
                        </article>
                        <article>
                            The result:
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/introduccion_angular_firebase/12-min.jpg" alt="angular12" />
                            </div>
                        </article>
                        <article>
                            You can see the system in production <a target="_blank" href="https://restaurants-angular.vercel.app/">HERE</a>
                        </article>
                        <article>
                            There is another section where we manage the available dishes, but I think this post is already a bit long,
                            so
                            it is better that you can study it and if you have any doubt you can comment me.
                        </article>
                        <article>
                            Personally I like Angular, I think it is a very good tool for front-end development and that the decision to use this or others like React or Vue is a matter of team, project, company or client.
                            to use this or others like React or Vue is a matter of team, project, company or client.
                        </article>
                        <article>
                            Remember, you can clone the project <a target="_blank"
                                href="https://github.com/Alejandro04/Restaurants-Angular">HERE</a>
                        </article>
                        <article>
                            I hope you find it useful, best regards.
                        </article>
                        <article>
                            REFACTOR: Thanks to the recommendation of a friend I have made a little refactor
                            in the app.module.ts file where we previously placed the firebase access data,
                            we have removed this and added it in environment.ts since it is the correct way.
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
