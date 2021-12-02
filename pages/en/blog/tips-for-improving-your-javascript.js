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
              Javascript is a very powerful language but, it has certain details that if we do not take into account we can make mistakes.
            </article>
            <article>
              The problems that we can find by not taking these details into account when we develop with javascript range from the performance of our application to data problems by not taking care of the typing in a rigorous way, which, in both cases tend to be technical debt that would imply in serious problems when our system grows. In addition, we must think that other developers will also touch the code you are writing and therefore you must be as readable as possible. Of course, we know that javascript is a language that is NOT strong in typing and therefore many projects implement Typescript, however there are projects with JS in the market and we are obliged to always take into account the small details. I will explain some of them:
            </article>
            <article>
              <span class="post-subtitle">
                1. If the conditionals execute a single action:
              </span>
              <div class="img-post-container">
                <Image width="800px" height="500px" src="/img/posts/better_js/1.jpg" alt="js-1" />
              </div>
            </article>
            <article>
              <span class="post-subtitle">
                2. When you receive data from a DB or an API:
              </span>
              And you need to validate if certain keys exist in your object write it this way. In case of not getting the key the validation will give undefined, but, instead of sending undefined we show something that indicates in a better way that this key does not exist in this object. That is, we are writing: if name exists in the object users return it, if not, send me a message.
              <div class="img-post-container">
                <Image width="1200px" height="300px" src="/img/posts/better_js/2.jpg" alt="js-2" />
              </div>
            </article>
            <article>
              <span class="post-subtitle">
                3. Use ternary operators:
              </span>
              Easy to read and write.
              <div class="img-post-container">
                <Image width="1200px" height="300px" src="/img/posts/better_js/3.jpg" alt="js-3" />
              </div>
            </article>
            <article>
              <span class="post-subtitle">
                4. Arrangements:
              </span>
              Always try to abstract things that you are going to repeat in the processes, in this case we take the index calculation out of the for function, so that each time the for function iterates over the array it does not need to calculate the current index.
              <div class="img-post-container">
                <Image width="1200px" height="400px" src="/img/posts/better_js/4.jpg" alt="js-4" />
              </div>
            </article>
            <article>
              <span class="post-subtitle">
                5. If you need to pass several parameters to a function:
              </span>
              Send it as an object. This allows you to call the function regardless of the order in which it is written and pass it correct keys and values.
              <div class="img-post-container">
                <Image width="1200px" height="300px" src="/img/posts/better_js/5.jpg" alt="js-5" />
              </div>
            </article>
            <article>
              <span class="post-subtitle">
                6. Write readable variable and function names
              </span>
              For whatever else you want.
              <div class="img-post-container">
                <Image width="1200px" height="300px" src="/img/posts/better_js/6.jpg" alt="js-6" />
              </div>
              <div class="img-post-container">
                <Image width="800px" height="300px" src="/img/posts/better_js/7.jpg" alt="js-7" />
              </div>
            </article>
            <article>
              <span class="post-subtitle">
                7. Use triple equality:
              </span>
              In javascript the triple equality allows us to validate the data types because, being a language that is NOT strong in typing, it is possible to compare variables with different data types in a "correct" way, for example: integers with strings. This can cause functionality problems.
              <div class="img-post-container">
                <Image width="800px" height="200px" src="/img/posts/better_js/8.jpg" alt="js-8" />
              </div>
            </article>
            <article>
              If you know more tips or recommendations let me know and I'll add them to the post!
            </article>
            <article>
              I hope you find it useful, greetings!
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
