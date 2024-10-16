import { Link, Outlet } from "react-router-dom"



export const Layout = () => {
    return <>
    <nav>
        <span>
          <Link to="/">Home</Link>
        </span>

        <span>
          <Link to="guilds">Guilds</Link>
        </span>

    </nav>
    <Outlet />
  </>
}