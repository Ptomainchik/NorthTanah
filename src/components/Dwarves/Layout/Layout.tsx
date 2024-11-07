import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return <>
    <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
    </nav>
    <Outlet />
  </>
}