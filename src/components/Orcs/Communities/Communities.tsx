import classes from '../Styles/BlackForest.module.css'
import { GuardiansOfSpirits } from './GuardiansOfSpirits/GuardiansOfSpirits'
import { Gangs } from './Gangs/Gangs'
import { Hunters } from './Hunters/Hunters'
import { Workers } from './Workers/Workers'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'



export const Communities = () => {
    return <div>
        <div className={classes.communities}>
        <div className={classes.button}><HomeButton/><span>Communities</span><BackButton/></div>
 <div className={classes.communitiesLists}>
    
        <div className={classes.greenTriangleCommuties1}></div>
        <GuardiansOfSpirits/>
        <h5 className={classes.titleGuardiansOfSpirits}>Guardians of spirits</h5>  
    
        <div className={classes.greenTriangleCommuties2}></div>
        <h5 className={classes.titleHunters}>Hunters</h5>
        <Hunters/>
    
 </div>

 <div className={classes.communitiesLists}>
  
        <div className={classes.greenTriangleCommuties3}></div>
        <Workers/>
        <h5 className={classes.titleWorkers}>Workers</h5>

        <div className={classes.greenTriangleCommuties4}></div>
        <h5 className={classes.titleGangs}>Gangs</h5>
        <Gangs/>
        
   
    </div>

 </div>
</div>

}