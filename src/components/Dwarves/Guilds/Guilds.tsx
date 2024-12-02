import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../Styles/BearPeaks.module.css'
import { HomeButton } from "../../Button/HomeButton/HomeButton"
import { BackButton } from "../../Button/BackButton/BackButton"



export const Guilds = () => {
    return <div>
      <div className={classes.guilds}>
      <div className={classes.button}><HomeButton/><span>Guilds</span><BackButton/></div>
<div className={classes.guildsLists}>

      <div className={classes.blueTriangleGuilds1}></div>    
      <BlacksmithGuild/>
      <h5 className={classes.titleBlacksmith}>Blacksmith</h5>

      <div className={classes.blueTriangleGuilds2}></div>
      <h5 className={classes.titleMerchants}>Merchants</h5>
      <MerchantsGuild/>
  
</div>
 
</div>
</div>
}