import React, { ReactElement, useState } from "react"
import classes from '../../Styles/Styles.module.css'
import HeadDwarfBlacksmithMorei from '../../../images/Osnova/HeadDwarfBlacksmithMorei.jpg'
import DwarfBlacksmithSalgon from '../../../images/Osnova/DwarfBlacksmithSalgon.jpg'
import DwarfBlacksmithGarkan from '../../../images/Osnova/DwarfBlacksmithGarkan.jpg'


const BlacksmithGuildDescription = () => {
    return (<div>
   <div className={classes.dk}>
    <img title="Морей Хранитель" className={classes.k} src={HeadDwarfBlacksmithMorei} alt="Гном кузнец сидит в деревяном кресле в кузнице"/>
    <span>Морей Хранитель - самый опытный мастер и глава гильдии кузнецов. Сколько ему лет не знает он и сам, но знания накопившиеся за всю жизнь в кузнечном ремесле он хранит до сих пор.
    Стараясь не выдавать их своим же ученикам. Делая это порционно и лишь избранным. За что его и прозвали Хранителем.
      </span>
   </div>
   <div className={classes.dkk}>  
    <img title="Салгон" className={classes.kk} src={DwarfBlacksmithSalgon} alt="Гном кузнец стоит посреди кузницы"/>
    <span>Салгон - отвечает в гильдии за обучение кузнечному делу. 
      Он тот к кому в первую очередь попадают новенькие не опалённые жаром кузнечного горна храбрецы решившие связать свою жизнь с наковальней.</span>
   </div>    
   <div className={classes.dkkk}>
    <img title="Гаркан" className={classes.kkk} src={DwarfBlacksmithGarkan} alt="Гном кузнец стоит посреди кузницы"/>
    <span>Гаркан - отвечает за поставку сырья. Он днём и ночью приглядывает за кузнями, чтобы металл был всегда в достатке. Хотя его мастерству в ремесле ковки,
      могут позавидовать многие.
        </span>
   </div>
</div>
  
)
}

type ModalPropsType = {
    visible: boolean
    content: ReactElement | string
    close: ReactElement | string
  
}

const ModalBlacksmithGuild = ({visible = false, content = '', close = ''}: ModalPropsType) => {
    if (!visible) return null;
    return (
    <div className={classes.diakuz} onClick={e => e.stopPropagation()}>
        <div>
        {content}
        </div>
        {close && <div>{close}</div>}
  </div>
 )
}

export const BlacksmithGuild = () => {
    const [isModal, setModal] = useState(false)
    const onClose = () => setModal(false)
    return (
        <React.Fragment>
            <button onClick={() => setModal(true)} className={classes.gilkuz} title="Гильдия Кузнецов"/>
            <ModalBlacksmithGuild
                visible={isModal}
                content={<BlacksmithGuildDescription/>}
                close={<button onClick={onClose} className={classes.btnclk} value="Закрыть">Закрыть</button>}
            />
        </React.Fragment>
    );
};

