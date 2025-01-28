import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function NextDwarvesLevelButton() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    if (window.location.pathname === "/battlefielddwlvl1") {
       navigate("/battlefielddwlvl2")
    }
    else if (window.location.pathname === "/battlefielddwlvl2") {
      navigate("/battlefielddwlvl3")
    }
    else if (window.location.pathname === "/battlefielddwlvl3") {
      navigate("/battlefielddwlvl4")
    }
  }  

  return (
    <div className={classes.button}>
      <button className={classes.nextLevelButton} type="button" title="Next Level" onClick={handleClick}></button>
    </div>
  );
}