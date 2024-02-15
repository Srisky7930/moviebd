import {Outlet, Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  ;<div className="header-container">
    <nav className="navbar">
      <div>
        <h1> MovieDB </h1>
      </div>
      <div>
        <ul className="items-list">
          <li>
            <Link to="/" className="link">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/top" className="link">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className="link">
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </div>
}

export default Header
