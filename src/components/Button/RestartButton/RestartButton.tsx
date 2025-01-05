import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function RestartButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate(0);
  }

  return (
    <button className={classes.restartButton} type="button" title="Restart" onClick={handleClick}>
    </button>
  );
}