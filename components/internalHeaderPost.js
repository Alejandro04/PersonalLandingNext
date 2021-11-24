import InternalNav from './internalNav'
import { useRouter } from 'next/router'


export default function internalHeaderBlog() {
  const router = useRouter()
  const dataArray = router.asPath.split('/')
  const title = dataArray[3].replaceAll('-', ' ')

  return (
    <>
      <header className="hero">
        <InternalNav />

        <section className="hero__container container" id="home" layout="fill">
          <h1 className="hero__title">
            {title}
          </h1>
          <a href="#main" className="cta">Learn more</a>
        </section>

      </header>
    </>
  )
}
