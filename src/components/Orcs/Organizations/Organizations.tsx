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
    <div className={classes.organizationBlock}>
        <ol className={classes.elemOrganizationList}>
          <p><strong>Ловцы духов</strong></p>
        </ol>
        <SpiritCatchers/>
    </div>
    <div className={classes.organizationBlock}>
        <ol className={classes.elemOrganizationList2}>
          <p><strong>Охотники</strong></p>
        </ol>
        <Hunters/>
    </div>   
 </div>

 <div className={classes.organizationsLists}>
    <div className={classes.organizationBlock}>
        <ol className={classes.elemOrganizationList}>
          <p><strong>Работники</strong></p>
        </ol>
        <Workers/>
    </div>
    <div className={classes.organizationBlock}>
        <ol className={classes.elemOrganizationList3}>
          <p><strong>Банды</strong></p>
        </ol>
        <Gangs/>
    </div>
    </div>
 <div>
  <TableOrganizations/>
 </div>
 </div>


}