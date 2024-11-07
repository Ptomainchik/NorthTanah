import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../../Styles/Styles.module.css'
import { GuildTable } from "./ GuildTable/GuildTable"


export const GuildsOk = () => {
    return <div className={classes.guilds}>
        <div className={classes.nad}>
 
 <ol className={classes.list}>
  <p><strong>Guilds:</strong></p>
  <strong>
  <li>name</li>
  <li>name</li>
  <li>name</li>
</strong>
 </ol>
 
 <ol className={classes.list1}>
  <p><strong>Guilds:</strong></p>
  <strong>
  <li>name</li>
  <li>name</li>
  </strong>
 </ol>
 </div>
 <div className={classes.guildsButton}>
 <BlacksmithGuild/>
 <MerchantsGuild/>
 </div>
 <GuildTable/>
</div>

}