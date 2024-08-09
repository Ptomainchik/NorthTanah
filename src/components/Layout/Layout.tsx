import { Link, Outlet } from "react-router-dom"
import classes from '../Styles/Styles.module.css'


export const Layout = () => {
    return <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history" title="История Королевства Медвежьих Вершин" className={classes.btncar} >The history of Bear Peaks</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
}