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
           <img title="Орк" src={OrcShaman} alt="Орк" className={classes.imgPage}/>
         <div className={classes.infoTextPage}>
           <h6>Орки</h6>
           <p>Чёрный лес</p>
        </div>
  </div>
  <div className={classes.blockLink}>
          <Link to="/historybf" title="История Чёрного Леса" className={classes.orcsPageButton} ><h5>The history of Black Forest</h5></Link>
          <Link to="/communities" title="Общины Чёрного Леса" className={classes.orcsPageButton} ><h5>Communities of Black Forest</h5></Link>
          <Link to="/battlefieldorlvl1" title="Боевое поле" className={classes.orcsPageButton} ><h5>Battlefield</h5></Link>
  </div>
  
  <div className={classes.story}>
    <p>
      Раса орков представляет из себя - зеленокожих существ среднего роста, крепкого телосложения. Они отнюдь не глупые, а даже очень смекалистые.
      Ведь только у них получилось выжить и создать королевство в дремучем, мрачном Чёрном лесу.
      Религия орков не связана с богами, они молятся духам предкам.
      Так в случае смерти тела, дух орка некуда не исчезает, а лишь ждёт момента когда его поймает хранитель духов, для того чтобы даровать жизнь новорождённому.
      Сама природа не подразумевает ни какой души у них. Дух матери поддерживает жизнь плода в утробе, в момент отделения пуповины младенец умирает. Но оживает вновь, после дарования ему духа предка от хранителя.
      Лишь несколько раз в году, рождаются орки с собственным духом, случается это только если духов родителей так же влечёт друг к другу!
    </p>
  </div>
  
</div>
</div>
    )
}