import { BlacksmithGuild } from "./BlacksmithGuild/BlacksmithGuild"
import { MerchantsGuild } from "./MerchantsGuild/MerchantsGuild"
import classes from '../Styles/BearPeaks.module.css'
import { GuildTable } from "./ GuildTable/GuildTable"


export const GuildsBp = () => {
    return <div className={classes.guilds}>
        <div className={classes.guildsLists}>
 
 <ol className={classes.elemGuildsList}>
  <p><strong>Гильдия кузнецов:</strong></p>
  <strong>
  <li>Морей Хранитель</li>
  <li>Салгон</li>
  <li>Гаркан</li>
</strong> 
 </ol>
 
 <ol className={classes.elemGuildsList2}>
  <p><strong>Гильдия торговцев:</strong></p>
  <strong>
  <li>Бартон Златопалый</li>
  <li>Гарберт</li>
  </strong>
 </ol>
 </div>
 <div className={classes.guildsShieldsButton}>
 <BlacksmithGuild/>
 <MerchantsGuild/>
 </div>
 <GuildTable/>
</div>

}