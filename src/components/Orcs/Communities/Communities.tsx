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
        <div className={classes.buttons}><HomeButton/><p>Общины</p><BackButton/></div>
 
 <div className={classes.communitiesLists}>
    
       <img src={GreenTriangle} className={classes.greenTriangleCommuties1} alt='Green triangle'/>
              <GuardiansOfSpirits/>
       <h5 className={classes.titleGuardiansOfSpirits}>Хранители духов</h5>  
        
       <img src={GreenTriangle} className={classes.greenTriangleCommuties2} alt='Green triangle'/>
              <Hunters/>
       <h5 className={classes.titleHunters}>Охотники</h5>
 </div>

 <div className={classes.communitiesLists}>
  
       <img src={GreenTriangle} className={classes.greenTriangleCommuties3} alt='Green triangle'/>
              <Workers/>
       <h5 className={classes.titleWorkers}>Рабочие</h5>
        
       <img src={GreenTriangle} className={classes.greenTriangleCommuties4} alt='Green triangle'/>
              <Gangs/>
       <h5 className={classes.titleGangs}>Банды</h5>
 </div>

 </div>
</div>
)
}