import { Link } from "react-router-dom"
import DwarfChoice from "../../images/HomePageImage/DwarfChoice.jpg"
import OrcsChoice from "../../images/HomePageImage/OrcsChoice.jpg"
import classes from "../Styles/Styles.module.css"

export const HomePage = () => {
    return(
<div className={classes.panoramaChoice}>
    <div className={classes.choice}>
        <div className={classes.choiceImg}><img src={DwarfChoice} alt="DwarfChoice" /><Link to="dwarves">Dwarves</Link></div>
        <div className={classes.choiceImg}><img src={OrcsChoice} alt="OrcsChoice" /><Link to="orcs">Orcs</Link></div>
    </div>
    <div>Tanah</div>
</div>
    )
}