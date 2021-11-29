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
            <article>For us developers coming from backend it is usually a bit confusing how to develop good user interfaces.
              confusing how to develop good user interfaces, in my personal case, I found it difficult to understand what steps to follow to achieve a
              understand what steps to follow to achieve a specific goal and this goes from the layout,
              the styles, the responsive design, the implementation of the assets, the fonts, the color palette,
              and what kind of format to use for images or icons. Plus SEO: how to set it up correctly.
            </article>
            <article>
              100% of the projects in which I participated and had the task of developing the UI I selected Bootstrap
              as framework because in my ignorance and even some fear, I was looking for a shortcut to do something decent.
              decent.
              And yes, as you can guess, the results were rarely good.
            </article>
            <article>
              All this is also because I have rarely worked in an office, with good UI people, so it is difficult to understand how to start, what to consider or how to help yourself.
              so it is difficult to understand how to start, what to take into account or how to help yourself. This added to the little
              interest I had
              I had little interest in this subject, since at that time I was working only in the backend and I was satisfied with it.
            </article>
            <article>
              After this long introduction, let's get down to business:
            </article>
            <article>
              <span class="post-subtitle">
                Website architecture:
              </span>
              This applies to all types of projects, in this case,
              developing a good UI you need to understand how the project is going to behave so that you can distribute it in a
              in an adequate
              the items you are going to create. This blog is developed with pure Html, Css and Javascript, I haven't used any framework for it.
              any framework for it,
              my idea is to migrate to Gatsby later but that's another topic, the point is that this application is a static website
              and the
              the purpose of it is to deploy the project quickly, saving time, therefore the
              the architecture I'm using may not be very
              may not be very scalable but for the moment it covers what I need. Also, when setting up a website that is going to
              implement SEO it should be taken into account that,
              SPA's don't work for it. This is why it is IMPORTANT to know the purpose of the website, if you are going to
              implement SEO or not
              and if the requirements of the design team are adequate for this (I am telling you for a reason).
            </article>
            <article>
              <span class="post-subtitle">
                Tools to use:
              </span>
              If you have a background in graphic design or interface design, you may find it easy to configure a color palette for
              a color palette for each section
              each section and the appropriate assets but, what happens with developers who don't have this knowledge?
              I understood that it is important to rely
              in tools that help us in several points:
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://uigradients.com/" target="_blank">UIGRADIENTS: </a>
              </span>
              You have a good choice of gradients to use on your website.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://webgradients.com/" target="_blank">WEBGRADIENTS: </a>
              </span>
              Another good tool for you to select gradients for your website.
              You have a good choice of gradients to use on your website.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://flatuicolors.com/" target="_blank">FLATUICOLORS: </a>
              </span>
              Allows you to select the color palette.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://bennettfeely.com/clippy/" target="_blank">BENNETTFEELY: </a>
              </span>
              It allows to simulate based on coordinates the function clip-path of css to apply it to our sites.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://fontawesome.com/" target="_blank">FONTAWESOME: </a>
              </span>
              This place is famous, you can download the best icons for your website.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://fonts.google.com/" target="_blank">GOOGLE FONTS: </a>
              </span>
              Something that can not be missed, select fonts suitable for our site.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://unsplash.com/" target="_blank">UnSplash: </a>
              </span>
              We can download high quality images for free
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://boxicons.com/" target="_blank">BoxIcons: </a>
              </span>
              We can download high quality icons for free.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                <a href="https://www.magicpattern.design/" target="_blank">MagicPattern: </a>
              </span>
              We can set up a custom css background for sections of our site
              We can download high quality icons for free.
            </article>
            <article>
              <span class="post-subtitle">
                The quality of the assets:
              </span>
              Have you been given assets in a word document? have you been given giant, very small images to place in a single section that is related?
              in a single section that is related?
              The performance of our website when loading for the first time depends largely on the assets, you must take into account the following
              the following into account:
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                Try as much as possible to use SVG images, logos and icons:
              </span>
              is a type of digital image made up of vector graphics, i.e., images saved in this format must be able to be
              this format must be able to be
              represented as vector graphics and mathematical functions,
              unlike what happens with bitmap images (JPG, PNG, etc.), where each pixel of the image has
              where each pixel of the image has its own information.
            </article>
            <article>
              When we have a bitmap image and we enlarge it we can appreciate a noticeable loss of quality,
              even becoming totally blurred if we enlarge it too much. This is due to the fact that when zooming in on an image
              a bitmap image
              bitmap image we are enlarging each pixel individually, which generates a loss of quality.
            </article>
            <article>
              On the other hand, when zooming in on a vector image, thanks to the mathematical properties of the
              the image is redrawn by multiplying its vector by the value of the zoom we are performing.
              we are performing.
              In this way, the image is redrawn from scratch with 100% quality and without any loss.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                The size of the images should be appropriate for each section:
              </span>
              If you have to use Css to resize an image on your website you are making a mistake (I have to fix that detail at one point in this website).
              fix that little detail at a later point in this website)
              It is NOT a good practice, it damages the performance of the site.
            </article>
            <article>
              <span class="post-subtitle-subtitle">
                If it is not possible for an image to be in SVG format then optimize the image for the web:
              </span>
              There are some online tools that allow this, you just have to upload the asset and download it optimized.
              If it is not possible for an image to be in SVG format then optimize the image for the web:
            </article>
            <article>
              <span class="post-subtitle">
                Technologies to be implemented:
              </span>
              Learn Flexbox and CssGrid. don't try to use a framework because it seems to be a "shortcut" for layout by
              the layout of the grids, most of the time those configurations do not meet the expectations of the projects.
              projects
              we have to develop, don't mess up like me xD.
            </article>
            <article>
              Well friends, I hope you find this post useful, I'm happy because at last I think I'm good at making UI and it
              opens my mind
              to understand other important things that may not have much to do with code, what's the point of building a website if it doesn't make money?
              website if it doesn't make money?
              I'll leave it there. Greetings!
            </article>
          </section>

          <section class="hashtags-container">
            <div class="hashtag">#UI Develop</div>
            <div class="hashtag">#UI Tools</div>
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
