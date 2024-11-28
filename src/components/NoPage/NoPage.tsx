import { BackButton } from "../Button/BackButton/BackButton"
import { HomeButton } from "../Button/HomeButton/HomeButton"
import Error from "../../images/Other/Error.webp"
import classes from "../Styles/Styles.module.css"

export const NoPage = () => {
    return (<div className={classes.errorPage}>
        <div className={classes.buttonErr}><HomeButton/><span>Error</span><BackButton/></div>
        <img className={classes.error} src={Error} alt="White Flag" />
        </div>
    )
}