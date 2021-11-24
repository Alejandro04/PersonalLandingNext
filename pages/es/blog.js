import InternalEsHeaderBlog from '../../components/internalEsHeaderBlog'
import MainEsBlog from '../../components/mainEsBlog'
import FooterBlog from '../../components/footerBlog'
import Script from 'next/script'

export default function Blog() {
  return (
    <>
      <InternalEsHeaderBlog />
      <MainEsBlog />
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
