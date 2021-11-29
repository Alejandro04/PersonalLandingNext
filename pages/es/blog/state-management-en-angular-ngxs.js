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
              Ngxs is a state management developed for Angular which contains a flow similar to redux.
            </article>
            <article>
              Let's remember that a state handler is a tool that allows us to centralize the states of our applications, which facilitates the access to data without the need to be accessing
              of our applications, which facilitates the access to the data without the need to be accessing them in a less fluid way.
              This happens mostly when the application grows a lot.
              Next I show the flow of data that applies, this image is courtesy of the official documentation of
              Ngxs which you can access <a target="_blank" href="https://www.ngxs.io/">HERE</a>
              <div class="img-post-container">
                <Image src="/img/posts/ngxs/1-min.png" width="600px" height="300px" alt="ngxs1" />
              </div>
            </article>
            <article>
              Analyzing the flow we find: From the component an action is triggered where it verifies with the backend or with plugins installed.
              with the backend or with installed plugins the data to obtain, when it obtains it, it mutates it and passes it to the store.
              to the store
              and the store returns the new state to the component.
            </article>
            <article>
              Example: When we save data from a form, pressing the "save" button triggers the action that interacts with the entities (plugins, apis, others).
              that interacts with the entities (plugins, apis, others) and when it obtains the response it sends it to the store and the store returns the new state (the list of data with the new data added).
              returns the new state (the list of data with the new data added).
            </article>
            <article>
              Let's see the example in code: Let's use the same project explained in the previous posts:
              <a target="_blank" href="/posts/introduccion-angular-angularmaterial-firebase">Introduction to Angular</a>
              y
              <a target="_blank" href="/posts/inputs-y-outputs-en-angular">Inputs and Outputs</a>
              Remembering that you can clone this project <a target="_blank"
                href="https://github.com/Alejandro04/Restaurants-Angular">HERE</a>
            </article>
            <article>
              We install our dependencies as follows:
            </article>
            <article>
              npm install @ngxs/store --save
            </article>
            <article>
              It is important that, in order for you to be able to verify
              the behavior of the state at the time of development
              install the following plugins:
              We install our dependencies as follows:
            </article>
            <article>
              npm install @ngxs/devtools-plugin
            </article>
            <article>
              npm install @ngxs/logger-plugin
            </article>
            <article>
              One thing I recommend is to install the Ngxs CLI which will save you a lot of time when developing.
              development:
              npm install @ngxs/cli -g
            </article>
            <article>
              To implement Ngxs in our project we must configure it in app.module.ts as follows:
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/9-min.png" alt="ngxs9" />
              </div>
            </article>
            <article>
              In this project we are going to make the supplier crud which is going to be fed by a service,
              we are not going to consume an API for agility reasons but we are going to encode the data in this service.
              First of all we are going to build our state Management for providers: through the Ngxs CLI we execute:
              ngxs --name providers --directory src
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/2-min.png" alt="ngxs2" />
              </div>
            </article>
            <article>
              This command has created the folder state inside src and contains: providers.action.ts which is in charge of
              configure and
              execute the actions that come from the components, providers.sate.spec.ts that is in charge of executing the tests
              y
              and provider.state.ts which is in charge of configuring the states that each action manipulates.
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
              The actions that we are going to execute are based on a crud and therefore we configure the
              we configure the relevant functions for each item. Also in this case we call the interface
              provider that our entity has defined.
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
              We import the modules we need from angular core, ngxs, the actions we have defined and the services we will use.
              we have defined and the services we will use.
            </article>
            <article>
              We see a ProviderStateModel class that will configure the initial state of our module,
              in this case we have a Provider type array called providers and a string called selectedProvider (which we don't use throughout the tutorial
              throughout the tutorial we don't use it,
              but it can be used to take only an individual record and execute actions on that data).
            </article>
            <article>
              Below we see a @State decorator that is necessary for Angular to identify it and work on
              functions that change the states correctly.
            </article>
            <article>
              Then we configure our class, constructor and functions.
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/6-min.png" alt="ngxs6" />
              </div>
            </article>
            <article>
              In the constructor we inject the service module that we are going to configure later, this service will interact
              between the data
              and the store.
            </article>
            <article>
              The @selector decoder is part of @ngxs/store and allows us to set up a "bridge" between
              the state and the component, in this case we write a function getProviderList that is going to obtain the list of
              of providers and that in the component we are going to call in a direct way.
            </article>
            <article>
              Then, we start writing our functions corresponding to each action (addProvider, UpdateProvider, DeleteProvider, GetProvider).
              We will explain AddProvider.
            </article>
            <article>
              <span class="post-subtitle">
                AddProvider:
              </span>
              Ngxs allows to configure within its functions to handle the state features that are appropriate for each task, in this case it would be getState and patchState.
              for each task, in this case it would be getState and patchState. Both allow us to manipulate the data (the payload) that comes from the action and to
              from the action and configure the resulting new state through a context.
              This context will receive an observable. That observable is the response of the service to which the payload is passed as a whole.
              is passed the payload together with the ngxs features (getState and patchState).
            </article>
            <article>
              In addition, we see two additional functions: pipe and tap. Pipe allows you to group functions for later
              and tap handles data reactively and returns an observable. The observable returned in this case
              is the copy of the previous state and the payload of the new state, that is, the list of providers with the new data that was stored.
              data that was stored.
              <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular/blob/master/src/state/providers.state.ts">AQUÍ</a>
            </article>
            <article>
              Already having our store configured we are going to create our service. The service is nothing more than functions that interact directly with our APIS or with harcoded data.
              with our APIS or with harcoded data, as in this case:
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/7-min.png" alt="ngxs7" />
              </div>
            </article>
            <article>
              Now that we have our store and our service ready we go to the components, in this case we have created providers (parent) and providers-list (child)
              which are going to exchange data through inputs and outputs. Remember that to understand these points you can go to
              <a target="_blank" href="/posts/inputs-y-outputs-en-angular">PREVIOUS POST</a>
            </article>
            <article>
              <span class="post-subtitle">
                providers.component.ts
              </span>
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/8-min.png" alt="ngxs8" />
              </div>
              First we import the necessary modules (ngxs, services, actions, interface)
              and then we configure our class. In the class we see the following on line 16:
            </article>
            <article>
              <span class="post-subtitle">
                @Select
              </span>
              This decorator takes the state configured by @Selector of our provider.state.ts file from the store
              and then manipulate it (send it to the template) and in our constructor in the line 19 we execute
              the action that calls the list of providers. Rather, the action starts at line 19 and ends at line 16 when it goes through the whole process.
              through the whole process. For the rest of the functions of the component the same thing happens, we execute a Dispatch and the new state will return the list of providers.
              the new state will return the list of providers with the new data stored, you can see the file
              <a target="_blank" href="https://github.com/Alejandro04/Restaurants-Angular/blob/master/src/app/components/providers/providers.component.ts">AQUÍ </a>
            </article>
            <article>
              Our template is almost the same as the ones we have seen, but it is worth mentioning that in line 32 we are sending to the child component the list of providers through the value providers$.
              to the child component the list of providers through the value providers$
              <div class="img-post-container">
                <Image width="1200px" height="700px" src="/img/posts/ngxs/10-min.png" alt="ngxs10" />
              </div>
            </article>
            <article>
              So, in summary: Ngxs allows us to have a store with a simple data flow: Components execute actions that iterate with services and
              that return a new state. It is worth remembering that the templates and the ways of passing data between inputs and outputs is the same.
            </article>
            <article>
              You can see the system running <a target="_blank" href="https://restaurants-angular.vercel.app/">HERE</a>
            </article>
            <article>
              Greetings!
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
