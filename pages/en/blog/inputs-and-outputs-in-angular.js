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
                            One of the things that we must keep in mind to learn when we develop in the frontend
                            is how to pass the data between components and at a logical level how to pass them between parents to children and from children to parents
                            since that data flow will help us to define components in an organized way in the project and will also help us to execute a proper support of the project.
                            will help to execute a proper support of the project in the course of time.
                        </article>
                        <article>
                            In Angular I know a couple of ways: Inputs (from parent to child) Outputs (from child to parent) and through a store, the latter case we will
                            we will see it later.
                        </article>
                        <article>
                            For these examples we are going to use the explained project <a target="_blank" href="/en/blog/introduction-angular-angularmaterial-and-firebase">In the previous tutorial</a>
                        </article>
                        <article>
                            We go to components/plates/plates.component.html. We can observe two things, from line 1 to line 21
                            an AngularMaterial accordion that has inside it a small form to save and edit the plates.
                        </article>
                        <article>
                            Then, between lines 22 to 26 we have app-plates-list, that is, the child component. We can observe that it has
                            a special configuration and with it part of the functionalities of sending and receiving data.
                        </article>
                        <article>
                            Now, we will explain each of the processes:
                        </article>
                        <article>
                            <span class="post-subtitle">
                                Inputs:
                            </span>
                            How does the data flow start? In line 18 we can see the createPlate() function and this function allows us to send data to the controller and add it to the FormControl type input.
                            FormControl is a feature of @angular/forms and allows us to use reactive components for our forms.
                        </article>
                        <article>
                            Now, let's remember that this project is based on Firebase, so we must integrate its functions to our controllers and inject its dependencies to use its functions.
                            integrate its functions to our controllers and inject its dependencies to use its functions.
                            This particular case divides the process in two, identify if the action of the form is to register a new dish or if it is to update an existing dish.
                            plate or if it is to update an existing plate. I won't go into more detail so as not to lose the thread of what we need to understand for this post.
                            to understand for this post.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/1-min.png" alt="angular1" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/2-min.png" alt="angular2" />
                            </div>

                        </article>
                        <article>
                            What is the idea? save a plate and display it reactively in our table that lists the plates (child component).
                            (child component) so let's see:
                        </article>
                        <article>
                            After firebase in this case saves the data we need to set up a process that allows us to visualize the data.
                            that data. Then, in the constructor of our component we call the collection of plates and pass it to a variable plates.
                            plates is an observable type array, why observable? because firestore (in this case the DB we are using from firebase)
                            is always going to return an observable and since we are writing in Typescript we must define it as such.
                            Then in our view we configure a key through which we are going to pass that array to our child component.
                            You can see the lines 22 and 29 of the constructor. Line 25 of the template.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/3-min.png" alt="angular3" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/4-min.png" alt="angular4" />
                            </div>
                        </article>
                        <article>
                            In our child component (list of plates) we define in line 11 @Input() plates: any[];
                            Input is a module of @angular/core and plates is the key that we defined in the template of the parent component.
                            There then, we are receiving the list of plates. In the function ngOnChanges we pass that list dataSource that is a variable
                            type MatTableModule and that is going to allow the visualization of the same one through the template. In the template we simply
                            we access to the keys of this array. These items are in the Angular Material docu.
                            You can see the lines 11 and 17 of the controller.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/5-min.png" alt="angular5" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/6-min.png" alt="angular6" />
                            </div>
                        </article>
                        <article>
                            So in summary. We set up our parent component, we define the data types in our controllers
                            and we pass through the child component defined in the template of the parent a key and its respective value. In the component
                            child component we define an Input type variable that will receive that data.
                        </article>
                        <article>
                            <span class="post-subtitle">
                                Outputs:
                            </span>
                            What do we need in this case? in the table of dishes we have a pencil button, this button sends the data from the child component (the table that lists the dishes) to the parent component (the form).
                            the data from the child component (the table that lists the dishes) to the parent component (the form).
                            then we configure the following in the child component:
                        </article>
                        <article>
                            EventEmitter and Output of @angular/core allow us to execute this process, so we define them as follows:
                            In the line we write an Output type EventEmitter called plateEvent, this variable is going to communicate with our parent component.
                            parent. We can see this in line 12
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/7-min.png" alt="angular7" />
                            </div>
                        </article>
                        <article>
                            In our template we define the function to execute when the user clicks on the pencil button, this can be seen in line 13 of the template.
                            we can see it in line 13
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/8-min.png" alt="angular8" />
                            </div>
                        </article>
                        <article>
                            Then in our controller we define the function addPlateToForm(value: string) that will receive the value sent from the form and access the function emit (because plateEvent is an Output type EventEmitter).
                            that is sent from the form and accesses the emit function (since plateEvent is an Output type EventEmitter).
                            This in concrete form sends the data to the parent component. You can see line 22
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/9-min.png" alt="angular9" />
                            </div>
                        </article>
                        <article>
                            Now, to finish understanding the data flow let's go back to the template of the parent component where we have the child component defined on line 23.
                            defined the child component in the line 23, we see that we configure the key of the Output type EventEmitter defined in the child with the function addPlateToForm($event), which is the one that is in charge of placing the data in the
                            child with the function addPlateToForm($event) that is the one that is finally in charge of placing the data in the form.
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/10-min.png" alt="angular10" />
                            </div>
                            <div class="img-post-container">
                                <Image width="1200px" height="700px" src="/img/posts/inputs_outputs/11-min.png" alt="angular11" />
                            </div>
                        </article>
                        <article>
                            And that's it! We've studied how to pass data between parent and child components with Angular.
                        </article>
                        <article>
                            You can clone the project <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular">HERE</a>
                        </article>
                        <article>
                            You can see the project in production <a target="_blank" href="https://restaurants-angular.vercel.app/">HERE</a>
                        </article>
                        <article>
                            I hope you find it useful, greetings!
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
