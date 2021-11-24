import InternalNav from './internalNav'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function internalHeaderBlog() {
  const [title, setTitle] = useState();

  const router = useRouter()
  const dataArray = router.asPath.split('/')
  const lowerTitle = dataArray[3].replaceAll('-', ' ')

  useEffect(() => {
    setTitle(lowerTitle.charAt(0).toUpperCase() + lowerTitle.slice(1))
  }, [title]);

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
