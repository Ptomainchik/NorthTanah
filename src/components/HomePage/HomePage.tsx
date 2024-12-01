import classes from "../Styles/Styles.module.css"
import { DwarvesSelectionButton } from "../Button/HomePageButton/ChoiceOfDwarves"
import { OrcsSelectionButton } from "../Button/HomePageButton/ChoiceOfOrcs"

export const HomePage = () => {
    return(
<div className={classes.choice}>
    <div className={classes.choiceTitle}>Tanah <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, commodi quidem. Consequuntur odit aut nihil iusto, vel tenetur. 
        Tempora perferendis id, quae repellendus veniam molestias fugit error doloremque voluptas! Qui.</p>
    </div>
    <div className={classes.triangles}>
        <div className={classes.blueTriangle}></div>
        <div className={classes.greenTriangle}></div>
    </div>
       
    <DwarvesSelectionButton/>
    <OrcsSelectionButton/>
</div>
    )
}