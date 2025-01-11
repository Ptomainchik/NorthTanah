import Modal from 'react-modal';
import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcsWin from "../../../../images/Battlefields/OrcsBattlefield/OrcsWin.webp"
import { NextOrcsLevelButton } from "../../../Button/NextOrcsLevelButton/NextOrcsLevelButton"

export const ModalOrcsWin123Lvl = () =>{

    return (
        <div>
           <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(4, 27, 1, 0.7)'}, content: {border: '2px solid black' }}}
               className={classes.orcsWin123Lvl} isOpen={true}>
                <div className={classes.blockModalWinOrcs123Lvl}>
                    <h2>Victory</h2>
                    <NextOrcsLevelButton/>
                    <h5>Next Level</h5>
                </div>
                <img className={classes.blockModalWinOrcs123Lvl} src={OrcsWin} alt="Win" />
            </Modal>
       </div>
    )
}

