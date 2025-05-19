import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../Styles/BearPeaks.module.css'
import { HomeButton } from "../../Button/HomeButton/HomeButton"
import { BackButton } from "../../Button/BackButton/BackButton"
import BlueTriangle from "../../../images/HomePageImage/BlueTriangle.webp"

export const Guilds = () => {
    return <div>
<div className={classes.guilds}>
      <div className={classes.buttons}><HomeButton/><p>Гильдии</p><BackButton/></div>
      <div className={classes.guildsLists}>

      <img className={classes.blueTriangleGuilds1} src={BlueTriangle} alt="Blue triangle"/>  
      <BlacksmithGuild/>
      <h5 className={classes.titleBlacksmith}>Кузнецы</h5>

      <img className={classes.blueTriangleGuilds2} src={BlueTriangle} alt="Blue triangle"/>
      <h5 className={classes.titleMerchants}>Торговцы</h5>
      <MerchantsGuild/>
  
</div>
 
</div>
</div>
}