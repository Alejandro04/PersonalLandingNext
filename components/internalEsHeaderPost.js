import InternalEsNav from './internalEsNav'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function internalHeaderBlog() {
  const [title, setTitle] = useState()
  const router = useRouter()
  let dataArray = router.asPath.split('/')
  const lowerTitle = dataArray[3].replace(/-/g, " ");

  useEffect(() => {
    setTitle(lowerTitle.charAt(0).toUpperCase() + lowerTitle.slice(1))
  }, [title]);

  return (
    <>
      <header className="hero">
        <InternalEsNav />

        <section className="hero__container container" id="home" layout="fill">
          <h1 className="hero__title">
            {title}
          </h1>
          <a href="#main" className="cta">Leer más</a>
        </section>

      </header>
    </>
  )
}
