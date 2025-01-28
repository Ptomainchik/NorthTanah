import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function NextOrcsLevelButton() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    if (window.location.pathname === "/battlefieldorlvl1") {
       navigate("/battlefieldorlvl2")
    }
    else if (window.location.pathname === "/battlefieldorlvl2") {
      navigate("/battlefieldorlvl3")
    }
    else if (window.location.pathname === "/battlefieldorlvl3") {
      navigate("/battlefieldorlvl4")
    }
  }  

  return (
    <div className={classes.button}>
      <button className={classes.nextLevelButton} type="button" title="Next Level" onClick={handleClick}></button>
    </div>
  );
}