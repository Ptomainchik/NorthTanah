import classes from "../Styles/Styles.module.css"
import { DwarvesSelectionButton } from "../Button/HomePageButton/ChoiceOfDwarves"
import { OrcsSelectionButton } from "../Button/HomePageButton/ChoiceOfOrcs"

export const HomePage = () => {
    return(
<div className={classes.panoramaChoice}>
<DwarvesSelectionButton/>
<OrcsSelectionButton/>
</div>
    )
}