import classes from '../Styles/OrcsKingdom.module.css'
import { SpiritCatchers } from './SpiritCatchers/SpiritCatchers'
import { Gangs } from './Gangs/Gangs'
import { Hunters } from './Hunters/Hunters'
import { TableOrganizations } from './TableOrganizations/TableOrganizations'
import { Workers } from './Workers/Workers'


export const Organizations = () => {
    return <div className={classes.organizations}>
      <h2>Организации</h2>
 <div className={classes.organizationsLists}>
 <ol className={classes.elemOrganizationList}>
  <p><strong>Ловцы духов:</strong></p>
  <strong>
     <li>Норгуз</li>
</strong>
 </ol>
 
 <ol className={classes.elemOrganizationList2}>
  <p><strong>Охотники:</strong></p>
  <strong>
    <li>Малгар</li>
    <li>Бурзаг</li>
  </strong>
 </ol>

 <ol className={classes.elemOrganizationList3}>
  <p><strong>Работники:</strong></p>
  <strong>
    <li>Вакшиг</li>
  </strong>
 </ol>

 <ol className={classes.elemOrganizationList4}>
  <p><strong>Банды:</strong></p>
   <strong>
    <li>Родзарик</li>
    <li>Фругеш</li>
    <li>Хармук</li>
   </strong>
 </ol>
 </div>
 <div className={classes.organizationsIconsButton}>
 <Workers/>
 <Hunters/>
 <Gangs/>
 <SpiritCatchers/>
 </div>
 <TableOrganizations/>
</div>

}