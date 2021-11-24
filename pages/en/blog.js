import InternalEnHeaderBlog from '../../components/internalEnHeaderBlog'
import MainEnBlog from '../../components/mainEnBlog'
import FooterBlog from '../../components/footerBlog'
import Script from 'next/script'

export default function Blog() {
  return (
    <>
      <InternalEnHeaderBlog />
      <MainEnBlog />
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
