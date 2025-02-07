import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Styles.module.css'

export function RestartLevelButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    const currentPath = window.location.pathname;
    navigate(currentPath);
  };

  return (
    <div className={classes.button}>
      <button className={classes.restartLevelButton} type="button" title="Restart Level" onClick={handleClick}></button>
    </div>
  );
}