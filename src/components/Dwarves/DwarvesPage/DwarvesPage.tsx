import classes from '../Styles/BearPeaks.module.css'
import DwarfWithBook from '../../../images/Dwarves/DwarvesPage/DwarfWithBook.jpg'
import { Link } from 'react-router-dom'
import { HomeButton } from '../../Button/HomeButton/HomeButton'
import { BackButton } from '../../Button/BackButton/BackButton'



export const DwarvesPage = () => {
    return (
    <div className={classes.dwarvesPage}>
      <div className={classes.buttons}><HomeButton/><p>Медвежьи Вершины</p><BackButton/></div>
    <div className={classes.info}>
      <div className={classes.infoPage}>
             <img title="Гном" src={DwarfWithBook} alt="Гном" className={classes.imgPage} draggable="false"/>
          <div className={classes.infoTextPage}>
          <h6>Гномы</h6>
          <p>Медвежьи Вершины</p>
         </div>
      </div>

      <div className={classes.blockLink}>
          <Link to="/historybp" title="История Медвежьих вершин" className={classes.dwarvesPageButton} ><h5>История Медвежьих Вершин</h5></Link>
          <Link to="/guilds" title="Гильдии Медвежьих вершин" className={classes.dwarvesPageButton} ><h5>Гильдии Медвежьих Вершин</h5></Link>
          <Link to="/battlefielddwlvl1" title="Боевое поле" className={classes.dwarvesPageButton} ><h5>Поле боя</h5></Link>
      </div>

  <div className={classes.story}>
    <p>
      Раса гномов представляет собой низкорослых существ коренастого телосложения. Особенностью их характера является предприимчивость. Они могут извлечь выгоду там, где другие народы не увидели бы ничего, кроме убытков. 
      Торговцы королевства Медвежьих Вершин славятся по всему Танаху. Также они очень талантливые ремесленники, способные произвести что угодно наивысшего качества.
      Богами у них являются праотцы-гномы - те, кто совершал великие дела: победы в битвах, изменения жизненного уклада или спасение королевства от упадка. 
      Количество божеств измеряется десятками, а то и сотнями, большинство из которых уже никто не помнит.
      Но есть два самых почитаемых: это прародитель Кунок Укротитель и сам король Доронг Сапфир, являющийся его потомком, а значит, праотцом во плоти.
    </p>
  </div>
  
</div>
</div>
)
}