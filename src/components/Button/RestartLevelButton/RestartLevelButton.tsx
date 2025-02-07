import classes from '../../Styles/Styles.module.css'

export function RestartLevelButton() {
  function handleClick() {
    window.location.reload();
  }

  return (
    <div className={classes.button}>
      <button className={classes.restartLevelButton} type="button" title="Restart Level" onClick={handleClick}></button>
    </div>
  );
}