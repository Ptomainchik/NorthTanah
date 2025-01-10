import { Accordion } from "./Accordion";
import classes from '../../Styles/BlackForest.module.css'
import Awaking from "../../../../images/Orcs/HistoryBlackForest/Awakening.webp"
import ExodusToTheBlackForest from "../../../../images/Orcs/HistoryBlackForest/ExodusToTheBlackForest.webp" 
import BoarValley from "../../../../images/Orcs/HistoryBlackForest/BoarValley.webp"
import Construction from "../../../../images/Orcs/HistoryBlackForest/Construction.webp"
import Council from "../../../../images/Orcs/HistoryBlackForest/Council.webp"
import Solution from "../../../../images/Orcs/HistoryBlackForest/Solution.webp"
import Booty from "../../../../images/Orcs/HistoryBlackForest/Booty.webp"
import DwarvenAttack from "../../../../images/Orcs/HistoryBlackForest/DwarvenAttack.webp"
import ScorchedSettlement from "../../../../images/Orcs/HistoryBlackForest/ScorchedSettlement.webp"
import FirstKing from "../../../../images/Orcs/HistoryBlackForest/FirstKing.webp"

export const AccordionState = () => {
    const accordionItems = [
      {
        title: 'История Чёрного леса',
        content: (<div>
            <div className={classes.pictures}>
  <img title="Пробуждение" src={Awaking} alt="Пробуждение" className={classes.awaking}/>
  <img title="Исход в Чёрный лес" src={ExodusToTheBlackForest} alt="Исход в Чёрный лес" className={classes.exodus}/>
</div>

 <div className={classes.contentScroll}>
  <h2>Пробуждение и новый дом</h2>
     <p><strong>
       В далёкие тысячелетия, когда Танах стал оттаивать от эпохи зимы. Под пригорьем Медвежьих вершин, в недрах земли,
       стали образовываться пустоты, на месте вечной мерзлоты. Там в пещерных залах, начали пробуждаться орочьи ловцы духов,
       погружённые в вековой транс. Сбросив оковы сна, они приступили к возвращению духов в тела своих сородичей.
       После того как все пришли в себя, старший из ловцов повёл свой народ через извилистые тоннели пещер на юг.
       Где орки вышли на поверхность, увидев пред собой древние леса. Непроглядный мрак и туман,
       окутывал огромные стволы чащобы. Лишь те немногие прорывавшиеся лучи солнца, сквозь кроны деревьев,
       давали рассмотреть очертания местности. Это был тот самый Чёрный лес, ставший для орков их новым домом.  
     </strong></p> 
</div>
          </div>
        ),
      },
      {
        title: 'Первые Общины',
        content: (
          <div>
           <div className={classes.pictures}>
    <img title="Долина кабанов" className={classes.pictureLeft} src={BoarValley} alt="Долина кабанов"/>
    <img title="Строительство" className={classes.pictureRight} src={Construction} alt="Строительство"/>
  </div>
  <div className={classes.contentScroll}>
      <h2>Первые Общины</h2>
      <p><strong> 
        По своей природе орки охотники, а не собиратели. И это первое чем они начали заниматься.
        Благо в лесах обитало множество разнообразной дичи. А самой массовой добычей стали кабаны.
        Из-за преобладания дубов их количество исчислялось десятками тысяч. Они образовывали группы,
        а группы перерастали в своры. Что привело к одной организованной общине.
        Но среди орков нашлись и те кто предпочитал всякого рода ремёсла, не связанные с охотой.
        Такие, как работа с деревом, выделка шкур, выплавка металлов и многое другое.
        По образу своих собратьев, они организовали общину рабочих.
      </strong></p>
    </div>
          </div>
        ),
      },
      {
        title: 'Объединение',
        content: (
          <div>
      <div className={classes.pictures}>
   <img title="Решение" className={classes.pictureLeft} src={Solution} alt="Решение"/>
   <img title="Добыча" className={classes.pictureRight} src={Booty} alt="Добыча"/>
  </div>

  <div className={classes.contentScroll}>
        <h2>Объединение</h2>
        <p><strong>
          Помимо охоты и ремёсел, у орков процветала тёмная сторона их натуры. Воровство у сородичей было повсеместным явлением,
          а ещё нападения на слабо охраняемые караваны и мародёрство, так же имели место.
          Так по всему лесу стали появляться малочисленные шайки, которые вели между собой открытую вражду.
          От чего страдало всё население чернолесья. Молодой вор Хармук устал смотреть, как его собратья режут друг другу глотки,
          из-за мелочной поживы. Он организовал банду из первоклассных воров, пообещав им полное покровительство всей группировки.
          Те же в свою очередь обязались оставлять процент от краж в казне новой общины. Но это был первый шаг в наведении порядка.
          Новоиспечённый глава воров, вызвал лидеров двух крупнейших шаек - грабителей и мародёров, на сходку.
          Где предложил им пойти по тому же пути и позже объединиться в одну централизованную общину, с запретом преступлений против соплеменников.
        </strong></p>
      </div>

          </div>
        ),
      },
      {
        title: 'Агрессия гномов',
        content: (
          <div>
      <div className={classes.pictures}>
   <img title="Нападение гномов" className={classes.pictureLeft} src={DwarvenAttack} alt="Нападение гномов"/>
   <img title="Выжженное поселение" className={classes.pictureRight} src={ScorchedSettlement} alt="Выжженное поселение"/>
  </div>

  <div className={classes.contentScroll}>
        <h2>Агрессия гномов</h2>
        <p><strong>
          Дела в Чёрном Лесу стали налаживаться. Охотники - снабжали дичью, рабочие - отстраивали поселения, банды - приносили прибыль,
          а ловцы духов - заботились о нематериальном мире. Пока однажды с севера не пришли плохие новости.
          С Медвежьих Вершин спустились гномы и уничтожили все тамошние поселения. Это были не слабые отряды патрулей,
          с которыми орки сталкивались ни раз, наказывая забредших в лес вновь и вновь.
          На этот раз чернолесье атаковали организованные войска, огромной численности.
          Противостоять такой мощи орки не могли, и поселения сгорали одно за другим. Ближайший лес выгорел полностью,
          лишь болота не дали продвинуться пламени вглубь. По большенству обгоревших тел зеленокожих, можно было понять, 
          что погибли они в страданиях или же были казнены. Общины взбунтовались и требовали жёсткого ответа.
          Требовался лидер поведший эту волну к возмездию.
        </strong></p>
  </div>
          </div>
        ),
      },
      {
        title: 'Первый король',
        content: (
          <div>
      <div className={classes.pictures}>
  <img title="Собрание" className={classes.pictureLeft} src={Council} alt="Собрание"/>
  <img title="Первый король" className={classes.pictureRight} src={FirstKing} alt="Первый король"/>
  </div>
  <div className={classes.contentScroll}>
        <h2>Первый король</h2>
        <p><strong>
          У орков никогда не было предводителя. Все вопросы по управлению жизнедеятельности страны,
          решались главами общин. Что иногда приводило к неразберихе. Агрессия гномов обнажила уязвимое место в общинном порядке.
          После вероломного нападения, первый ловец духов Норгуз, созвал совет всех глав общин у Чёрной скалы.
          Каждый из них желал стать единоправным королём. Спустя долгие споры,
          они решили поделить корону правления по временам года. Зимой - королём становился первый ловец духов.
          Весной - главный бригадир рабочих. Летом - старший охотник. Осенью - вождь банд. Первым королём,
          выпала честь стать Родзарику, главе грабителей, мародёров и воров. Не задумываясь, он провозгласил,
          чтобы орки готовились к войне.    
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