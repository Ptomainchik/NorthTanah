import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function RestartButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    const currentPath = window.location.pathname;
    navigate(currentPath);
  };
  
  return (
    <div className={classes.button}>
    <button className={classes.restartButton} type="button" title="Restart" onClick={handleClick}>
    </button>
    </div>
  );
}