import InternalHeaderBlog from '../components/internalHeaderBlog'
import MainBlog from '../components/mainBlog'
import FooterBlog from '../components/footerBlog'
import Script from 'next/script'

export default function Blog() {
  return (
    <>
      <InternalHeaderBlog />
      <MainBlog />
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
