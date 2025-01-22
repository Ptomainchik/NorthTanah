import classes from "../Styles/Styles.module.css"
import { DwarvesSelectionButton } from "../Button/HomePageButton/ChoiceOfDwarves"
import { OrcsSelectionButton } from "../Button/HomePageButton/ChoiceOfOrcs"

export const HomePage = () => {
    return(
<div className={classes.choice}>
    <div className={classes.choiceTitle}>
        <span>Tanah</span>
        <p>
            Танах - это огромный континент населённый разнообразными существами, расами и фракциями. Каждая из которых ведёт свой уникальный образ жизни, устанавливает свои законы и правила.
            Действия этой главы расскажут вам о жителях населяющих север этого удивительного мира.
        </p>
    </div>
    <div className={classes.triangles}>
        <div className={classes.blueTriangle}><DwarvesSelectionButton/></div>
        <div className={classes.greenTriangle}><OrcsSelectionButton/></div>
    </div>
</div>
    )
}