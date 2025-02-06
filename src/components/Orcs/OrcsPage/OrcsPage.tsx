import classes from '../Styles/BlackForest.module.css'
import OrcShaman from '../../../images/Orcs/OrcsPage/OrcShaman.jpg'
import { Link } from 'react-router-dom'
import { BackButton } from '../../Button/BackButton/BackButton'
import { HomeButton } from '../../Button/HomeButton/HomeButton'

export const OrcsPage = () => {
    return (
    <div className={classes.orcsPage}>
      <div className={classes.buttons}><HomeButton/><span>Orcs</span><BackButton/></div>
<div className={classes.info}> 
  <div className={classes.infoPage}>
           <img title="Орк" src={OrcShaman} alt="Орк" className={classes.imgPage} draggable="false"/>
         <div className={classes.infoTextPage}>
           <h6>Орки</h6>
           <p>Чёрный Лес</p>
        </div>
  </div>
  <div className={classes.blockLink}>
          <Link to="/historybf" title="История Чёрного Леса" className={classes.orcsPageButton} ><h5>The history of Black Forest</h5></Link>
          <Link to="/communities" title="Общины Чёрного Леса" className={classes.orcsPageButton} ><h5>Communities of Black Forest</h5></Link>
          <Link to="/battlefieldorlvl1" title="Боевое поле" className={classes.orcsPageButton} ><h5>Battlefield</h5></Link>
  </div>
  
  <div className={classes.story}>
    <p>
      Раса орков представляет собой зеленокожих существ среднего роста и крепкого телосложения. Они отнюдь не глупые, а даже очень смекалистые. 
      Ведь только у них получилось выжить и создать королевство в дремучем, мрачном Чёрном Лесу.
      Религия орков не связана с богами - они молятся духам предков. Так, в случае смерти тела, дух орка никуда не исчезает, а лишь ждёт момента, когда его поймает хранитель духов, чтобы даровать жизнь новорождённому.
      Сама природа орков не подразумевает наличия души. Дух матери поддерживает жизнь плода в утробе, но в момент отделения пуповины младенец умирает. 
      Однако он оживает вновь после дарования ему духа предка от хранителя.
      Лишь несколько раз в году рождаются орки с собственным духом. Это происходит только в том случае, если духи родителей также влечёт друг к другу!
    </p>
  </div>
  
</div>
</div>
    )
}