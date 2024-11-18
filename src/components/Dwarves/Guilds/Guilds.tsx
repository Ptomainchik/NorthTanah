import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../Styles/BearPeaks.module.css'
import { TableGuilds } from "./ TableGuilds/GuildTable"



export const Guilds = () => {
    return <div className={classes.guilds}>
      <h1>Guilds</h1>
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

}