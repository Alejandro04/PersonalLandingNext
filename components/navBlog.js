import Image from 'next/image'

export default function NavBlog() {
  return (
    <>
      <nav className="nav container">
        <div className="nav__logo">
          <h2 className="nav__title">
            <a href="/">
              alejodev.com
            </a>
          </h2>
        </div>
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <a href="/" className="nav__links">Home</a>
          </li>
          <li className="nav__items">
            <a href="#main" className="nav__links">Me</a>
          </li>
          <li className="nav__items">
            <a href="#skills" className="nav__links">Skills</a>
          </li>
          <li className="nav__items">
            <a href="#footer" className="nav__links">Contact</a>
          </li>
          <li className="nav__items">
            <a href="/es/blog" className="nav__links">Blog ES</a>
          </li>
          <li className="nav__items">
            <a href="/en/blog" className="nav__links">Blog EN</a>
          </li>
          <li className="nav__items">
            <a href="https://alejandroroa.medium.com/"
              target="_blank" className="nav__links">Medium</a>
          </li>
          <li className="nav__items">
            <a href="https://www.workana.com/freelancer/bb7ac4fb0818a18412d6249d5845476e"
              target="_blank" className="nav__links">Workana</a>
          </li>
          <li className="nav__items">
            <a href="https://www.linkedin.com/in/alejandroroa/"
              target="_blank" className="nav__links">LinkedIn</a>
          </li>

          <div className="nav__close">
            <Image width="30" height="30" src="/img/close.svg" alt="close" />
          </div>
        </ul>

        <div className="nav__menu">
          <Image width="30" height="30" src="/img/nav.svg" alt="up" className="nav__img" />
        </div>
      </nav>
    </>
  )
}
