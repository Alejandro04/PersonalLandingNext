import Image from 'next/image'

export default function internalNav() {
  return (
    <>
      <nav className="nav container">
        <div className="nav__logo">
          <h2 className="nav__title">
            alejodev.com
          </h2>
        </div>
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <a href="/" className="nav__links">Home</a>
          </li>
          <li className="nav__items">
            <a href="/es/blog" className="nav__links">Blog</a>
          </li>

          <div className="nav__close">
            <Image width="30" height="30" src="/img/close.svg"  alt="close" />
          </div>
        </ul>

        <div className="nav__menu">
          <Image width="30" height="30" src="/img/nav.svg"  alt="up" className="nav__img" />
        </div>
      </nav>
    </>
  )
}
