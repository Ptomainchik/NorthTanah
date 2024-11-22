import { Accordion } from "./Accordion";
import classes from '../../Styles/BlackForest.module.css'
import Awaking from "../../../../images/Orcs/HistoryOrcsForest/Awakening.jpg"
import ExodusToTheBlackForest from "../../../../images/Orcs/HistoryOrcsForest/ExodusToTheBlackForest.jpg" 
import BoarValley from "../../../../images/Orcs/HistoryOrcsForest/BoarValley.jpg"
import Construction from "../../../../images/Orcs/HistoryOrcsForest/Construction.jpg"
import Council from "../../../../images/Orcs/HistoryOrcsForest/Council.jpg"
import Solution from "../../../../images/Orcs/HistoryOrcsForest/Solution.jpg"
import Booty from "../../../../images/Orcs/HistoryOrcsForest/Booty.jpg"
import DwarvenAttack from "../../../../images/Orcs/HistoryOrcsForest/DwarvenAttack.jpg"
import ScorchedSettlement from "../../../../images/Orcs/HistoryOrcsForest/ScorchedSettlement.jpg"
import FirstKing from "../../../../images/Orcs/HistoryOrcsForest/FirstKing.jpg"

export const AccordionState = () => {
    const accordionItems = [
      {
        title: 'История Орков',
        content: (
          <div>
            <div className={classes.pictures}>
  <img title="Пробуждение" src={Awaking} alt="Пробуждение" className={classes.awakingAndExodus}/>
  <img title="Исход в Чёрный лес" src={ExodusToTheBlackForest} alt="Исход в Чёрный лес" className={classes.awakingAndExodus}/>
</div>

 <div className={classes.contentScroll}>
  <h2>Пробуждение и Исход</h2>
     <p><strong>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi corporis labore dignissimos odit et, fuga doloribus numquam adipisci officia neque ut similique voluptatibus consequatur ipsum facere eos amet laudantium.       
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, exercitationem ex rem excepturi doloribus asperiores laudantium illum assumenda, dolorem cupiditate quo, quam cumque quaerat nulla corrupti odit repellendus architecto culpa.
     Exercitationem, obcaecati pariatur, vitae eum dignissimos minima sunt odit dicta suscipit ducimus labore ex magnam quasi dolore! Facere minima quaerat soluta nisi in, iste placeat eos dolores accusantium aliquid reprehenderit.
     </strong></p> 
</div>
          </div>
        ),
      },
      {
        title: 'Необходимость',
        content: (
          <div>
           <div className={classes.pictures}>
    <img title="Долина кабанов" className={classes.picture} src={BoarValley} alt="Долина кабанов"/>
    <img title="Строительство" className={classes.picture} src={Construction} alt="Строительство"/>
  </div>
  <div className={classes.contentScroll}>
      <h2>Охота и Стройка</h2>
      <p><strong> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est quaerat ullam. Odit iure distinctio eligendi commodi deserunt at nam porro laborum natus, nisi enim repudiandae mollitia et cum facilis.
      Adipisci, nostrum aperiam cumque ipsa explicabo doloremque fuga inventore reprehenderit reiciendis veniam obcaecati. A aliquid modi doloremque dolor natus ea! Modi similique laudantium nesciunt autem velit saepe, dignissimos quos illo.
      </strong></p>
    </div>
          </div>
        ),
      },
      {
        title: 'Объединение шаек',
        content: (
          <div>
      <div className={classes.pictures}>
   <img title="Решение" className={classes.picture} src={Solution} alt="Решение"/>
   <img title="Добыча" className={classes.picture} src={Booty} alt="Добыча"/>
  </div>

  <div className={classes.contentScroll}>
        <h2>Объединение</h2>
        <p><strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fuga voluptatum illum quidem unde, molestias inventore numquam error, impedit ipsum omnis accusantium esse sit odit assumenda neque, ipsa dolorum officia.
        Dicta ratione consectetur nemo non ducimus dignissimos dolore ipsa beatae labore alias explicabo tenetur quibusdam accusantium iste, eaque ea. Eligendi, dolorem. Velit consequuntur nisi molestiae quis beatae amet officiis hic!   
        </strong></p>
      </div>

          </div>
        ),
      },
      {
        title: 'Агрессия дварфов',
        content: (
          <div>
      <div className={classes.pictures}>
   <img title="Нападение дварфов" className={classes.picture} src={DwarvenAttack} alt="Нападение дварфов"/>
   <img title="Выжженное поселение" className={classes.picture} src={ScorchedSettlement} alt="Выжженное поселение"/>
  </div>

  <div className={classes.contentScroll}>
        <h2>Нападение дварфов</h2>
        <p><strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum ut ipsa libero! Delectus repellendus veniam, blanditiis sit laudantium fuga voluptatem, ex quia asperiores necessitatibus sint incidunt! Mollitia, hic illum!
          Dolor inventore, facilis quasi optio corporis labore quo nulla esse perspiciatis impedit rerum similique dolorum asperiores voluptas laborum? Corporis, blanditiis? Delectus rerum sunt exercitationem iusto ab omnis veritatis, ipsam laborum.
        </strong></p>
  </div>
          </div>
        ),
      },
      {
        title: 'Собрание',
        content: (
          <div>
      <div className={classes.pictures}>
  <img title="Собрание" className={classes.picture} src={Council} alt="Собрание"/>
  <img title="Первый король" className={classes.picture} src={FirstKing} alt="Первый король"/>
  </div>
  <div className={classes.contentScroll}>
        <h2>Собрание</h2>
        <p><strong>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quaerat esse, neque eligendi inventore voluptatum eius quasi delectus earum, cumque facilis quam quidem blanditiis quas perferendis fugiat, consequatur a. Veniam.
         Perferendis assumenda eius eveniet fugit rem facilis sunt rerum repellat! Porro nostrum recusandae dolor nihil consequatur odio fuga, necessitatibus dolorem soluta consequuntur facilis, maiores eos. Consequuntur dolorum nostrum voluptate ipsam.
        </strong></p>
  </div>
          </div>
        ),
      }
    ];
  
    return (
      <div className={classes.containerAcc}>
        <Accordion items={accordionItems} />
      </div>
    );
  }