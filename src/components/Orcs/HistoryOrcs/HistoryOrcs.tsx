import classes from './../Styles/OrcsKingdom.module.css'
import BannerOfBearPeaks from '../../../images/Dwarves/HistoryBearPeaks/BannerOfBearPeaks.webp'
import { AccordionState } from './AccordionOrcsKingdom/AccordionState'

export const HistoryOfOrcsKingdom = () => {
    return (
  <div className={classes.bodyHistory}>
  <div className={classes.titleHistory}>
  <img title="Знамя "   alt="Герб" src={BannerOfBearPeaks} className={classes.Banner}/>
  <h1>Orcs Kingdom</h1>
  <img title="Знамя"  alt="Герб" src={BannerOfBearPeaks} className={classes.Banner}/>
 </div>
 <AccordionState/>
  </div>
  )
} 