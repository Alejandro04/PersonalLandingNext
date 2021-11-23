import HeaderBlog from '../../../components/headerBlog'
import FooterBlog from '../../../components/footerBlog'
import Script from 'next/script'

export default function Post() {
  return (
    <>
     <HeaderBlog />
      <div>
        <section className="post" id="main">
          <div className="post__container container">
            <section className="items-detail-container" id="post">
              Hola ES
            </section>
          </div>
        </section>
      </div>
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
