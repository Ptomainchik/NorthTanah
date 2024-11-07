import { Link } from "react-router-dom"



export const HomePage = () => {
    return(
<div>
     <div><Link to="dwarves">Dwarves</Link></div>
     <div><Link to="orcs">Orcs</Link></div>
</div>
    )
}