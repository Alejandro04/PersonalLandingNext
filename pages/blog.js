import HeaderBlog from '../components/headerBlog'
import MainBlog from '../components/mainBlog'
import FooterBlog from '../components/footerBlog'
import Script from 'next/script'

export default function Blog() {
  return (
    <>
      <HeaderBlog />
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
