import HeaderBlog from '../../../components/headerBlog'
import FooterBlog from '../../../components/footerBlog'

export default function Post() {
  return (
    <>
     <HeaderBlog />
      <div>
        <section className="post" id="main">
          <div className="post__container container">
            <section className="items-detail-container" id="post">
              Hola EN
            </section>
          </div>
        </section>
      </div>
      <FooterBlog />
    </>
  )
}
