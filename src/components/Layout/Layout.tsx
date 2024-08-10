import { Link, Outlet } from "react-router-dom"
import classes from '../Styles/Styles.module.css'


export const Layout = () => {
    return <>
    <nav>
        <span>
          <Link to="/">Home</Link>
        </span>

        <span>
          <Link to="guilds">Guilds</Link>
        </span>

        <span>
          <Link to="market">Market</Link>
        </span>
    </nav>
    <Outlet />
  </>
}