import classes from "../Styles/Styles.module.css"
import { DwarvesSelectionButton } from "../Button/HomePageButton/ChoiceOfDwarves"
import { OrcsSelectionButton } from "../Button/HomePageButton/ChoiceOfOrcs"

export const HomePage = () => {
    return(
<div className={classes.choice}>
    <div className={classes.choiceTitle}>
        <h3>Север Танаха</h3>
        <p>
            Север Танаха — часть огромного континента, населённая разнообразными существами, 
            расами и двумя фракциями, ведущими постоянные междоусобицы.  
            События этой главы поведают о зарождении вражды между гномами и орками.
        </p>
    </div>
    <div className={classes.triangles}>
        <div className={classes.blueTriangle}><DwarvesSelectionButton/></div>
        <div className={classes.greenTriangle}><OrcsSelectionButton/></div>
    </div>
</div>
    )
}