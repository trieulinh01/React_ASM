import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="container">
      <div className="header">
        <a href="#" className="header__logo">HotCoffee</a>
        <nav className="main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__item"><Link to="/" className="main-menu__link">Home</Link></li>
            <li className="main-menu__item">< Link to="article" className="main-menu__link">Articles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
