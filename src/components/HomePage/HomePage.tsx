import { Link } from "react-router-dom"
import classes from "../Styles/Styles.module.css"

export const HomePage = () => {
    return(
<div className={classes.panoramaChoice}>
    <div className={classes.choice}>
        <div className={classes.choiceImg}><Link to="dwarves">Dwarves</Link></div>
        <div className={classes.choiceImg}><Link to="orcs">Orcs</Link></div>
    </div>
    <div>Tanah</div>
</div>
    )
}