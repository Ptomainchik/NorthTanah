import classes from './../Styles/OrcsKingdom.module.css'
import BannerOfOrcs from '../../../images/Orcs/HistoryOrcsForest/BannerOfOrcs.webp'
import { AccordionState } from './AccordionOrcsKingdom/AccordionState'

export const HistoryOfOrcsKingdom = () => {
    return (
  <div className={classes.bodyHistory}>
  <div className={classes.titleHistory}>
  <img title="Знамя "   alt="Герб" src={BannerOfOrcs} className={classes.banner}/>
  <h1>Orcs Kingdom</h1>
  <img title="Знамя"  alt="Герб" src={BannerOfOrcs} className={classes.banner}/>
 </div>
 <AccordionState/>
  </div>
  )
} 