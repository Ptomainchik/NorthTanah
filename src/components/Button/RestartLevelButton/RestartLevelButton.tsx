import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function RestartLevelButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(0);
  }

  return (
    <div className={classes.button}>
      <button className={classes.restartLevelButton} type="button" title="Restart Level" onClick={handleClick}></button>
    </div>
  );
}