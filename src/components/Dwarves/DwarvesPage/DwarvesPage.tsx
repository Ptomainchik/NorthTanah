import classes from '../Styles/BearPeaks.module.css'
import DwarfWithBook from '../../../images/Dwarves/DwarvesPage/DwarfWithBook.jpg'
import { Link } from 'react-router-dom'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'



export const DwarvesPage = () => {
    return (
    <div className={classes.dwarvesPage}>
      <div className={classes.button}><HomeButton/><span>Dwarves</span><BackButton/></div>
    <div className={classes.info}>
      <div className={classes.infoPage}>
             <img title="Гном" src={DwarfWithBook} alt="Гном" className={classes.imgPage}/>
          <div className={classes.infoTextPage}>
          <h6>Гномы</h6>
          <p>Медвежьи вершины</p>
         </div>
      </div>

      <div className={classes.blockLink}>
          <Link to="/historybp" title="История королевства Медвежьих вершин" className={classes.dwarvesPageButton} ><h5>The history of Bear Peaks</h5></Link>
          <Link to="/guilds" title="Гильдии королевства Медвежьих вершин" className={classes.dwarvesPageButton} ><h5>Guilds of Bear Peaks</h5></Link>
          <Link to="/battlefielddwlvl1" title="Боевое поле" className={classes.dwarvesPageButton} ><h5>Battlefield</h5></Link>
      </div>

<div className={classes.storyBlock}>
  <div className={classes.story}>
    <p>
      Раса гномов представляет собой - низкорослых существ, коренастого телосложения. Особенностью их характера является предприимчивость.
      Они могут извлечь выгоду, там где другие народы не увидели бы ничего, кроме убытков. Торговцы королевства Медвежьих вершин славятся по всему Танаху.
      Так же они очень талантливые ремесленники, способные произвести что угодно, наивысшего качества.
      Богами у них являются праотцы гномы, те кто совершал великие дела, будь то победы в битвах, изменение жизненного уклада и спасение королевства от упадка.
      Так количество божеств измеряется десятками, а то и сотнями. Большинство из которых уже никто не помнит. 
      Но есть два самых почитаемых, это прародитель Кунок Укротитель и сам король Доронг Сапфир, являющийся его потомком. А значит праотцом во плоти.
    </p>
  </div>
  </div>
</div>
</div>
)
}