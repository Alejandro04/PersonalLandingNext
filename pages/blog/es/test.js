import Header from '../../../components/header'
import Footer from '../../../components/footer'

export default function Post() {
  return (
    <>
     <Header />
      <div>
        <section className="post" id="main">
          <div className="post__container container">
            <section className="items-detail-container" id="post">
              Hola ES
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
