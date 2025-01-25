import classes from '../Styles/BlackForest.module.css'
import { GuardiansOfSpirits } from './GuardiansOfSpirits/GuardiansOfSpirits'
import { Gangs } from './Gangs/Gangs'
import { Hunters } from './Hunters/Hunters'
import { Workers } from './Workers/Workers'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'
import GreenTriangle from '../../../images/HomePageImage/GreenTriangle.webp'


export const Communities = () => {
    return (
    <div>
<div className={classes.communities}>
        <div className={classes.buttons}><HomeButton/><span>Communities</span><BackButton/></div>
 
 <div className={classes.communitiesLists}>
    
       <img src={GreenTriangle} className={classes.greenTriangleCommuties1}/>
              <GuardiansOfSpirits/>
       <h5 className={classes.titleGuardiansOfSpirits}>Guardians of spirits</h5>  
        
       <img src={GreenTriangle} className={classes.greenTriangleCommuties2}/>
              <Hunters/>
       <h5 className={classes.titleHunters}>Hunters</h5>
 </div>

 <div className={classes.communitiesLists}>
  
       <img src={GreenTriangle} className={classes.greenTriangleCommuties3}/>
              <Workers/>
       <h5 className={classes.titleWorkers}>Workers</h5>
        
       <img src={GreenTriangle} className={classes.greenTriangleCommuties4}/>
              <Gangs/>
       <h5 className={classes.titleGangs}>Gangs</h5>
 </div>

 </div>
</div>
)
}