import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../Styles/BearPeaks.module.css'
import { TableGuilds } from "./ TableGuilds/GuildTable"
import { HomeButton } from "../../Button/HomeButton/HomeButton"
import { BackButton } from "../../Button/BackButton/BackButton"



export const Guilds = () => {
    return <div>
      <div className={classes.button}><HomeButton/><span>Guilds</span><BackButton/></div>
      <div className={classes.guilds}>
<div className={classes.guildsLists}>
  <div className={classes.guildBlock}>   
      <BlacksmithGuild/>
      <h2>Blacksmith Guilds</h2>
    </div>
  
  <div className={classes.guildBlock}> 
      <MerchantsGuild/>
      <h2>Merchant Guild</h2>
    </div>
</div>
 <TableGuilds/>
</div>
</div>
}