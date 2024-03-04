import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
         <header className="container">
      <div className="header">
        <a href="#" className="logo">HotCoffee</a>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>< Link to="article">Articles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
