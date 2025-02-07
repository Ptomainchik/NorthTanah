import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BearPeaks } from './components/Dwarves/BearPeaks/BearPeaks';
import { HistoryOfBearPeaks } from './components/Dwarves/HistoryOfBearPeaks/HistoryOfBearPeaks';
import { Guilds } from './components/Dwarves/Guilds/Guilds';
import { BlackForest } from './components/Orcs/BlackForest/BlackForest';
import { HomePage } from './components/HomePage/HomePage';
import { HistoryOfBlackForest } from './components/Orcs/HistoryOfBlackForest/HistoryOfBlackForest';
import { Communities } from './components/Orcs/Communities/Communities';
import { DwarvesBattlefieldLvl1 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLvl1';
import { DwarvesBattlefieldLvl2 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLvl2';
import { DwarvesBattlefieldLvl3 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLvl3';
import { DwarvesBattlefieldLvl4 } from './components/Battlefields/DwarvesBattlefield/DwarvesBattlefieldLvl4';
import { OrcsBattlefieldLvl1 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLvl1';
import { OrcsBattlefieldLvl2 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLvl2';
import { OrcsBattlefieldLvl3 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLvl3';
import { OrcsBattlefieldLvl4 } from './components/Battlefields/OrcsBattlefield/OrcsBattlefieldLvl4';
import { RestartPage } from './components/Button/RestartPage/RestartPage';




function App() {
  return (

    <BrowserRouter>
    <Routes>
          <Route path="/" element={<HomePage/> } />
          <Route path="dwarves" element={<BearPeaks/>} />
          <Route path="historybp" element={<HistoryOfBearPeaks/>} />
          <Route path="guilds" element={<Guilds/>} />
          <Route path="orcs" element={<BlackForest/>} />
          <Route path="historybf" element={<HistoryOfBlackForest/>} />
          <Route path="communities" element={<Communities/>} />
          <Route path="battlefielddwlvl1" element={<DwarvesBattlefieldLvl1/>}/>
          <Route path="battlefielddwlvl2" element={<DwarvesBattlefieldLvl2/>}/>
          <Route path="battlefielddwlvl3" element={<DwarvesBattlefieldLvl3/>}/>
          <Route path="battlefielddwlvl4" element={<DwarvesBattlefieldLvl4/>}/>
          <Route path="battlefieldorlvl1" element={<OrcsBattlefieldLvl1/>}/>
          <Route path="battlefieldorlvl2" element={<OrcsBattlefieldLvl2/>}/>
          <Route path="battlefieldorlvl3" element={<OrcsBattlefieldLvl3/>}/>
          <Route path="battlefieldorlvl4" element={<OrcsBattlefieldLvl4/>}/>
          <Route path="restart" element={<RestartPage/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;


