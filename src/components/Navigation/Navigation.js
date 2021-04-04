

import { NavLink } from 'react-router-dom'
import routes from '../../routes'
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav>
            <ul className={s.nav}>
        <li>
          <NavLink
            exact
            to={routes.home}
            className={s.NavLink}
            activeClassName={s.NavLink__active}
          >Home
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to={routes.movies}
             className={s.NavLink}
            activeClassName={s.NavLink__active}
          >Movies
          </NavLink>
        </li>
      </ul>
        </nav>
    )
}

export default Navigation